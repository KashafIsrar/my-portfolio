import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Full-Stack Development",
      skills: ["React", "Spring Boot", "Java", "Python", "JavaScript", "HTML5 / CSS3", "Tailwind CSS"]
    },
    {
      category: "Databases & Security",
      skills: ["PostgreSQL", "SQL Server", "REST APIs", "Biometric Auth", "OTP Verification"]
    },
    {
      category: "Core Computer Science",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Software Architecture", "DBMS"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Skills & Technologies</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Technologies and core engineering concepts I use to design and build application systems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((group, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/60 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-indigo-400 mb-4 border-b border-slate-700/80 pb-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-3 py-1.5 rounded-md bg-slate-700/50 text-slate-200 text-sm border border-slate-600/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}