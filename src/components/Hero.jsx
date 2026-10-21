import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="editorial-hero" aria-labelledby="hero-title">
      <motion.div
        className="editorial-hero-copy"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="editorial-hero-top">
          <p><span className="editorial-status-dot" /> Available for opportunities</p>
          <span>Karachi, Pakistan</span>
        </div>
        <p className="editorial-hero-kicker">SOFTWARE ENGINEERING / SSUET</p>
        <h1 id="hero-title">Kashaf Israr<span className="wordmark-separator">_</span></h1>
        <p className="editorial-hero-summary">
          I build full-stack software with Java, Spring Boot, React, and PostgreSQL—bringing useful ideas
          from a rough first sketch to a considered product.
        </p>
        <div className="editorial-hero-links">
          <motion.a href="#projects" whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
            Selected work <ArrowUpRight size={17} />
          </motion.a>
          <motion.a href="#contact" whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
            Get in touch <ArrowDownRight size={16} />
          </motion.a>
          <motion.a href="https://github.com/KashafIsrar" target="_blank" rel="noreferrer" whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
            GitHub <Code2 size={15} />
          </motion.a>
        </div>
        <div className="editorial-hero-facts" aria-label="Education and selected work">
          <span><strong>3.65</strong><small>GPA / 4.0</small></span>
          <span><strong>06</strong><small>Selected builds</small></span>
        </div>
      </motion.div>

      <motion.div
        className="editorial-hero-art"
        aria-label="Cyberpunk artwork"
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          className="editorial-hero-image"
          src="/images/cyberpunk/reference-2.jpg"
          alt="Monochrome cyberpunk visor with heads-up display details"
          fetchPriority="high"
        />
        <div className="editorial-hero-art-caption">
          <span>24.86° N / 67.01° E</span>
        </div>
      </motion.div>
    </section>
  );
}
