import { useState } from "react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Facility & Bond",
    position: "Network Analyst & Developer",
    period: "October 2019 - Present",
    location: "Atibaia, Brasil",
    bullets: [
      "Developed internal applications with React and Python that automated manual tasks, increasing operational efficiency by approximately 25% in key departments.",
      "Implemented automation routines for repetitive processes, reducing execution time by up to 40% and improving team productivity.",
      "Managed network infrastructure, Windows/Linux servers, firewall, and corporate security, ensuring high availability and integrity of systems.",
      "Provided advanced technical support and monitored servers, ensuring continuous stability and fast response to critical incidents.",
    ],
  },
  {
    company: "UnifyForm",
    position: "Back-End Developer",
    period: "March 2025 - April 2025",
    location: "São Paulo, Brasil",
    bullets: [
      "Led the development of an innovative application for an insurance broker, focused on automating form creation, significantly reducing the time for generating complex documents.",
      "Responsible for backend development using Flask, including creating endpoints and integrating with OpenAI API.",
      "Implemented a robust authentication system, ensuring the protection and integrity of sensitive user data.",
      "Developed REST APIs for uploading and intelligent document processing via GPT-4 Omni, optimizing manual tasks with advanced NLP.",
    ],
  },
  {
    company: "Somos Milhões",
    position: "Full-Stack Developer",
    period: "January 2024 - February 2025",
    location: "São Paulo, Brasil",
    bullets: [
      "Collaborated with two senior developers in developing an innovative web application, contributing to the successful launch of the platform to early users.",
      "Took responsibility for the integration between the React/TailwindCSS front-end and the FastAPI/PostgreSQL back-end, ensuring efficient and stable communication.",
      "Modeled and implemented high-performance REST APIs, optimizing data flow and facilitating application scalability.",
      "Configured JWT authentication, strengthening platform security and ensuring robust access control from the MVP.",
    ],
  },
  {
    company: "Campus Code",
    position: "Web Developer (TreinaDev Program)",
    period: "February 2023 - July 2023",
    location: "São Paulo, Brasil",
    bullets: [
      "Collaborated in the development of a shopping club platform with Vue.js in the front-end and Ruby on Rails in the back-end, delivering complete functionalities in an agile environment.",
      "Implemented state management and protected routes, ensuring smooth and secure navigation for users.",
      "Integrated multiple system modules, promoting a cohesive and scalable architecture.",
      "Consistently applied TDD practices, raising the quality and stability of the code delivered by the team.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-dark-bg/50 z-0"></div>
      <div className="cyberpunk-grid absolute inset-0 opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">
          <span className="text-primary">&lt;</span> Work Experience{" "}
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
          <div className="md:w-2/3 bg-dark-bg/70 p-6 rounded border border-secondary/20">
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
