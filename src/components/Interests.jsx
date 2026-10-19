import { Clapperboard, Dumbbell, Palette, Utensils, Waves } from 'lucide-react';
import { MotionCard, RevealSection } from './Motion';

const interests = [
  { title: 'Cooking & baking', icon: Utensils, note: 'Recipes, experiments, and getting the details right.' },
  { title: 'Fitness', icon: Dumbbell, note: 'Strength training and a consistent routine.' },
  { title: 'Digital art', icon: Palette, note: 'Sketching, visual design, and creative exploration.' },
  { title: 'Film & stories', icon: Clapperboard, note: 'Cinematography, movies, and thoughtful storytelling.' },
  { title: 'Music', icon: Waves, note: 'Exploring genres to match whatever the day needs.' },
];

export default function Interests() {
  return (
    <RevealSection id="interests" title="Interests" className="mx-auto max-w-7xl scroll-mt-20 border-t border-white/[0.08] px-5 py-24 sm:px-8">
      <div className="mb-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#09bbc8]">04 / Off the clock</p>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Curiosity beyond code.</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {interests.map(({ title, icon: Icon, note }, index) => (
          <MotionCard key={title} title={title} delay={index * 0.06} className="surface-card p-5">
            <Icon size={19} className="mb-7 text-[#09bbc8]" aria-hidden="true" />
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">{note}</p>
          </MotionCard>
        ))}
      </div>
    </RevealSection>
  );
}
