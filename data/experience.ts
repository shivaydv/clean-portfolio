import { TechName } from "@/components/TechItems";

export type experienceType = {
  company: string;
  role: string;
  description: string;
  techStack: TechName[];
  startDate: Date;
  endDate: Date | "Present";
};

export const experience: experienceType[] = [
  {
    company: "Freelance",
    role: "Web Designer & Developer",
    description:
      "Worked with various clients on web solutions including custom React apps, Shopify stores, and WordPress sites.",
    techStack: ["react", "nextjs", "shopify", "wordpress"],
    startDate: new Date("2024-05-01"),
    endDate: "Present",
  },
  {
    company: "Purplease",
    role: "Frontend Engineer Intern",
    description:
      "Built a MVP with authentication, role-based access, real-time code editor, and REST API integration along with Performance Optimization.",
    techStack: ["react", "tailwind", "zustand"],
    startDate: new Date("2024-10-14"),
    endDate: new Date("2025-04-14"),
  },
];
