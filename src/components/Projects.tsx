import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "use-intl";

interface ProjectType {
  title: string;
  description: string;
  src: string;
  technologies: string[];

  demoLink?: string;
  codeLink?: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const t = useTranslations("Projects");
  const projects = t.raw("items") as ProjectType[];

  return (
    <section id="projects" className="py-24 bg-light-bg relative">
      <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">
          <span className="text-secondary">/</span> {t("title")}{" "}
          <span className="text-secondary">/</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-bg border border-secondary/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-secondary/60 relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-black overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-secondary font-orbitron">
                  <Image alt={project.title} src={project.src} fill />
                </div>

                {/* Glitchy effect on hover */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-primary/20 z-10 glitch-bg"></div>
                )}

                {/* Tech badges displayed on hover */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-dark-bg/80 flex items-center justify-center z-20">
                    <div className="grid grid-cols-3 gap-2 p-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-light-bg border border-secondary/50 rounded text-secondary text-center"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      className="px-4 py-2 border border-primary text-primary text-sm rounded hover:bg-primary/10 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-1">&#9655;</span> Demo
                    </Link>
                  )}

                  {project.codeLink && (
                    <Link
                      href={project.codeLink}
                      className="px-4 py-2 border border-secondary text-secondary text-sm rounded hover:bg-secondary/10 transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-1">&lt;/&gt;</span> Code
                    </Link>
                  )}
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-secondary"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-secondary"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
