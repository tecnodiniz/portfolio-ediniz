interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Front-End",
    skills: [
      "HTML",
      "CSS",
      "Tailwind",
      "React",
      "Vue.js",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    name: "Back-End",
    skills: ["Node.js", "NestJS", "REST", "GraphQL", "Python", "Ruby"],
  },
  {
    name: "Database",
    skills: ["PrismaORM", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker"],
  },
  {
    name: "Testing & QA",
    skills: ["E2E", "Jest", "TDD"],
  },
  {
    name: "Security",
    skills: ["JWT Authentication", "RSA"],
  },
  {
    name: "Best Practices",
    skills: ["Clean Code", "Agile", "CI/CD", "Git"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-background z-0"></div>
      <div className="cyberpunk-grid absolute inset-0 opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">
          <span className="text-primary">$</span> Technical Skills{" "}
          <span className="text-primary">$</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-dark-bg/70 border border-secondary/30 rounded-lg p-6 hover:border-secondary/60 transition-all duration-300"
              >
                <h3 className="text-xl font-orbitron font-semibold mb-4 text-secondary relative inline-block">
                  {category.name}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-light-bg border border-primary/30 rounded-md text-foreground/90 text-sm transition-all duration-300 hover:bg-primary/10 hover:border-primary/60 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certification section */}
          <div className="mt-16">
            <h3 className="text-2xl font-orbitron font-bold mb-8 text-center text-primary">
              Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-bg/70 border border-secondary/30 rounded-lg p-6 flex flex-col items-center text-center hover:border-secondary/60 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-2xl">🌐</span>
                </div>
                <h4 className="text-lg font-orbitron mb-2">Wizard</h4>
                <p className="text-foreground/80">English Proficiency (C2)</p>
              </div>

              <div className="bg-dark-bg/70 border border-secondary/30 rounded-lg p-6 flex flex-col items-center text-center hover:border-secondary/60 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary text-2xl">💻</span>
                </div>
                <h4 className="text-lg font-orbitron mb-2">Campus Code</h4>
                <p className="text-foreground/80">TreinaDev Program</p>
              </div>

              <div className="bg-dark-bg/70 border border-secondary/30 rounded-lg p-6 flex flex-col items-center text-center hover:border-secondary/60 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-2xl">☁️</span>
                </div>
                <h4 className="text-lg font-orbitron mb-2">WarburgPincus</h4>
                <p className="text-foreground/80">
                  Cloud FullStack Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
