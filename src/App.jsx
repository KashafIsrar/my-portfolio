import { useEffect, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';
import { LoadingBoundary } from './components/Motion';
import Starfield from './components/Starfield';

function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl"
      >
        <p className="font-mono text-sm tracking-[0.3em] text-[#09bbc8]">SYSTEM ERROR: 404 //</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
          ROUTE NOT FOUND
        </h1>
        <p className="mt-5 text-slate-400">
          This address is outside the active system. Reboot to return to the portfolio.
        </p>
        <motion.button
          type="button"
          onClick={() => window.location.assign('/')}
          whileHover={{ y: -2, borderColor: 'rgba(9,187,200,0.7)' }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 rounded-sm border border-[#09bbc8]/50 bg-[#09bbc8]/[0.08] px-6 py-3 font-mono text-sm text-[#d9fced]"
        >
          Reboot System
        </motion.button>
      </motion.div>
    </main>
  );
}

function OfflineIndicator({ online }) {
  return (
    <AnimatePresence>
      {!online && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          role="status"
          className="fixed bottom-4 right-4 z-[60] rounded-sm border border-[#405ffa]/40 bg-[#07240f]/95 px-4 py-2 font-mono text-xs text-[#d9fced] backdrop-blur"
        >
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#09bbc8]" />
          OFFLINE MODE
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [online, setOnline] = useState(() => navigator.onLine);
  const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';

  useEffect(() => {
    const updateStatus = () => setOnline(navigator.onLine);
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  }, []);

  if (!isHome) return <NotFound />;

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate min-h-screen overflow-x-hidden bg-[#07240f] font-sans text-slate-100">
        <Starfield />
        <Navbar />
        <main className="relative z-10 isolate overflow-x-hidden pt-16">
          <LoadingBoundary loading={false}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Interests />
            <Contact />
          </LoadingBoundary>
        </main>
        <OfflineIndicator online={online} />
      </div>
    </MotionConfig>
  );
}
