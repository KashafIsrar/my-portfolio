import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Crosshair, X } from 'lucide-react';
import { InteractiveContainer, RevealSection } from './Motion';

const projects = [
  {
    title: 'Sensify',
    subtitle: 'Sensitive Food Tracking System',
    tech: ['Spring Boot', 'React', 'PostgreSQL'],
    award: '1st place · 3rd Semester Exhibition',
    description: 'Analyzes meal and symptom logs to identify potential food triggers, with a dashboard for personalized insights and data visualizations.',
    github: 'https://github.com/Aqsa-asif45/sensify-dsa-project',
    id: '01',
    type: 'signal',
    accent: '#09bbc8',
    category: 'HEALTH / DATA INTELLIGENCE',
    result: 'Turns daily food and symptom records into patterns people can act on.',
  },
  {
    title: 'SafeStream',
    subtitle: 'Banking & Fraud Detection',
    tech: ['Spring Boot', 'React', 'SQL Server'],
    description: 'A banking application with account management, transfers, and an admin dashboard, supported by biometric authentication, OTP verification, and risk scoring.',
    github: 'https://github.com/Aqsa-asif45/safestream',
    id: '02',
    type: 'security',
    accent: '#405ffa',
    category: 'FINTECH / RISK SYSTEMS',
    result: 'Pairs everyday banking flows with layered authentication and fraud signals.',
  },
  {
    title: 'Palette',
    subtitle: 'Interior Design Management',
    tech: ['Spring Boot', 'React'],
    description: 'A full-stack space for interior planning and furniture discovery, including virtual rooms, design styles, and curated collections.',
    github: 'https://github.com/Aqsa-asif45/palette-sda-project',
    id: '03',
    type: 'spatial',
    accent: '#d9fced',
    category: 'SPATIAL / COMMERCE',
    result: 'Connects room planning, visual inspiration, and product discovery.',
  },
  {
    title: 'Quiz Game',
    subtitle: 'Command-line application',
    tech: ['Python'],
    award: '1st place · 1st Semester Exhibition',
    description: 'A Python quiz application with score tracking, built around programming fundamentals including functions, loops, and conditional logic.',
    github: 'https://github.com/KashafIsrar',
    id: '04',
    type: 'arcade',
    accent: '#3b3664',
    category: 'INTERACTIVE / PYTHON',
    result: 'A compact command-line game with question flow and score tracking.',
  },
  {
    title: 'TAKETWO',
    subtitle: 'Movie discovery & cinephile social platform',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'TMDB API', 'JWT'],
    description: 'A movie companion for discovery, watch diaries, reviews, taste matching, and spoiler-safe community conversations. Its four-question recommendation flow explains why a film matches.',
    github: 'https://github.com/KashafIsrar/taketwo',
    id: '05',
    type: 'cinema',
    accent: '#09bbc8',
    category: 'CINEMA / SOCIAL INTELLIGENCE',
    result: 'Combines explainable movie recommendations with taste matching and a cinephile community.',
  },
  {
    title: 'SkillSync AI',
    subtitle: 'Privacy-first resume analysis',
    tech: ['Next.js 14', 'TypeScript', 'PDF.js', 'Tailwind CSS'],
    description: 'A client-side resume analysis tool that compares a CV with a job description, highlights matched strengths and skill gaps, and suggests factual STAR-style bullet improvements.',
    github: 'https://github.com/KashafIsrar/skillsync-ai',
    id: '06',
    type: 'neural',
    accent: '#405ffa',
    category: 'CAREER / PRIVATE ANALYSIS',
    result: 'Provides an actionable fit score and job-specific roadmap without sending resume data to a cloud LLM.',
  },
];

