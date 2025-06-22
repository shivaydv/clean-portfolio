import { Code } from "lucide-react";
import { ReactNode } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export type TechName =
  | "react"
  | "nextjs"
  | "nodejs"
  | "typescript"
  | "tailwind"
  | "html"
  | "css"
  | "shopify"
  | "wordpress"
  | "zustand";

const techMap: Record<
  TechName,
  { icon: (className?: string) => ReactNode; label: string }
> = {
  react: {
    icon: (className) => <FaReact className={className} />,
    label: "React",
  },
  nextjs: {
    icon: (className) => <SiNextdotjs className={className} />,
    label: "Next.js",
  },
  nodejs: {
    icon: (className) => <FaNodeJs className={className} />,
    label: "Node.js",
  },
  typescript: {
    icon: (className) => <SiTypescript className={className} />,
    label: "TypeScript",
  },
  tailwind: {
    icon: (className) => <SiTailwindcss className={className} />,
    label: "Tailwind",
  },
  html: {
    icon: (className) => <FaHtml5 className={className} />,
    label: "HTML5",
  },
  css: {
    icon: (className) => <FaCss3Alt className={className} />,
    label: "CSS3",
  },
  shopify: {
    icon: (className) => <FaShopify className={className} />,
    label: "Shopify",
  },
  wordpress: {
    icon: (className) => <FaWordpress className={className} />,
    label: "WordPress",
  },
  zustand: {
    icon: (className) => <Code className={className} />,
    label: "Zustand",
  },
};

export const TechStackItem = ({ tech }: { tech: TechName }) => {
  const item = techMap[tech];

  if (!item) return null;

  return (
    <div className="flex items-center justify-center gap-0 group/icon relative ">
      <span className="flex justify-center items-center p-1  ">
        {item.icon("w-5 h-5 text-foreground")}
      </span>
      <span className="text-sm max-md:hidden text-foreground select-none overflow-hidden max-w-0 opacity-0 group-hover/icon:max-w-[100px] group-hover:opacity-100 transition-all duration-500 whitespace-nowrap group-hover/icon:px-1 ">
        {item.label}
      </span>
    </div>
  );
};
