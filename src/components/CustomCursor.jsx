// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const CustomCursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       gsap.to(cursorRef.current, {
//         x: e.clientX, y: e.clientY,
//         duration: 0.5,
//         ease: "power3.out"
//       });
//     };
//     window.addEventListener('mousemove', moveCursor);
//     return () => window.removeEventListener('mousemove', moveCursor);
//   }, []);

//   return (
//     <div 
//       ref={cursorRef} 
//       className="fixed top-0 left-0 w-10 h-10 border border-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block" 
//     />
//   );
// };

// export default CustomCursor;

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const CustomCursor = () => {
//   const cursorRef = useRef(null);
//   const dotRef = useRef(null);

//   useEffect(() => {
//     // Hidden on load to prevent jumping from (0,0)
//     gsap.set([cursorRef.current, dotRef.current], { opacity: 0 });

//     const moveCursor = (e) => {
//       const { clientX, clientY } = e;

//       // Outer Ring - ધીમેથી ફોલો કરશે (Smooth Lag)
//       gsap.to(cursorRef.current, {
//         x: clientX,
//         y: clientY,
//         duration: 0.6,
//         ease: "power3.out",
//         opacity: 1
//       });

//       // Inner Dot - તરત જ ફોલો કરશે (Instant)
//       gsap.to(dotRef.current, {
//         x: clientX,
//         y: clientY,
//         duration: 0.1,
//         ease: "none",
//         opacity: 1
//       });
//     };

//     const handleMouseDown = () => {
//       gsap.to(cursorRef.current, { scale: 0.7, border: "2px solid #a4ac86", duration: 0.2 });
//       gsap.to(dotRef.current, { scale: 2, backgroundColor: "#a4ac86", duration: 0.2 });
//     };

//     const handleMouseUp = () => {
//       gsap.to(cursorRef.current, { scale: 1, border: "1px solid #000", duration: 0.2 });
//       gsap.to(dotRef.current, { scale: 1, backgroundColor: "#000", duration: 0.2 });
//     };

//     // Link hover effect - જ્યારે કોઈ લિંક કે બટન પર જાય ત્યારે
//     const handleLinkHover = () => {
//       gsap.to(cursorRef.current, { scale: 1.5, backgroundColor: "rgba(164, 172, 134, 0.1)", border: "none", duration: 0.3 });
//       gsap.to(dotRef.current, { scale: 0.5, opacity: 0, duration: 0.2 });
//     };

//     const handleLinkLeave = () => {
//       gsap.to(cursorRef.current, { scale: 1, backgroundColor: "transparent", border: "1px solid #000", duration: 0.3 });
//       gsap.to(dotRef.current, { scale: 1, opacity: 1, duration: 0.2 });
//     };

//     window.addEventListener('mousemove', moveCursor);
//     window.addEventListener('mousedown', handleMouseDown);
//     window.addEventListener('mouseup', handleMouseUp);

//     // બધી લિંક્સ અને બટન્સ પર ઈફેક્ટ આપવા માટે
//     const links = document.querySelectorAll('a, button, .cursor-pointer');
//     links.forEach(link => {
//       link.addEventListener('mouseenter', handleLinkHover);
//       link.addEventListener('mouseleave', handleLinkLeave);
//     });

//     return () => {
//       window.removeEventListener('mousemove', moveCursor);
//       window.removeEventListener('mousedown', handleMouseDown);
//       window.removeEventListener('mouseup', handleMouseUp);
//       links.forEach(link => {
//         link.removeEventListener('mouseenter', handleLinkHover);
//         link.removeEventListener('mouseleave', handleLinkLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Outer Ring */}
//       <div 
//         ref={cursorRef} 
//         className="fixed top-0 left-0 w-8 h-8 border border-black rounded-full pointer-events-none z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2 transition-colors duration-300" 
//       />
//       {/* Inner Dot */}
//       <div 
//         ref={dotRef} 
//         className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2" 
//       />
//     </>
//   );
// };

// export default CustomCursor;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // 1. Initial State: Center both elements perfectly
    gsap.set([cursorRef.current, dotRef.current], { 
      opacity: 0, 
      xPercent: -50, 
      yPercent: -50 
    });

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Outer Ring - Smooth Lag
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: "power2.out",
        opacity: 1
      });

      // Inner Dot - Instant Follow
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "none",
        opacity: 1
      });
    };

    // 2. Global Hover Detection (Event Delegation)
    const handleMouseOver = (e) => {
      const isHoverable = e.target.closest('a, button, .cursor-pointer');
      
      if (isHoverable) {
        // Outer ring expands and fades slightly
        gsap.to(cursorRef.current, { 
          scale: 2.2, 
          backgroundColor: "rgba(164, 172, 134, 0.15)", 
          borderWidth: "0px",
          duration: 0.3 
        });
        // Inner dot shrinks (or disappears) for a cleaner look on links
        gsap.to(dotRef.current, { scale: 0, opacity: 0, duration: 0.2 });
      } else {
        // Return to normal
        gsap.to(cursorRef.current, { 
          scale: 1, 
          backgroundColor: "transparent", 
          border: "1px solid #000",
          duration: 0.3 
        });
        gsap.to(dotRef.current, { scale: 1, opacity: 1, duration: 0.2 });
      }
    };

    const handleMouseDown = () => {
      gsap.to(cursorRef.current, { scale: 0.8, duration: 0.2 });
      gsap.to(dotRef.current, { scale: 1.5, backgroundColor: "#a4ac86", duration: 0.2 });
    };

    const handleMouseUp = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
      gsap.to(dotRef.current, { scale: 1, backgroundColor: "#000", duration: 0.2 });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-black rounded-full pointer-events-none z-[9999] hidden md:block" 
      />
      {/* Inner Dot - Size increased to w-3 h-3 */}
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[9999] hidden md:block" 
      />
    </>
  );
};

export default CustomCursor;