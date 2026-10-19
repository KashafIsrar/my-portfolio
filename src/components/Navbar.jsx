import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Interests', href: '#interests' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d9fced]/[0.08] bg-[#07240f]/90 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="font-mono text-lg font-bold tracking-tight text-[#d9fced] transition hover:text-[#09bbc8]">
          KI<span className="text-[#09bbc8]">_</span>
          <span className="sr-only">Kashaf Israr — back to top</span>
        </a>

        <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-slate-400 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[#09bbc8]">
              {link.name}
            </a>
          ))}
        </div>

        <motion.button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          whileTap={{ scale: 0.92 }}
          className="grid h-10 w-10 place-items-center rounded-sm border border-[#d9fced]/10 text-slate-200 transition hover:border-[#09bbc8]/50 hover:text-[#09bbc8] md:hidden"
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="border-b border-[#09bbc8]/20 bg-[#07240f]/98 px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="rounded-sm px-3 py-3 font-mono text-sm uppercase tracking-widest text-slate-300 transition hover:bg-[#09bbc8]/[0.06] hover:text-[#d9fced]"
                  >
                    <span className="mr-3 text-[#09bbc8]/60">0{index + 1}</span>
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
