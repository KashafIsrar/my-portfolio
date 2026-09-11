import React from 'react';

export default function Interests() {
  const interests = [
    {
      title: "Culinary Arts & Baking",
      emoji: "🍳",
      description: "Love experimenting with new recipes, baking sweet treats, and mastering traditional dishes."
    },
    {
      title: "Fitness & Gym",
      emoji: "🏋️",
      description: "Staying active through regular strength training and gym sessions to keep a healthy mind and body."
    },
    {
      title: "Digital Art & Creativity",
      emoji: "🎨",
      description: "Expressing creativity through digital sketches, graphic design, and artistic explorations."
    },
    {
      title: "Cinephile",
      emoji: "🎬",
      description: "Massive movie and web series enthusiast with a passion for storytelling and cinematography."
    },
    {
      title: "Music Explorer",
      emoji: "🎧",
      description: "Eclectic music taste—listening to almost every music genre depending on the vibe."
    }
  ];

  return (
    <section id="interests" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Beyond Coding</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Here is what keeps me inspired and energized outside of software engineering.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((item, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-indigo-500/50 transition"
          >
            <div className="text-3xl mb-3">{item.emoji}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}