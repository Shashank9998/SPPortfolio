import React, { useEffect, useRef, createContext } from 'react';
import Lenis from 'lenis';

export const LenisContext = createContext(null);

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.5,
      smoothTouch: false,
      touchMultiplier: 2.5,
      normalizeWheel: true,
      infinite: false,
    });

    const animate = (time) => {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenisRef.current?.destroy();
    };
  }, []);

  const scrollTo = (target) => {
    if (lenisRef.current && typeof lenisRef.current.scrollTo === 'function') {
      lenisRef.current.scrollTo(target);
    }
  };

  return (
    <LenisContext.Provider value={{ scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
};

export default SmoothScroll;