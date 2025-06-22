"use client";

import { motion, useInView, useAnimation } from "motion/react";
import { useEffect, useRef, ReactNode, useState } from "react";

interface RevealProps {
  children: ReactNode | ReactNode[];
  className?: string;
  stagger?: number;
  offset?: number;
  delay?: number;
}

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const Reveal = ({
  children,
  className,
  stagger = 0.1,
  offset = 0,
  delay = 0,
}: RevealProps) => {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const [baseDelayPassed, setBaseDelayPassed] = useState(delay === 0);

  // Watch scroll direction
  useEffect(() => {
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrollDir(current > lastScroll ? "down" : "up");
      lastScroll = current;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Delay before reveal (only when scrolling down)
  useEffect(() => {
    if (delay > 0 && scrollDir === "down") {
      const timeout = setTimeout(() => {
        setBaseDelayPassed(true);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    } else {
      setBaseDelayPassed(true);
    }
  }, [scrollDir, delay]);

  // Normalize to array
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <RevealChild
          key={index}
          index={index}
          stagger={stagger}
          offset={offset}
          baseDelayPassed={baseDelayPassed}
        >
          {child}
        </RevealChild>
      ))}
    </div>
  );
};

interface RevealChildProps {
  children: ReactNode;
  index: number;
  stagger: number;
  offset: number;
  baseDelayPassed: boolean;
}

const RevealChild = ({
  children,
  index,
  stagger,
  offset,
  baseDelayPassed,
}: RevealChildProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: `${offset}px 0px`, once: true });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (baseDelayPassed && inView && !hasAnimated) {
      const timeout = setTimeout(() => {
        controls.start("visible");
        setHasAnimated(true);
      }, stagger * 1000 * index);
      return () => clearTimeout(timeout);
    }
  }, [inView, baseDelayPassed, hasAnimated, index, stagger]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={childVariants}
    >
      {children}
    </motion.div>
  );
};
