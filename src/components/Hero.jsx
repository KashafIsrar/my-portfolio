import { useState } from 'react';
import {
  motion,
  AnimatePresence,
} from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Code2, Cpu, Layers3, Radar, ScanLine } from 'lucide-react';
import { InteractiveContainer } from './Motion';

const dashboardTabs = ['Overview', 'Stack', 'Projects'];

const stack = [
  { name: 'JAVA', value: 88, color: '#09bbc8' },
  { name: 'SPRING BOOT', value: 82, color: '#405ffa' },
  { name: 'REACT', value: 78, color: '#09bbc8' },
  { name: 'POSTGRESQL', value: 72, color: '#405ffa' },
];

const projects = [
  { name: 'SENSIFY', info: 'Food trigger intelligence', mark: '01' },
  { name: 'SAFESTREAM', info: 'Banking / fraud detection', mark: '02' },
  { name: 'PALETTE', info: 'Interior design platform', mark: '03' },
];

function SystemMap() {
  return (
    <svg viewBox="0 0 480 260" role="img" aria-label="Animated system network visualization" className="h-auto w-full" fill="none">
      <defs>
        <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" stroke="#09bbc8" strokeOpacity=".14" strokeWidth=".6" />
        </pattern>
        <linearGradient id="map-shade" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#09bbc8" stopOpacity=".13" />
          <stop offset="1" stopColor="#06190e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path fill="url(#map-grid)" d="M0 0h480v260H0z" />
      <path fill="url(#map-shade)" d="M0 0h480v260H0z" />
      <path d="M40 65h72v42h75m0 0v45h78m-78-45h42V74h66m-183 33v61h-54m207-19v43h92m-124 0h-74v38m156-81h46v-48h42" stroke="#405ffa" strokeOpacity=".6" strokeWidth="1" />
      <path d="M40 65h22m125 42h22m78 45h22m-207 16h-22m260 27h22m46-123h22" stroke="#d9fced" strokeOpacity=".78" strokeWidth="2" />
      <rect x="185" y="88" width="88" height="88" stroke="#09bbc8" strokeOpacity=".85" />
      <rect x="197" y="100" width="64" height="64" stroke="#09bbc8" strokeOpacity=".45" />
      <path d="M217 122h24v20h-24zm12-12v12m0 20v12m-24-22h12m24 0h12" stroke="#d9fced" strokeWidth="1.2" />
      <motion.circle cx="62" cy="65" r="3" fill="#d9fced" animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 2.6, repeat: Infinity }} />
      <motion.circle cx="209" cy="107" r="3" fill="#d9fced" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
      <motion.circle cx="273" cy="152" r="3" fill="#d9fced" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.2, repeat: Infinity }} />
      <circle cx="405" cy="72" r="3" fill="#d9fced" />
      <path d="M30 220h420" stroke="#fff" strokeOpacity=".1" />
      <motion.path
        d="M30 220c38 0 36-32 73-32s37 48 73 48 42-63 76-63 41 35 75 35 36-22 64-22 28 15 59 15"
        stroke="#09bbc8"
        strokeOpacity=".8"
        strokeWidth="1.5"
        animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <text x="30" y="245" fill="#77778e" fontFamily="monospace" fontSize="8" letterSpacing="1.5">JAVA / SPRING / REACT / DATA SYSTEMS</text>
      <text x="390" y="245" fill="#77778e" fontFamily="monospace" fontSize="8">N 24.86°</text>
    </svg>
  );
}

