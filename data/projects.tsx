import {
  SiFacebookgaming,
  SiNextdotjs,
  SiShopify,
  SiVercel,
} from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
import { ReactNode } from "react";
import { TechName } from "@/components/TechItems";
import { Axiomite, DevAxioms, MerakiAi } from "@/icons/icons";
// types/project.ts

export type ProjectType = {
  name: string;
  description: string;
  icon?: ReactNode; // Optional ReactNode (icon component or inline SVG)
  techStack: TechName[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: ProjectType[] = [
  {
    name: "Dev Axioms",
    description: "A platform for frontend interview practice and preparation",
    icon: <DevAxioms className="w-6 h-6 " />,
    techStack: ["nextjs", "tailwind", "typescript"],
    githubUrl: "https://github.com/shivaydv/Dev-Axioms",
    demoUrl: "https://devaxioms.vercel.app/",
  },
  {
    name: "Axiomite UI",
    description: "Modern UI components library for React and Nextjs.",
    icon: <Axiomite className="w-6 h-6 " />,
    techStack: ["react", "tailwind", "zustand"],
    githubUrl: "https://github.com/shivaydv/axiomite-ui",
    demoUrl: "https://axiomiteui.vercel.app/",
  },
  {
    name: "Meraki AI",
    description: "A platform for AI-powered image generation and editing.",
    icon: <MerakiAi className="" />,
    techStack: ["react", "wordpress", "tailwind"],
    // demoUrl: "https://svgproject.dev",
    githubUrl: "https://github.com/shivaydv/Meraki-AI",
    demoUrl: "https://meraki-ai.vercel.app/",
  },
  {
    name: "Blog Website",
    description:
      "Blog with admin panel , rich text editor , user authentication and interactions.",
    icon: <SiFacebookgaming />,
    techStack: ["nextjs", "tailwind"],
    githubUrl: "https://github.com/shivaydv/Blog",
    demoUrl: "https://shivayadav-blog.vercel.app/",
  },
];
