import { useTranslations } from "next-intl";
import Image from "next/image";

const About = () => {
  const t = useTranslations("About");
  return (
    <section id="about" className="py-24 bg-dark-bg relative">
      <div className="cyberpunk-grid absolute inset-0 opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden border-2 border-secondary/50 relative">
              {/* Placeholder for profile image. Replace with actual image in public folder */}
              <div className="aspect-[4/5] bg-light-bg relative">
                <div className="absolute inset-0 flex items-center justify-center text-secondary font-orbitron text-xl">
                  <Image
                    alt="Eduardo Diniz"
                    src="/images/picture-1.png"
                    priority
                    fill
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-1 bg-primary"></div>
              <div className="absolute top-0 left-0 w-1 h-20 bg-primary"></div>
              <div className="absolute bottom-0 right-0 w-20 h-1 bg-secondary"></div>
              <div className="absolute bottom-0 right-0 w-1 h-20 bg-secondary"></div>
            </div>

            {/* Decorative code snippets */}
            <div className="absolute -bottom-8 -left-8 p-4 bg-dark-bg/90 rounded border border-primary/30 rotate-3 hidden md:block">
              <pre className="text-xs text-primary/90 font-mono">
                <code>{`function init() {
  return {
    name: "Eduardo",
    role: "Software Developer"
  }
}`}</code>
              </pre>
            </div>

            <div className="absolute -top-10 -right-10 p-1 bg-dark-bg/90 rounded border border-primary/30 rotate-3 hidden md:block">
              <pre className="text-xs text-primary/90 font-mono">
                <Image
                  className="hidden lg:block"
                  alt="Eduardo Diniz"
                  src="/images/picture-3.jpg"
                  width={200}
                  height={0}
                />
              </pre>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-orbitron font-bold mb-6">
              <span className="text-secondary">&gt;</span> {t("about_me")}
            </h2>

            <div className="space-y-4 text-foreground/90">
              <p>
                {t("i_am")} <span className="text-primary">{t("role")}</span>{" "}
                {t("resume")}.
              </p>

              <p>
                {t("expertise_title")}{" "}
                <span className="text-secondary">
                  {t("expertise_clean_arch")}
                </span>
                , {t("expertise_text")}.
              </p>

              <p>
                {t("expertise_text_2")}
                <span className="text-accent">
                  {" "}
                  {t("expertise_clean_code")}
                </span>
                , {t("expertise_text_3")}.
              </p>

              <div className="pt-6 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-orbitron font-semibold mb-3 text-secondary">
                    {t("contact")}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">&#9656;</span>
                      {t("city")}
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">&#9656;</span>
                      +55 11 9 8368-3715
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">&#9656;</span>
                      diniz480@outlook.com
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-orbitron font-semibold mb-3 text-secondary">
                    {t("education")}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">&#9656;</span>
                      {t("university")}
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">&#9656;</span>
                      {t("course")}
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">&#9656;</span>
                      {t("university_end")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