function OverviewPanel() {
  return (
    <div className="grid gap-3">
      <div className="relative overflow-hidden border border-[#d9fced]/[0.08] bg-[#06190e]">
        <div className="absolute left-3 top-3 z-10 font-mono text-[9px] tracking-widest text-[#09bbc8]">FIG. 01 / SYSTEM MAP</div>
        <SystemMap />
        <div className="pointer-events-none absolute inset-0 dossier-scanlines" />
      </div>
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-3">
        <div className="flex min-h-24 flex-col justify-between border border-white/[0.08] bg-white/[0.015] p-3">
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">Academic record</span>
          <span className="text-3xl font-light tracking-tight text-[#d9fced]">
            3.65<span className="ml-1 text-xs text-slate-600">/ 4.0</span>
          </span>
          <span className="font-mono text-[9px] text-slate-600">SOFTWARE ENGINEERING</span>
        </div>
        <div className="border border-white/[0.08] bg-white/[0.015] p-3">
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">Current coordinates</span>
          <div className="mt-3 space-y-2">
            {[
              ['BASE', 'Karachi, PK'],
              ['FOCUS', 'Full-stack systems'],
              ['STATUS', 'Open to internships'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-2 border-b border-white/[0.06] pb-1.5 last:border-0">
                <span className="font-mono text-[8px] tracking-widest text-[#09bbc8]/75">{label}</span>
                <span className="text-right text-[10px] text-[#b0e2d9]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StackPanel() {
  return (
    <div className="grid min-h-[19rem] content-center gap-6 border border-[#d9fced]/[0.08] bg-[#06190e]/85 px-5 py-6 sm:px-7">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
        <div>
          <p className="font-mono text-[9px] tracking-[0.2em] text-[#09bbc8]">CAPABILITY INDEX</p>
          <h3 className="mt-2 text-lg text-[#d9fced]">Systems I work with</h3>
        </div>
        <Cpu size={20} className="text-[#09bbc8]" />
      </div>
      {stack.map((item, index) => (
        <div key={item.name}>
          <div className="mb-2 flex justify-between font-mono text-[9px] tracking-widest text-slate-400">
            <span>{item.name}</span>
            <span>{String(91 - index * 7).padStart(2, '0')} / 100</span>
          </div>
          <div className="h-[3px] overflow-hidden bg-white/[0.07]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="h-full"
              style={{ backgroundColor: item.color }}
            />
          </div>
        </div>
      ))}
      <p className="font-mono text-[9px] leading-5 text-slate-600">ALSO IN THE TOOLKIT: PYTHON · SQL SERVER · TAILWIND · ALGORITHMS</p>
    </div>
  );
}

function ProjectsPanel() {
  return (
    <div className="grid min-h-[19rem] content-center gap-2">
      {projects.map((project, index) => (
        <motion.a
          key={project.name}
          href="#projects"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.07 }}
          whileHover={{ x: 4, borderColor: 'rgba(9,187,200,0.38)' }}
          className="group flex items-center gap-4 border border-[#d9fced]/[0.08] bg-[#06190e]/85 p-4"
        >
          <span className="font-mono text-[10px] text-[#09bbc8]">{project.mark}</span>
          <span className="min-w-0 flex-1">
            <span className="block font-mono text-xs tracking-wider text-[#d9fced]">{project.name}</span>
            <span className="mt-1 block text-[10px] text-slate-600">{project.info}</span>
          </span>
          <ArrowUpRight size={15} className="text-slate-600 transition group-hover:text-[#09bbc8]" />
        </motion.a>
      ))}
      <p className="mt-3 font-mono text-[9px] tracking-wider text-slate-600">SELECT A RECORD TO VIEW THE FULL CASE FILE ↓</p>
    </div>
  );
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <InteractiveContainer as="section" title="Hero profile" expandable={false} className="relative isolate overflow-hidden px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:pb-24 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 dossier-grain" />
      <div className="pointer-events-none absolute inset-x-5 top-8 -z-10 border-t border-white/[0.08] sm:inset-x-8 sm:top-10" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <InteractiveContainer
          as="div"
          title="Kashaf Israr profile"
          expandable={false}
          className="relative"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
            <span className="text-[#09bbc8]">PROFILE / 001</span>
            <span className="h-px w-10 bg-white/15" />
            <span>Software engineering</span>
          </div>

          <h1 aria-label="Kashaf Israr" className="wordmark text-[#d9fced]">
            KASHAF ISRAR<span aria-hidden="true" className="wordmark-separator">_</span>
          </h1>

          <div className="mt-6 flex items-start gap-3">
            <span className="mt-2 h-8 w-px shrink-0 bg-[#09bbc8]/70" />
            <p className="max-w-lg text-sm leading-7 text-[#9b9caf] sm:text-base">
              Software Engineering undergraduate at SSUET. I build considered, resilient applications
              with Java, Spring Boot, React, and PostgreSQL.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ y: -2, borderColor: 'rgba(9,187,200,0.65)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 border border-[#09bbc8]/40 bg-[#09bbc8]/[0.08] px-4 py-3 font-mono text-xs uppercase tracking-wider text-[#d9fced] transition-colors hover:bg-[#09bbc8]/[0.13]"
            >
              Selected work <ArrowUpRight size={15} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2, borderColor: 'rgba(220,220,234,0.38)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 border border-[#d9fced]/[0.12] px-4 py-3 font-mono text-xs uppercase tracking-wider text-[#b0e2d9] transition-colors hover:bg-[#d9fced]/[0.04]"
            >
              Get in touch <ArrowDownRight size={15} />
            </motion.a>
          </div>

          <div className="mt-9 flex items-center gap-4 text-slate-500">
            <a href="https://github.com/KashafIsrar" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="transition hover:text-[#09bbc8]">
              <Code2 size={17} />
            </a>
            <a href="https://www.linkedin.com/in/kashaf-israr-7688b7319/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="font-mono text-[10px] uppercase tracking-widest transition hover:text-[#09bbc8]">
              LinkedIn ↗
            </a>
            <span className="ml-1 h-px w-8 bg-white/[0.12]" />
            <span className="font-mono text-[10px] tracking-wider text-slate-600">GPA 3.65</span>
          </div>
        </InteractiveContainer>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[30rem] lg:ml-auto"
          style={{ perspective: 1000 }}
        >
          <InteractiveContainer
            as="div"
            title="Profile dashboard"
            expandable={false}
            className="dossier-panel relative border border-[#09bbc8]/35 bg-[#06190e]/95 p-3 sm:p-4"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="mb-3 flex items-center justify-between border-b border-[#09bbc8]/20 px-1 pb-3">
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">Subject file / 24—KI</span>
                <span className="mt-1 block font-mono text-[8px] tracking-widest text-slate-700">IDENTITY INDEX · ACCESS GRANTED</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] text-[#d9fced]">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-[#09bbc8]"
                  animate={{ opacity: [0.45, 1, 0.45], boxShadow: ['0 0 0px #09bbc8', '0 0 9px #09bbc8', '0 0 0px #09bbc8'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                LIVE / PK
              </div>
            </div>

            <div className="mb-3 grid grid-cols-3 border-b border-white/[0.08]">
              {dashboardTabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={activeTab === tab}
                  className={`relative py-2.5 text-left font-mono text-[9px] uppercase tracking-[0.14em] transition-colors ${
                    activeTab === tab ? 'text-[#d9fced]' : 'text-slate-600 hover:text-slate-300'
                  }`}
                >
                  <span className="mr-1.5 text-[8px] text-slate-700">0{index + 1}</span>
                  {tab}
                  {activeTab === tab && (
                    <motion.span layoutId="dashboard-tab" className="absolute inset-x-0 -bottom-px h-px bg-[#09bbc8]" />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[22rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'Overview' && <OverviewPanel />}
                  {activeTab === 'Stack' && <StackPanel />}
                  {activeTab === 'Projects' && <ProjectsPanel />}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-white/[0.08] pt-3 font-mono text-[8px] uppercase tracking-[0.16em] text-slate-600">
              <span className="inline-flex items-center gap-1.5"><Radar size={11} /> Profile verified</span>
              <span className="inline-flex items-center gap-1.5">Hover to inspect <ScanLine size={11} /></span>
            </div>
          </InteractiveContainer>
          <span aria-hidden="true" className="absolute -bottom-2 -right-2 -z-10 h-full w-full border border-[#09bbc8]/15" />
        </motion.div>
      </div>
    </InteractiveContainer>
  );
}
