'use client'
import { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ end, duration = 1500 }) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // 👈 nuevo
  const ref = useRef(null);

  useEffect(() => {
    if (hasAnimated) return; // 👈 Evita que reinicie

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateValue(0, end, duration);
          setHasAnimated(true); // 👈 Marca como completado
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  const animateValue = (start, end, duration) => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <span ref={ref}>
      {value}
    </span>
  );
}
