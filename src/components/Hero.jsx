import React from 'react';
import { motion } from 'framer-motion';
import Img from '../assets/SP.png';

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
                {/* <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          <img 
            src={Img} 
            alt="Shashank Patel" 
            className="w-full h-auto object-cover rounded-2xl"
          />
        </motion.div> */}
                {/* <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mt-16 md:mt-0 flex justify-center"
        >
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border-8 border-[#a4ac86]/20 z-0 hidden lg:block" />
          
          <div className="relative z-10 w-full max-w-[500px]">
             <div className="absolute inset-0 bg-[#f4f5f0] rounded-b-full translate-y-10 -z-10" />
             
             <motion.img 
                src={Img} 
                alt="Shashank Patel" 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-auto object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
          </div>

          <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 flex flex-col gap-4 z-20 hidden lg:flex">
             <div className="w-[1px] h-20 bg-gray-200 mx-auto" />
             <span className="vertical-text text-[10px] font-black uppercase tracking-[4px] text-gray-300 py-4 rotate-180" style={{ writingMode: 'vertical-rl' }}>Follow Me</span>
             <div className="w-[1px] h-20 bg-gray-200 mx-auto" />
          </div>
        </motion.div> */}

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative mt-5 md:mt-25 lg:mt-35 flex justify-center items-center"
                >
                    {/* 1. Dynamic Rotating Background Shape */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[115%] h-[115%] border border-[#a4ac86]/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0"
                    />

                    {/* 2. Main Image Wrapper */}
                    <div className="relative z-10 w-full max-w-[420px] group">

                        {/* Decorative Glow Behind Image */}
                        <div className="absolute inset-0 bg-[#a4ac86]/5 blur-[80px] -z-10 rounded-full" />

                        {/* The Premium Frame */}
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#f8f9f5] to-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50">

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="relative overflow-hidden rounded-[2.2rem] bg-white"
                            >
                                <motion.img
                                    src={Img}
                                    alt="Shashank Patel"
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full h-auto object-cover transform transition-all duration-700 group-hover:rotate-1"
                                />
                            </motion.div>
                        </div>

                        {/* 3. Floating "Live" Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="absolute -bottom-4 -left-6 bg-white px-5 py-3 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-3"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-black">Open to Projects</span>
                        </motion.div>
                    </div>

                    {/* 4. Side Text Indicator */}
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:block">
                        <p className="rotate-90 text-[10px] font-black uppercase tracking-[8px] text-gray-300">
                            Visualist<span className="text-[#a4ac86]">.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;