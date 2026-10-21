import { Braces, Database, Layers3 } from 'lucide-react';
import { MotionCard, RevealSection } from './Motion';

const skillCategories = [
  {
    icon: Braces,
    category: 'Application Engineering',
    skills: ['Java', 'Spring Boot', 'React', 'Python', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    icon: Database,
    category: 'Data & Integration',
    skills: ['PostgreSQL', 'SQL Server', 'REST APIs', 'Database Design'],
  },
  {
    icon: Layers3,
    category: 'Engineering Foundations',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Software Architecture', 'DBMS'],
  },
];

export default function Skills() {
  return (
    <RevealSection id="skills" title="Skills and technologies" className="editorial-section mx-auto max-w-7xl scroll-mt-20 border-t border-white/[0.08] px-5 py-24 sm:px-8">
      <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#09bbc8]">02 / Stack</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Tools of the trade.</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-500">
          A practical toolkit for building, connecting, and reasoning about software systems.
        </p>
      </div>

      <div className="editorial-skill-grid grid gap-8 md:grid-cols-3">
        {skillCategories.map(({ icon: Icon, category, skills }, index) => (
          <MotionCard key={category} title={category} delay={index * 0.08} className="editorial-skill-group">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600">0{index + 1}</span>
              <Icon size={18} className="text-[#09bbc8]" aria-hidden="true" />
            </div>
            <h3 className="mb-5 text-lg font-semibold text-white">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="editorial-skill-tag font-mono text-[11px] text-slate-400">
                  {skill}
                </span>
              ))}
            </div>
          </MotionCard>
        ))}
      </div>
    </RevealSection>
  );
}
