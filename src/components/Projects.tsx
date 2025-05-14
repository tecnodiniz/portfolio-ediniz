import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectType {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

const projects: ProjectType[] = [
  {
    title: "UnifyForm",
    description:
      "Led backend development of an innovative form automation application for an insurance broker. Created Flask endpoints and integrated OpenAI API for intelligent document processing.",
    image: "/project-placeholder.jpg",
    technologies: ["Python", "Flask", "OpenAI", "JWT", "Docker"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Somos Milhões",
    description:
      "Full-stack contribution to a web platform launch. Responsible for integration between React/TailwindCSS frontend and FastAPI/PostgreSQL backend, with focus on performance optimization.",
    image: "/project-placeholder.jpg",
    technologies: ["React", "TailwindCSS", "FastAPI", "PostgreSQL", "JWT"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "TreinaDev Shopping Club",
    description:
      "Collaborative development of a shopping club platform using Vue.js and Ruby on Rails. Implemented state management, protected routes, and applied TDD practices.",
    image: "/project-placeholder.jpg",
    technologies: ["Vue.js", "Ruby on Rails", "TDD", "CSS"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Network Automation Suite",
    description:
      "Internal tool suite with Python scripts and React dashboard to automate network management tasks, increasing operational efficiency by 25% in key departments.",
    image: "/project-placeholder.jpg",
    technologies: ["Python", "React", "Bash", "Linux"],
    codeLink: "#",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-light-bg relative">
      <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">
          <span className="text-secondary">/</span> Projects{" "}
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
                  [PROJECT IMAGE]
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
