// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App


// import React, { Suspense } from 'react';
// import Navbar from './components/Navbar';
// import CustomCursor from './components/CustomCursor';
// import Background3D from './components/Background3D';
// import Hero from './components/Hero';
// import Projects from './components/Projects';
// import About from './components/About';

// function App() {
//   return (
//     <div className="relative bg-[#030712] text-white selection:bg-blue-500/30 overflow-x-hidden">
//       <CustomCursor />
      
//       {/* Background 3D Particles */}
//       <div className="fixed inset-0 z-0">
//         <Suspense fallback={null}>
//           <Background3D />
//         </Suspense>
//       </div>

//       <main className="relative z-10">
//         <Navbar />
//         <Hero />
//         <About />
//         <Projects />
        
//         {/* Contact / Footer */}
//         <section className="h-[60vh] flex flex-col items-center justify-center">
//           <h2 className="text-5xl md:text-8xl font-black mb-10 text-center opacity-50">GET IN TOUCH</h2>
//           <a href="mailto:contact@manav.dev" className="text-2xl border-b-2 border-blue-500 pb-2 hover:text-blue-400 transition">
//             hello@manav.dev
//           </a>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;

// import React, { Suspense, lazy } from 'react';
import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// UI Components (Direct Imports)
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Background3D from './components/Background3D';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
// import { Contact } from 'lucide-react';

// Home Page Sections (Lazy Loaded for Speed)
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Home Page Layout
const Home = () => (
  <>
    <Suspense fallback={null}><Hero /></Suspense>
    <Suspense fallback={null}><About /></Suspense>
    <Suspense fallback={null}><Skills /></Suspense>
    <Suspense fallback={null}><Education /></Suspense>
    <Suspense fallback={null}><Projects /></Suspense>
    <Suspense fallback={null}><Contact /></Suspense>
    <Suspense fallback={null}><Footer /></Suspense>
  </>
);

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2 સેકન્ડ પછી લોડર બંધ થશે
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      {/* Selection color and Dark Background */}
      <div className="relative bg-[#030712] text-white selection:bg-blue-500/30 overflow-x-hidden min-h-screen">
        
        {/* Persistent UI elements */}
        <CustomCursor />
        
        {/* Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Suspense fallback={<div className="bg-[#030712] h-screen w-full" />}>
            <Background3D />
          </Suspense>
        </div>

        {/* Foreground Content */}
        <main className="relative z-10">
          <Navbar />
          
          <Routes>
            {/* Landing Page Route */}
            <Route path="/" element={<Home />} />
            
            {/* જો ભવિષ્યમાં તમારે અલગ પેજ બનાવવું હોય તો:
            <Route path="/project/:id" element={<ProjectDetail />} /> 
            */}
          </Routes>
        </main>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;