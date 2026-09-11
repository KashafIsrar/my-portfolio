import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </main>
    </div>
  );
}