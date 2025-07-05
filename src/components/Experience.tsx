import { useTranslations } from "next-intl";
import { useState } from "react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  bullets: string[];
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations("Experience");
  const experiences = t.raw("items") as ExperienceItem[];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-dark-bg/50 z-0"></div>
      <div className="cyberpunk-grid absolute inset-0 opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">
          <span className="text-primary">&lt;</span> {t("work_experience")}{" "}
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Company Tabs */}
          <div className="md:w-1/3 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`min-w-[160px] py-3 px-6 text-left border-b-2 md:border-b-0 md:border-l-2 font-orbitron transition-all duration-300 ${
                  activeTab === index
                    ? "border-primary text-primary bg-primary/10"
                    : "border-secondary/30 text-foreground/70 hover:bg-dark-bg/30 hover:text-foreground/90"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="md:w-2/3 min-h-100 bg-dark-bg/70 p-6 rounded border border-secondary/20">
            <h3 className="text-xl font-orbitron font-semibold">
              <span className="text-foreground">
                {experiences[activeTab].position}
              </span>
              <span className="text-accent">
                {" "}
                @ {experiences[activeTab].company}
              </span>
            </h3>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mt-1">
              <p className="text-foreground/70 font-mono">
                {experiences[activeTab].period}
              </p>
              <p className="text-foreground/70 font-mono">
                {experiences[activeTab].location}
              </p>
            </div>

            <ul className="space-y-4 mt-6">
              {experiences[activeTab].bullets.map((bullet, index) => (
                <li key={index} className="flex">
                  <span className="text-secondary mr-3 mt-1.5">&#10095;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
