import React from 'react';

export default function About() {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Sir Syed University of Engineering and Technology",
      period: "2024 - Present",
      gpa: "3.65",
      description: "Relevant Coursework: Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, Operating Systems, Software Design & Architecture, Probability & Statistics."
    }
  ];

  const experience = [
    {
      role: "Student Lab Assistant (Volunteer)",
      context: "Introduction to Software Engineering (ITSE) Lab, SSUET",
      period: "2026",
      bullets: [
        "Selected by the course instructor to assist during ITSE laboratory sessions.",
        "Guided 2nd-semester students with programming exercises and debugging.",
        "Assisted the instructor in conducting lab activities and providing technical support."
      ]
    }
  ];

  const awards = [
    "1st Position – 3rd Semester Project Exhibition (Sensify)",
    "1st Position – 1st Semester Project Exhibition (Quiz Game)"
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* About & Achievements Column */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Software Engineering student with a strong academic record and experience developing full-stack and desktop applications through university projects. Seeking an internship to gain industry experience and contribute to meaningful software solutions.
          </p>

          <h3 className="text-xl font-bold text-white mb-4">Awards & Achievements 🏆</h3>
          <ul className="space-y-3 mb-8">
            {awards.map((award, index) => (
              <li key={index} className="flex items-center gap-3 text-sm text-slate-300 bg-slate-800/40 p-3 rounded-lg border border-slate-700/50">
                <span className="text-indigo-400">★</span>
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Education & Experience Column */}
        <div id="education" className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
            {education.map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-indigo-500/50 transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    GPA: {item.gpa}
                  </span>
                </div>
                <p className="text-sm text-indigo-300 mb-3">{item.institution} ({item.period})</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Experience</h3>
            {experience.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-md font-semibold text-white">{exp.role}</h4>
                  <span className="text-xs text-slate-400">{exp.period}</span>
                </div>
                <p className="text-xs text-indigo-300 mb-3">{exp.context}</p>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1.5">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}