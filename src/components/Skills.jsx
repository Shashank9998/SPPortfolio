// import React from 'react';
// import { motion } from 'framer-motion';

// const Skills = () => {
//   const skillSet = [
//     { name: "React.js", level: "90%" },
//     { name: "Tailwind CSS", level: "95%" },
//     { name: "GSAP / Framer", level: "85%" },
//     { name: "Figma UI/UX", level: "80%" },
//     { name: "Node.js", level: "75%" },
//     { name: "Three.js", level: "70%" }
//   ];

//   return (
//     <section className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
//       <h2 className="text-5xl md:text-7xl font-black mb-16 text-blue-500/50 italic">SKILLS</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {skillSet.map((skill, i) => (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: i * 0.1 }}
//             className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl group hover:border-blue-500/50 transition-all"
//           >
//             <div className="flex justify-between mb-4">
//               <span className="text-xl font-bold">{skill.name}</span>
//               <span className="text-blue-400 font-mono">{skill.level}</span>
//             </div>
//             {/* Progress Bar */}
//             <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
//               <motion.div 
//                 initial={{ width: 0 }}
//                 whileInView={{ width: skill.level }}
//                 transition={{ duration: 1.5, ease: "easeOut" }}
//                 className="h-full bg-gradient-to-r from-blue-600 to-purple-500"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;



// import React from 'react';
// import { motion } from 'framer-motion';

// const Skills = () => {
//   const skillsData = [
//     { name: "HTML5", percentage: 98, lastWeek: "28%", lastMonth: "60%" },
//     { name: "CSS", percentage: 95, lastWeek: "28%", lastMonth: "60%" },
//     { name: "Bootstrap", percentage: 90, lastWeek: "30%", lastMonth: "70%" },
//     { name: "JavaScript", percentage: 85, lastWeek: "25%", lastMonth: "55%" },
//     { name: "ReactJS", percentage: 88, lastWeek: "20%", lastMonth: "50%" },
//     { name: "jQuery", percentage: 68, lastWeek: "28%", lastMonth: "60%" },
//     { name: "C Language", percentage: 80, lastWeek: "15%", lastMonth: "40%" },
//     { name: "C++", percentage: 75, lastWeek: "10%", lastMonth: "35%" },
//     { name: "PHP", percentage: 82, lastWeek: "22%", lastMonth: "58%" },
//     { name: "Python", percentage: 70, lastWeek: "18%", lastMonth: "45%" },
//     { name: "MYSQL", percentage: 98, lastWeek: "28%", lastMonth: "60%" },
//   ];

//   return (
//     <section id="skills" className="py-24 bg-white">
//       <div className="container mx-auto px-6 max-w-7xl">
        
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <span className="text-[#a4ac86] uppercase tracking-[4px] font-bold text-xs mb-3 block">
//             Skills
//           </span>
//           <h2 className="text-5xl font-black text-black mb-6 tracking-tighter">My Skills</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
//             Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {skillsData.map((skill, index) => (
//             <motion.div 
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white p-10 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_50px_rgba(0,0,0,0.08)] transition-all text-center border border-gray-50"
//             >
//               <h3 className="text-xl font-bold text-black mb-8">{skill.name}</h3>

//               {/* Circular Progress Bar */}
//               <div className="relative w-40 h-40 mx-auto mb-8 flex items-center justify-center">
//                 <svg className="w-full h-full transform -rotate-90">
//                   <circle
//                     cx="80"
//                     cy="80"
//                     r="70"
//                     stroke="#f4f5f0"
//                     strokeWidth="8"
//                     fill="transparent"
//                   />
//                   <motion.circle
//                     cx="80"
//                     cy="80"
//                     r="70"
//                     stroke="#a4ac86"
//                     strokeWidth="8"
//                     fill="transparent"
//                     strokeDasharray={440}
//                     initial={{ strokeDashoffset: 440 }}
//                     whileInView={{ strokeDashoffset: 440 - (440 * skill.percentage) / 100 }}
//                     transition={{ duration: 1.5, ease: "easeOut" }}
//                   />
//                 </svg>
//                 <span className="absolute text-3xl font-black text-black">
//                   {skill.percentage}<small className="text-sm font-bold">%</small>
//                 </span>
//               </div>

//               {/* Statistics (Last Week / Month) */}
//               <div className="flex justify-between items-center border-t border-gray-100 pt-6">
//                 <div className="text-left">
//                   <span className="block text-xl font-bold text-gray-400">{skill.lastWeek}</span>
//                   <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">Last week</span>
//                 </div>
//                 <div className="text-right">
//                   <span className="block text-xl font-bold text-gray-400">{skill.lastMonth}</span>
//                   <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">Last month</span>
//                 </div>
//               </div>
              
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", percentage: 98 },
    { name: "CSS3", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "ReactJS", percentage: 88 },
    { name: "Bootstrap", percentage: 90 },
    { name: "Tailwind CSS", percentage: 92 },
  ];

  const backendSkills = [
    { name: "PHP", percentage: 82 },
    { name: "Python", percentage: 70 },
    { name: "Node.js", percentage: 75 },
    { name: "MySQL", percentage: 98 },
    { name: "C++", percentage: 75 },
    { name: "C Language", percentage: 80 },
  ];

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#a4ac86]/10 transition-all duration-500"
    >
      <div className="flex justify-between items-end mb-4">
        <h3 className="text-lg font-black text-black tracking-tight">{skill.name}</h3>
        <span className="text-[#a4ac86] font-black text-sm">{skill.percentage}%</span>
      </div>

      {/* Modern Progress Bar */}
      <div className="h-2 w-full bg-[#f4f5f0] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-[#a4ac86] relative"
        >
          {/* Subtle Glow on Progress Head */}
          <div className="absolute right-0 top-0 h-full w-2 bg-white/30 blur-[2px]" />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-28 bg-[#fcfcfc]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-[#a4ac86] uppercase tracking-[6px] font-bold text-[10px] mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter">My Skills</h2>
          <div className="w-20 h-1 bg-[#a4ac86] mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Frontend Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-black uppercase tracking-widest text-black">Frontend</h3>
              <div className="h-[1px] flex-grow bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-black uppercase tracking-widest text-black">Backend</h3>
              <div className="h-[1px] flex-grow bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {backendSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;