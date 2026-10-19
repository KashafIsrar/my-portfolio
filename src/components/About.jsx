import { Award, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { MotionCard, RevealSection } from './Motion';

const awards = [
  '1st Position — 3rd Semester Project Exhibition (Sensify)',
  '1st Position — 1st Semester Project Exhibition (Quiz Game)',
];

const experience = [
  'Selected by the course instructor to assist during ITSE laboratory sessions.',
  'Guided 2nd-semester students with programming exercises and debugging.',
  'Assisted with lab activities and technical support.',
];

export default function About() {
  return (
    <RevealSection id="about" title="About / profile" className="mx-auto max-w-7xl scroll-mt-20 border-t border-white/[0.08] px-5 py-24 sm:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#09bbc8]">01 / Profile</p>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Engineering with intent.</h2>
        <p className="mt-5 leading-7 text-slate-400">
          Software Engineering student at Sir Syed University of Engineering and Technology, focused on
          dependable full-stack systems, thoughtful interfaces, and practical problem-solving.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <MotionCard title="Education" delay={0.05} className="surface-card p-6 lg:col-span-1">
          <div className="mb-5 flex items-center gap-3 text-[#09bbc8]">
            <GraduationCap size={19} />
            <span className="font-mono text-xs uppercase tracking-widest">Education</span>
          </div>
          <h3 className="text-lg font-semibold text-white">B.S. Software Engineering</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Sir Syed University of Engineering and Technology
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4 font-mono text-xs text-slate-500">
            <span>2024 — Present</span>
            <span className="rounded border border-[#09bbc8]/25 bg-[#09bbc8]/[0.06] px-2 py-1 text-[#d9fced]">GPA 3.65</span>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-500">
            Data Structures, Object-Oriented Programming, DBMS, Operating Systems, and Software Architecture.
          </p>
        </MotionCard>

        <MotionCard title="Experience" delay={0.12} className="surface-card p-6 lg:col-span-1">
          <div className="mb-5 flex items-center gap-3 text-[#405ffa]">
            <BriefcaseBusiness size={18} />
            <span className="font-mono text-xs uppercase tracking-widest">Experience / 2026</span>
          </div>
          <h3 className="text-lg font-semibold text-white">Student Lab Assistant</h3>
          <p className="mt-2 text-sm text-slate-400">Introduction to Software Engineering Lab · SSUET</p>
          <ul className="mt-5 space-y-3 border-t border-white/[0.08] pt-4 text-xs leading-5 text-slate-400">
            {experience.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#405ffa]" />
                {item}
              </li>
            ))}
          </ul>
        </MotionCard>

        <MotionCard title="Awards and recognition" delay={0.19} className="surface-card p-6 lg:col-span-1">
          <div className="mb-5 flex items-center gap-3 text-[#d9fced]">
            <Award size={18} />
            <span className="font-mono text-xs uppercase tracking-widest">Recognition</span>
          </div>
          <h3 className="text-lg font-semibold text-white">Built, presented, recognized.</h3>
          <ul className="mt-5 space-y-3 border-t border-white/[0.08] pt-4">
            {awards.map((award) => (
              <li key={award} className="flex gap-3 text-sm leading-6 text-slate-400">
                <span className="font-mono text-[#09bbc8]">+</span>
                {award}
              </li>
            ))}
          </ul>
        </MotionCard>
      </div>
    </RevealSection>
  );
}