function ProjectArtwork({ project }) {
  return (
    <div className="project-art h-full min-h-52 w-full" style={{ '--art-accent': project.accent, '--art-base': '#07240f' }}>
      <div className={`project-art-glow project-shape-${project.type}`} />
      <div className="project-art-orbit" />
      <div className="project-art-data" />
      <div className="project-art-scan" />
      <div className="absolute inset-0 z-[1] flex flex-col justify-between p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <span className="font-mono text-[9px] tracking-[0.19em] text-white/65">{project.category}</span>
          <span className="flex h-8 w-8 items-center justify-center border border-white/20 bg-black/20 text-white/70">
            <Crosshair size={14} />
          </span>
        </div>
        <div>
          <p className="font-mono text-[9px] tracking-[0.2em] text-white/50">CASE FILE / {project.id}</p>
          <div className="mt-1 flex items-end justify-between gap-3">
            <span className="font-display text-2xl font-bold tracking-wide text-white drop-shadow-lg sm:text-3xl">
              {project.title.toUpperCase()}
            </span>
            <span className="pb-1 font-mono text-[9px] text-white/60">OPEN ↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose, onMove }) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-[#04170b]/90 p-4 backdrop-blur-md sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="relative my-auto w-full max-w-3xl border border-[#09bbc8]/35 bg-[#07240f] shadow-[0_24px_100px_rgba(0,0,0,0.65)]"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#09bbc8]">PROJECT ARCHIVE / {project.id}</span>
          <button type="button" aria-label="Close project details" onClick={onClose} className="p-1 text-slate-500 transition hover:text-white">
            <X size={18} />
          </button>
        </div>

        <div className="p-4 sm:p-7">
          <div className="h-48 overflow-hidden sm:h-64">
            <ProjectArtwork project={project} />
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500">{project.category}</p>
              <h2 id="project-dialog-title" className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{project.title}</h2>
              <p className="mt-1 font-mono text-xs text-slate-500">{project.subtitle}</p>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">{project.description}</p>
              <p className="mt-3 max-w-xl border-l border-[#09bbc8]/60 pl-3 text-sm leading-6 text-slate-500">{project.result}</p>
            </div>
            <div className="flex flex-row gap-2 sm:flex-col">
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-[#09bbc8]/40 bg-[#09bbc8]/[0.08] px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-[#d9fced] transition hover:bg-[#09bbc8]/[0.14]">
                Source code <Code2 size={14} />
              </a>
              <button type="button" onClick={onClose} className="border border-[#d9fced]/10 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-slate-400 transition hover:border-[#d9fced]/25 hover:text-[#d9fced]">
                Return to archive
              </button>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#d9fced]/10 pt-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="border border-[#d9fced]/10 bg-[#d9fced]/[0.03] px-2 py-1 font-mono text-[9px] text-slate-400">{item}</span>
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" aria-label="Previous project" onClick={() => onMove(-1)} className="border border-[#d9fced]/10 p-2 text-slate-400 transition hover:text-[#d9fced]">
                <ArrowLeft size={15} />
              </button>
              <button type="button" aria-label="Next project" onClick={() => onMove(1)} className="border border-[#d9fced]/10 p-2 text-slate-400 transition hover:text-[#d9fced]">
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedProject = selectedIndex === null ? null : projects[selectedIndex];

  function moveProject(direction) {
    setSelectedIndex((current) => (current + direction + projects.length) % projects.length);
  }

  return (
    <>
      <RevealSection id="projects" title="Project archive" className="mx-auto max-w-7xl scroll-mt-20 border-t border-white/[0.08] px-5 py-24 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#09bbc8]">03 / Project archive</p>
            <h2 className="font-display text-2xl font-semibold tracking-wide text-white sm:text-3xl">Built in the real world.</h2>
            <p className="mt-4 max-w-xl text-base leading-6 text-slate-400">
              Software systems, presented as field records. Choose a case file to inspect the build.
            </p>
          </div>
          <span className="w-fit border border-[#d9fced]/10 px-3 py-2 font-mono text-[10px] tracking-widest text-slate-500">
            {String(projects.length).padStart(2, '0')} RECORDS <span className="text-[#09bbc8]">/ ACTIVE</span>
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <InteractiveContainer
              key={project.id}
              as="article"
              title={`${project.title} project`}
              delay={index * 0.06}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group overflow-hidden border border-[#d9fced]/[0.1] bg-[#07240f]/80"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Open ${project.title} case file`}
                className="block w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#09bbc8]"
              >
                <div className="h-52 overflow-hidden sm:h-60">
                  <motion.div className="h-full" whileHover={{ scale: 1.035 }} transition={{ duration: 0.4 }}>
                    <ProjectArtwork project={project} />
                  </motion.div>
                </div>
              </button>
              <div className="flex flex-col gap-4 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-wide text-white">{project.title}</h3>
                    <p className="mt-1 font-mono text-[10px] text-slate-500">{project.subtitle}</p>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-[#09bbc8]/75">{project.id} / 06</span>
                </div>
                <p className="text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="flex flex-wrap items-center gap-2 border-t border-[#d9fced]/[0.08] pt-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="border border-[#d9fced]/[0.08] bg-[#d9fced]/[0.025] px-2 py-1 font-mono text-[9px] text-slate-500">{tech}</span>
                  ))}
                  {project.award && <span className="ml-auto font-mono text-[9px] text-[#d9fced]">{project.award}</span>}
                </div>
                <div className="flex items-center justify-between">
                  <button type="button" onClick={() => setSelectedIndex(index)} className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#09bbc8] transition group-hover:text-[#d9fced]">
                    Inspect case file <ArrowUpRight size={13} />
                  </button>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} source code`} onClick={(event) => event.stopPropagation()} className="text-slate-600 transition hover:text-[#09bbc8]">
                    <Code2 size={16} />
                  </a>
                </div>
              </div>
            </InteractiveContainer>
          ))}
        </div>
      </RevealSection>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedIndex(null)}
            onMove={moveProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}
