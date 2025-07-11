import { useTranslations } from "next-intl";
import Link from "next/link";

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills = () => {
  const t = useTranslations("Skills");
  const skillCategories = t.raw("items") as SkillCategory[];
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-background z-0"></div>
      <div className="cyberpunk-grid absolute inset-0 opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">
          <span className="text-primary">$</span> {t("title")}{" "}
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
              {t("certifications.title")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-bg/70 border border-secondary/30 rounded-lg p-6 flex flex-col items-center text-center hover:border-secondary/60 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-2xl">🌐</span>
                </div>
                <h4 className="text-lg font-orbitron mb-2">Estácio</h4>
                <p className="text-foreground/80">{t("certifications.ads")}</p>
              </div>

              <div className="bg-dark-bg/70 border border-secondary/30 rounded-lg p-6 flex flex-col items-center text-center hover:border-secondary/60 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary text-2xl">💻</span>
                </div>
                <h4 className="text-lg font-orbitron mb-2">Campus Code</h4>
                <Link href="https://app.campuscode.com.br/certificado/7QCAFvfqMBfhDK9pdT92chkC">
                  {" "}
                  <p className="text-foreground/80">
                    {t("certifications.treinaDev")}
                  </p>
                </Link>
              </div>

              <div className="bg-dark-bg/70 border border-secondary/30 rounded-lg p-6 flex flex-col items-center text-center hover:border-secondary/60 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-2xl">☁️</span>
                </div>
                <h4 className="text-lg font-orbitron mb-2">WarburgPincus</h4>
                <Link href="https://www.dio.me/certificate/17B7010F/share">
                  <p className="text-foreground/80">
                    {t("certifications.cloud_full")}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
