import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Sensify (Sensitive Food Tracking System)",
      tech: ["Spring Boot", "React", "PostgreSQL"],
      award: "🥇 1st Position – 3rd Semester Project Exhibition",
      description: "Developed a web application that analyzes meal and symptom logs to identify potential food triggers using custom data structures and algorithms. Built an interactive dashboard with personalized insights and data visualizations.",
      github: "https://github.com/Aqsa-asif45/sensify-dsa-project"
    },
    {
      title: "SafeStream – Banking & Fraud Detection System",
      tech: ["Spring Boot", "React", "SQL Server"],
      description: "Developed a secure banking application with account management, money transfers, and an admin dashboard. Implemented fraud detection using biometric authentication, OTP verification, and automated risk scoring.",
      github: "https://github.com/Aqsa-asif45/safestream"
    },
    {
      title: "Palette – Interior Design Management System",
      tech: ["Spring Boot", "React"],
      description: "Developed a full-stack web application for interior design planning and furniture e-commerce. Enabled users to create virtual rooms, discover design styles, and browse curated furniture collections.",
      github: "https://github.com/Aqsa-asif45/palette-sda-project"
    },
    {
      title: "Quiz Game",
      tech: ["Python"],
      award: "🥇 1st Position – 1st Semester Project Exhibition",
      description: "Developed a command-line quiz application with score tracking. Applied core programming concepts including functions, loops, and conditional statements.",
      github: "https://github.com/KashafIsrar"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Featured Projects</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Academic and software engineering projects built using modern tech stacks.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/60 flex flex-col justify-between hover:border-indigo-500/50 transition"
          >
            <div>
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>

              {project.award && (
                <div className="inline-block text-xs font-semibold px-2.5 py-1 rounded mb-3 bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {project.award}
                </div>
              )}

              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50 text-sm font-medium">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-300 hover:text-indigo-400 transition"
              >
                View Repository →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}