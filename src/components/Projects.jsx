import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, LockKeyhole } from 'lucide-react';
import { RevealSection } from './Motion';

const projects = [
  {
    title: 'Sensify',
    subtitle: 'Sensitive Food Tracking System',
    tech: ['Spring Boot', 'React', 'PostgreSQL'],
    award: '1st place · 3rd Semester Exhibition',
    description: 'A food-sensitivity tracker that compares meal and symptom logs to surface possible triggers, using data structures and algorithm-based analysis.',
    privateRepo: true,
    id: '01',
    type: 'signal',
    image: '/images/cyberpunk/reference-1.jpg',
    imageAlt: 'Decorative monochrome HUD symbols and technical interface marks',
    imageStyle: 'hud',
    accent: '#91A8C8',
    category: 'HEALTH / DATA INTELLIGENCE',
    result: 'Turns daily food and symptom records into patterns people can act on.',
  },
  {
    title: 'SafeStream',
    subtitle: 'Banking & Fraud Detection',
    tech: ['Spring Boot', 'React', 'SQL Server'],
    description: 'A banking application for accounts and transfers, with OTP verification, biometric authentication, and risk scoring across the customer and admin flows.',
    privateRepo: true,
    id: '02',
    type: 'security',
    image: '/images/cyberpunk/reference-3.jpg',
    imageAlt: 'Decorative transparent glass cube against black',
    accent: '#7896BE',
    category: 'FINTECH / RISK SYSTEMS',
    result: 'Pairs everyday banking flows with layered authentication and fraud signals.',
  },
  {
    title: 'Palette',
    subtitle: 'Interior Design Management',
    tech: ['Spring Boot', 'React'],
    description: 'A full-stack interior-design platform connecting room planning, design styles, curated furniture, and product discovery.',
    privateRepo: true,
    id: '03',
    type: 'spatial',
    image: '/images/cyberpunk/reference-4.jpg',
    imageAlt: 'Decorative iridescent glass cube against black',
    accent: '#354968',
    category: 'SPATIAL / COMMERCE',
    result: 'Connects room planning, visual inspiration, and product discovery.',
  },
  {
    title: 'Quiz Game',
    subtitle: 'Flask quiz application',
    tech: ['Python', 'Flask', 'HTML/CSS'],
    award: '1st place · 1st Semester Exhibition',
    description: 'A Flask web app with general-knowledge and personality-style quiz flows, tracking answers and results across session-backed routes.',
    github: 'https://github.com/KashafIsrar/Quizgame',
    id: '04',
    type: 'arcade',
    image: '/images/cyberpunk/chrome-record.jpg',
    imageAlt: 'Decorative chrome record with a cool light flare against black',
    accent: '#91B9EF',
    category: 'INTERACTIVE / PYTHON',
    result: 'A browser-based quiz with session-backed question flows and score-based results.',
  },
  {
    title: 'TAKETWO',
    subtitle: 'Movie discovery & cinephile social platform',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'TMDB API', 'JWT'],
    description: 'A movie companion for discovery, watch diaries, reviews, taste matching, and spoiler-safe community conversations. Its four-question recommendation flow explains why a film matches.',
    github: 'https://github.com/KashafIsrar/taketwo',
    id: '05',
    type: 'cinema',
    image: '/images/cyberpunk/reference-6.jpg',
    imageAlt: 'Decorative wireframe star geometry against black',
    accent: '#91A8C8',
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
    image: '/images/cyberpunk/reference-7.jpg',
    imageAlt: 'Decorative iridescent cube with an ESC key motif',
    imageStyle: 'contain',
    accent: '#7896BE',
    category: 'CAREER / PRIVATE ANALYSIS',
    result: 'Provides an actionable fit score and job-specific roadmap without sending resume data to a cloud LLM.',
  },
];

function ProjectArtwork({ project }) {
  return (
    <div
      className={`project-art project-art-${project.type}${project.imageStyle ? ` project-art-${project.imageStyle}` : ''}`}
      style={{ '--art-accent': project.accent }}
    >
      <img
        className="project-art-image"
        src={project.image}
        alt={project.imageAlt}
        decoding="async"
      />
    </div>
  );
}

export default function Projects() {
  return (
    <RevealSection id="projects" title="Project archive" className="editorial-section mx-auto max-w-7xl scroll-mt-20 border-t border-white/[0.08] px-5 py-24 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#09bbc8]">03 / Project archive</p>
            <h2 className="font-display text-2xl font-semibold tracking-wide text-white sm:text-3xl">Built in the real world.</h2>
            <p className="mt-4 max-w-xl text-base leading-6 text-slate-400">
              A selection across software, data, security, and interactive products, with source links where available.
            </p>
          </div>
          <span className="w-fit font-mono text-[10px] tracking-widest text-slate-500">
            {String(projects.length).padStart(2, '0')} SELECTED PROJECTS
          </span>
        </div>

        <div className="editorial-project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              aria-label={`${project.title} project`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -2 }}
              className="editorial-project-card group"
            >
              <div className="editorial-project-artwork aspect-[16/10] overflow-hidden">
                <ProjectArtwork project={project} />
              </div>
              <div className="editorial-project-copy">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{project.category}</p>
                    <h3 className="font-display text-lg font-semibold tracking-wide text-white">{project.title}</h3>
                    <p className="mt-1 font-mono text-[10px] text-slate-500">{project.subtitle}</p>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-[#09bbc8]/75">
                    {project.id} / {String(projects.length).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">{project.description}</p>
                <p className="mt-3 max-w-xl border-l border-[#09bbc8]/60 pl-3 text-sm leading-6 text-slate-500">{project.result}</p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[9px] text-slate-500">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  {project.award && <span className="font-mono text-[9px] text-[#d9fced]">{project.award}</span>}
                  {project.privateRepo ? (
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500" aria-label={`${project.title} source repository is private`}>
                      Private repository <LockKeyhole size={13} />
                    </span>
                  ) : (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} source code`} className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#09bbc8] transition hover:text-[#d9fced]">
                      Source code <Code2 size={15} /><ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </RevealSection>
  );
}
