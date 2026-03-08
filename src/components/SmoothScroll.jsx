import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // સ્ક્રોલની સ્પીડ (વધારે એટલે વધુ સ્મૂથ)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // સ્મૂથનેસ માટે મેથેમેટિકલ ફંક્શન
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;