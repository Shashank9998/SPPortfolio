// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowUp } from 'lucide-react';

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // જ્યારે યુઝર 300px થી વધુ નીચે સ્ક્રોલ કરે ત્યારે બટન બતાવવું
//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   return (
//     <div className="fixed bottom-8 right-8 z-50">
//       <AnimatePresence>
//         {isVisible && (
//           <motion.button
//             initial={{ opacity: 0, scale: 0.5, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.5, y: 20 }}
//             whileHover={{ scale: 1.1, backgroundColor: "#8e976f" }}
//             whileTap={{ scale: 0.9 }}
//             onClick={scrollToTop}
//             className="p-4 bg-[#a4ac86] text-white rounded-full shadow-2xl shadow-[#a4ac86]/40 flex items-center justify-center transition-colors border-2 border-white/20"
//             aria-label="Scroll to top"
//           >
//             <ArrowUp size={24} strokeWidth={3} />
//           </motion.button>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ScrollToTop;



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Framer Motion scroll logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            className="relative flex items-center justify-center cursor-pointer"
            onClick={scrollToTop}
          >
            {/* SVG Progress Circle */}
            <svg className="w-16 h-16 transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="3"
                fill="transparent"
                className="text-gray-100"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="3"
                fill="transparent"
                className="text-[#a4ac86]"
                style={{
                  pathLength: scrollYProgress,
                }}
              />
            </svg>

            {/* Central Button Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute w-12 h-12 bg-[#a4ac86] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors duration-300"
            >
              <ArrowUp size={20} strokeWidth={3} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;