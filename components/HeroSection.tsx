import React from "react";
import { Reveal } from "./Reveal";
import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-start text-left mb-12 w-full">
      <Reveal className="mb-4" stagger={0.1}>
        <div className=" w-24 h-24 mb-4 relative">
          <Image
            src="/images/shiva.jpg"
            alt="Shiva's Avatar"
            width={96}
            height={96}
            className="rounded-full object-cover w-full h-full  border-primary shadow-lg"
            priority
          />
        </div>
        <h1 className="md:text-2xl text-xl font-bold ">Shiva Yadav</h1>

        <h2 className="tracking-wide text-muted-foreground mb-4 font-medium">
          Full Stack Engineer
        </h2>
        <p className="md:text-lg text-muted-foreground max-w-xl mb-2 ">
          I design and build scalable websites and apps that focuses on performance, and clean interface. 
        </p>

        <p className="md:text-lg text-muted-foreground max-w-xl mb-4 ">
        Helping teams ship faster, streamline development, and create products users actually love.
        </p>

        <div>
          <Reveal
            className="flex gap-4 justify-start mb-2 flex-wrap"
            delay={0.6}
            stagger={0.1}
          >
            {socialLinks.map((link, i) => (
              <Link
                href={link.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sm relative group"
              >
                <span className="absolute z-[10] left-0 -bottom-0.5 h-[1.5px] w-0 bg-current transition-all duration-200 group-hover:w-full" />
                <span className="absolute left-0 -bottom-0.5 h-[1.5px] bg-current/10 w-full " />
                {link.name}
              </Link>
            ))}
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
};
export default HeroSection;
