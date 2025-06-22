import { projects } from "@/data/projects";
import React from "react";
import Link from "next/link";
import { TechStackItem } from "./TechItems";
import { FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";
import { Reveal } from "./Reveal";

const ProjectsSection = () => {
  return (
    <Reveal stagger={0.1} delay={1} className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold ">Projects</h2>
        <Link
          href="https://github.com/shivaydv?tab=repositories"
          target="_blank"
          className="text-sm relative group"
        >
          View All
          <span className="absolute z-[10] left-0 -bottom-0.5 h-[1.5px] w-0 bg-current transition-all duration-200 group-hover:w-full" />
          <span className="absolute left-0 -bottom-0.5 h-[1.5px] bg-current/10 w-full " />
        </Link>
      </div>
      <Reveal
        stagger={0.1}
        delay={0.2}
        offset={0}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl p-4 flex flex-col gap-1 h-full transition-all duration-300 hover:bg-card"
          >
            <Link
              href={project.demoUrl || project.githubUrl || "#"}
              className="flex flex-col items-start gap-1 z-10 "
            >
              {project.icon && (
                <div className="w-8 h-8 rounded-md bg-foreground text-background  flex items-center justify-center text-xl mb-2">
                  {project.icon}
                </div>
              )}
              <div className="font-semibold text-sm">{project.name}</div>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </Link>

            <div className="mt-auto flex w-full justify-between items-end pt-2 z-10">
              {project.techStack?.length > 0 && (
                <div className="flex flex-wrap ">
                  {project.techStack.map((tech, index) => (
                    <TechStackItem key={index} tech={tech as any} />
                  ))}
                </div>
              )}

              {(project.githubUrl || project.demoUrl) && (
                <div className=" flex gap-2 text-foreground text-xs">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="flex items-center transition-all duration-300  hover:scale-110 "
                    >
                      <FaGithub size={20} />
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="flex items-center transition-all duration-300  hover:scale-110 "
                    >
                      <Globe size={20} />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </Reveal>
    </Reveal>
  );
};

export default ProjectsSection;
