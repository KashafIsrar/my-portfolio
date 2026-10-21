import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

const motionElements = {
  aside: motion.aside,
  article: motion.article,
  div: motion.div,
  section: motion.section,
};

export function InteractiveContainer({
  as: Component = 'article',
  children,
  className = '',
  title = 'Portfolio details',
  expandable = true,
  delay = 0,
  initial,
  whileInView,
  whileHover,
  whileTap,
  viewport,
  style,
  transition,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tilt = Component === 'section' ? 1.2 : 2.2;
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [tilt, -tilt]), { stiffness: 140, damping: 20 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-tilt, tilt]), { stiffness: 140, damping: 20 });
  const MotionComponent = motionElements[Component] ?? motion.div;
  const expandedScale = Component === 'section' ? 1.015 : 1.045;

  function trackPointer(event) {
    if (prefersReducedMotion || event.pointerType !== 'mouse' || !containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  function activate(event) {
    if (!expandable) return;
    if (event.target.closest('a, button, input, textarea, select, summary, [role="button"]')) return;
    if (event.target.closest('[data-interactive-container]') !== event.currentTarget) return;
    setIsExpanded((expanded) => !expanded);
  }

  function handleKeyDown(event) {
    if (!expandable || event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsExpanded((expanded) => !expanded);
    }
  }

  return (
    <MotionComponent
      {...props}
      ref={containerRef}
      data-interactive-container
      data-expandable={expandable || undefined}
      role="group"
      tabIndex={expandable ? 0 : undefined}
      aria-label={expandable ? `Expandable ${title}` : undefined}
      aria-expanded={expandable ? isExpanded : undefined}
      onClick={activate}
      onKeyDown={handleKeyDown}
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
      animate={isExpanded ? { scale: expandedScale, zIndex: 20 } : { scale: 1, zIndex: 0 }}
      style={{
        ...style,
        ...(prefersReducedMotion ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }),
      }}
      initial={initial ?? { opacity: 0, y: 24 }}
      whileInView={whileInView ?? { opacity: 1, y: 0 }}
      viewport={viewport ?? { once: true, amount: 0.12 }}
      transition={transition ?? { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? undefined : { ...whileHover, borderColor: 'rgba(39,230,236,0.55)' }}
      whileTap={whileTap ?? { scale: 0.995 }}
      className={`interactive-container ${className}`}
    >
      {children}
    </MotionComponent>
  );
}

export function RevealSection({ children, className = '', title, ...props }) {
  return (
    <motion.section
      aria-label={title}
      className={`reveal-section ${className}`}
      initial={{ opacity: 0, y: 28, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.14, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionCard({ children, className = '', delay = 0, title, ...props }) {
  return (
    <motion.section
      role="group"
      aria-label={title}
      className={`reveal-item ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -6% 0px' }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.995 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function LoadingSkeleton({ className = '', lines = 3 }) {
  return (
    <motion.div
      role="status"
      aria-label="Loading content"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.55, 1, 0.55], transition: { duration: 1.6, repeat: Infinity } }}
      className={`space-y-3 rounded-sm border border-[#09bbc8]/20 bg-slate-950/70 p-6 ${className}`}
    >
      <span className="block h-5 w-2/5 rounded-sm bg-[#09bbc8]/15" />
      {Array.from({ length: lines }, (_, index) => (
        <span
          key={index}
          className={`block h-3 rounded bg-slate-800 ${index === lines - 1 ? 'w-3/5' : 'w-full'}`}
        />
      ))}
    </motion.div>
  );
}

export function LoadingBoundary({ loading, children }) {
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <LoadingSkeleton />
        </motion.div>
      ) : (
        <div key="loaded">
          {children}
        </div>
      )}
    </AnimatePresence>
  );
}
