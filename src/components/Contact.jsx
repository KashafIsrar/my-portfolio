import React from 'react';

export default function Contact() {
  return (
    <footer id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Seeking an internship to gain industry experience and contribute to meaningful software solutions. Feel free to connect or send a direct email!
        </p>

        <a 
          href="mailto:kashaf.israr09@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition shadow-lg shadow-indigo-500/25 mb-12"
        >
          Send Email 👋
        </a>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Kashaf Israr. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/KashafIsrar" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/kashaf-israr-7688b7319/" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}