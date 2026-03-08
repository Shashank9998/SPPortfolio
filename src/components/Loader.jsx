import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        
        {/* Animated Circle Progress */}
        <motion.div
          animate={{
            rotate: 360,
            borderRadius: ["20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-24 h-24 border-4 border-[#f4f5f0] border-t-[#a4ac86] rounded-full"
        />

        {/* Center Text/Logo Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-2xl font-black text-black tracking-tighter italic"
          >
            SP<span className="text-[#a4ac86]">.</span>
          </motion.span>
        </div>

        {/* Loading Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 overflow-hidden"
        >
          <span className="text-[10px] font-black uppercase tracking-[5px] text-gray-300 block">
            Loading Experience
          </span>
          {/* Progress Bar under text */}
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="h-[1px] bg-[#a4ac86] mt-2 w-full"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Loader;