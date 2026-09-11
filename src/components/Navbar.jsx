import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Interests", href: "#interests" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a href="#" className="text-xl font-bold text-white tracking-tight hover:text-indigo-400 transition">
          Kashaf Israr<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-indigo-400 transition">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-300">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}