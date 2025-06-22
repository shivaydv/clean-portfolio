import { experience } from "@/data/experience";
import { formatDateRange } from "@/lib/formateData";
import { Reveal } from "./Reveal";

const ExperienceSection = () => {
  return (
    <Reveal stagger={0.1} className="w-full mb-12">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>

      <Reveal stagger={0.1} delay={0.2} className="space-y-6">
        {experience.map((exp, i) => (
          <div
            key={i}
            className="px-4 py-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:bg-card flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
          >
            {/* Left: Company Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-semibold">{exp.company}</span>
                {exp.endDate === "Present" && (
                  <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                    PRESENT
                  </span>
                )}
              </div>

              <div className="text-foreground/80 font-medium text-sm mb-2">{exp.role}</div>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-2 ">
                {exp.description}
              </p>
            </div>

            {/* Right: Dates */}
            <div className="text-sm text-foreground md:text-right min-w-max">
              <div>{formatDateRange(exp.startDate, exp.endDate) || "N/A"}</div>
            </div>
          </div>
        ))}
      </Reveal>
    </Reveal>
  );
};

export default ExperienceSection;
