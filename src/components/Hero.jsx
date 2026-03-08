import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#f8f9fa] overflow-hidden">
      {/* Background Diagonal Shape */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-white skew-x-[-15deg] -translate-x-20 shadow-xl" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#82905b] uppercase tracking-[4px] font-bold text-sm mb-4 block">
            Hello! I AM SHASHANKKUMAR PATEL
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#000] mb-6 leading-tight">
            Creative <span className="text-[#82905b]">Full Stack</span> <br />
            Developer & Designer
          </h1>
          <div className="flex gap-4">
            <button className="bg-[#82905b] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#6d794a] transition-all">
              Hire me
            </button>
            <button className="border-2 border-[#82905b] text-[#82905b] px-8 py-4 rounded-full font-bold hover:bg-[#82905b] hover:text-white transition-all">
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Right Side: Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          <img 
            src="your-professional-photo.png" 
            alt="Manav Vishwas" 
            className="w-full h-auto object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;