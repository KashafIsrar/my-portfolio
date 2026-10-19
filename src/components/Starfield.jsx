const stars = Array.from({ length: 34 }, (_, index) => ({
  x: (index * 37 + 11) % 100,
  y: (index * 61 + 7) % 100,
  size: index % 7 === 0 ? 2.5 : index % 3 === 0 ? 2 : 1.5,
  driftX: `${(index % 7) * 5 - 15}px`,
  driftY: `${-28 - (index % 6) * 7}px`,
  duration: `${12 + (index % 7) * 2}s`,
  delay: `${-1 * (index % 17)}s`,
  tone: index % 6 === 0 ? 'star-cyan' : 'star-white',
}));

export default function Starfield() {
  return (
    <div aria-hidden="true" className="space-field">
      {stars.map((star, index) => (
        <span
          key={index}
          className={`space-star ${star.tone}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--star-drift-x': star.driftX,
            '--star-drift-y': star.driftY,
            '--star-duration': star.duration,
            '--star-delay': star.delay,
          }}
        />
      ))}
    </div>
  );
}
