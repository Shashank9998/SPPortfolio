// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Music, Plane, Film, Trophy } from 'lucide-react';

// // const About = () => {
// //   const details = [
// //     { label: "Name", value: "Shashank Patel" },
// //     // { label: "Date of birth", value: "April 29, 2000" },
// //     { label: "Address", value: "Ahmedabad, Gujarat, India" },
// //     { label: "Zip code", value: "382330" },
// //     { label: "Email", value: "shashankpatel9998@gmail.com" },
// //     { label: "Phone", value: "+91-9328649313" },
// //   ];

// //   const interests = [
// //     { icon: <Music size={20} />, label: "Music" },
// //     { icon: <Plane size={20} />, label: "Travel" },
// //     { icon: <Film size={20} />, label: "Movie" },
// //     { icon: <Trophy size={20} />, label: "Sports" },
// //   ];

// //   return (
// //     <section id="about" className="py-24 bg-white">
// //       <div className="container mx-auto px-6">
// //         <div className="flex flex-col md:flex-row items-center gap-16">

// //           {/* Left Side: Image with Shadow Effect */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="w-full md:w-5/12"
// //           >
// //             <div className="relative group">
// //               {/* Image Shadow Background */}
// //               <div className="absolute -inset-4 bg-[#82905b]/10 rounded-2xl -rotate-3 transition-transform group-hover:rotate-0" />
// //               <img 
// //                 src="/your-photo.jpg" // તમારી ઇમેજ પાથ અહીં સેટ કરો
// //                 alt="Manav Vishwas" 
// //                 className="relative z-10 w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
// //               />
// //             </div>
// //           </motion.div>

// //           {/* Right Side: Content */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="w-full md:w-7/12"
// //           >
// //             <span className="text-[#82905b] uppercase tracking-[4px] font-bold text-sm mb-4 block">
// //               My Intro
// //             </span>
// //             <h2 className="text-5xl font-black text-black mb-8 tracking-tighter">About Me</h2>

// //             <p className="text-gray-500 leading-relaxed text-lg mb-10">
// //               "My creative work thrives within the vibrant atmosphere of Ahmedabad—a city where history meets modernity on the banks of the Sabarmati. Just as the lanes of Manek Chowk offer a diverse palette of flavors, my coding reflects a precise blend of cutting-edge technology and intuitive design. Rooted in the soul of this Heritage City while embracing futuristic tech, I build world-class web applications that bridge tradition and innovation."
// //             </p>

// //             {/* Personal Details Grid */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-12">
// //               {details.map((item, index) => (
// //                 <div key={index} className="flex items-start">
// //                   <span className="w-32 font-black text-black uppercase text-xs tracking-widest">{item.label}:</span>
// //                   <span className="text-gray-500 font-medium">{item.value}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Interests / Hobbies */}
// //             <div className="flex flex-wrap gap-6 border-t border-gray-100 pt-10">
// //               {interests.map((hobby, index) => (
// //                 <div key={index} className="flex items-center gap-3 group">
// //                   <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#82905b] group-hover:bg-[#82905b] group-hover:text-white transition-all">
// //                     {hobby.icon}
// //                   </div>
// //                   <span className="font-bold text-gray-800 uppercase text-[10px] tracking-[2px]">
// //                     {hobby.label}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Music, Plane, Film, Trophy } from 'lucide-react';

// // const About = () => {
// //     const details = [
// //         { label: "Name", value: "Shashankkumar Patel" },
// //         // { label: "Date of birth", value: "April 29, 2000" },
// //         { label: "Address", value: "Ahmedabad, Gujarat, India" },
// //         { label: "Zip code", value: "382330" },
// //         { label: "Email", value: "shashankpatel9998@gmail.com" },
// //         { label: "Phone", value: "+91-9328649313" },
// //     ];

// //     const interests = [
// //         { icon: <Music size={18} />, label: "Music" },
// //         { icon: <Plane size={18} />, label: "Travel" },
// //         { icon: <Film size={18} />, label: "Movie" },
// //         { icon: <Trophy size={18} />, label: "Sports" },
// //     ];

// //     return (
// //         <section id="about" className="py-24 bg-white">
// //             <div className="container mx-auto px-6 max-w-7xl">
// //                 <div className="flex flex-col md:flex-row items-center gap-16">

// //                     {/* Left Side: Image Section */}
// //                     <motion.div
// //                         initial={{ opacity: 0, x: -30 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ duration: 0.8 }}
// //                         className="w-full md:w-5/12"
// //                     >
// //                         <div className="relative">
// //                             {/* Subtle Decorative Background */}
// //                             <div className="absolute -inset-4 bg-[#82905b]/5 rounded-2xl -rotate-2" />
// //                             <img
// //                                 src="/your-photo.jpg"
// //                                 alt="Shashank Patel"
// //                                 className="relative z-10 w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-gray-100"
// //                             />
// //                         </div>
// //                     </motion.div>

// //                     {/* Right Side: Content Section */}
// //                     <motion.div
// //                         initial={{ opacity: 0, x: 30 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ duration: 0.8 }}
// //                         className="w-full md:w-7/12"
// //                     >
// //                         {/* Sub-heading */}
// //                         <span className="text-[#82905b] uppercase tracking-[3px] font-bold text-xs mb-3 block">
// //                             My Intro
// //                         </span>

// //                         {/* Main Title */}
// //                         <h2 className="text-4xl md:text-5xl font-black text-black mb-8 tracking-tight">
// //                             About Me
// //                         </h2>

// //                         {/* Description - Consistent gray font */}
// //                         <p className="text-gray-500 leading-relaxed text-lg mb-10 font-normal">
// //                             "My creative work thrives within the vibrant atmosphere of Ahmedabad—a city where history meets modernity on the banks of the Sabarmati. Just as the lanes of Manek Chowk offer a diverse palette of flavors, my coding reflects a precise blend of cutting-edge technology and intuitive design. Rooted in the soul of this Heritage City while embracing futuristic tech, I build world-class web applications that bridge tradition and innovation."
// //                         </p>

// //                         {/* Personal Details Grid */}
// //                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 mb-12">
// //                             {details.map((item, index) => (
// //                                 <div key={index} className="flex items-center">
// //                                     <span className="w-28 font-bold text-black uppercase text-[11px] tracking-wider">
// //                                         {item.label}:
// //                                     </span>
// //                                     <span className="text-gray-500 text-[15px] font-medium">
// //                                         {item.value}
// //                                     </span>
// //                                 </div>
// //                             ))}
// //                         </div>

// //                         {/* Interests / Hobbies Section */}
// //                         <div className="flex flex-wrap gap-5 border-t border-gray-100 pt-10">
// //                             {interests.map((hobby, index) => (
// //                                 <div key={index} className="flex items-center gap-3 group cursor-default">
// //                                     <div className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#82905b] group-hover:text-white transition-all duration-300 shadow-sm">
// //                                         {hobby.icon}
// //                                     </div>
// //                                     <span className="font-bold text-gray-800 uppercase text-[10px] tracking-[2px] transition-colors group-hover:text-[#82905b]">
// //                                         {hobby.label}
// //                                     </span>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </motion.div>

// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default About;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Music, Plane, Film, Trophy } from 'lucide-react';

// const About = () => {
//   const details = [
//     { label: "Name:", value: "Shashank Patel" },
//     { label: "Date of birth:", value: "April 29, 2000" },
//     { label: "Address:", value: "Ahmedabad, Gujarat, India" },
//     { label: "Zip code:", value: "382330" },
//     { label: "Email:", value: "shashankpatel9998@gmail.com" },
//     { label: "Phone:", value: "+91-9328649313" },
//   ];

//   const interests = [
//     { icon: <Music size={18} />, label: "Music" },
//     { icon: <Plane size={18} />, label: "Travel" },
//     { icon: <Film size={18} />, label: "Movie" },
//     { icon: <Trophy size={18} />, label: "Sports" },
//   ];

//   return (
//     <section id="about" className="py-24 bg-white">
//       <div className="container mx-auto px-6 max-w-6xl">
//         <div className="flex flex-col md:flex-row items-start gap-12">
          
//           {/* Left Side: Image */}
//           <div className="w-full md:w-5/12">
//             <img 
//               src="/your-photo.jpg" 
//               alt="Shashank Patel" 
//               className="w-full h-auto rounded-sm grayscale shadow-sm"
//             />
//           </div>

//           {/* Right Side: Content */}
//           <div className="w-full md:w-7/12">
//             <span className="text-[#a4ac86] uppercase tracking-[3px] font-bold text-[13px] mb-2 block">
//               My Intro
//             </span>
//             <h2 className="text-5xl font-bold text-[#333333] mb-8 tracking-tight">
//               About Me
//             </h2>
            
//             <p className="text-gray-400 leading-relaxed text-[16px] mb-10">
//               "My creative work thrives within the vibrant atmosphere of Ahmedabad—a city where history meets modernity on the banks of the Sabarmati. Just as the lanes of Manek Chowk offer a diverse palette of flavors, my coding reflects a precise blend of cutting-edge technology and intuitive design. Rooted in the soul of this Heritage City while embracing futuristic tech, I build world-class web applications that bridge tradition and innovation."
//             </p>

//             {/* Horizontal Details Grid (Side by Side) */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
//               {details.map((item, index) => (
//                 <div key={index} className="flex items-center gap-4">
//                   <span className="text-[16px] font-bold text-[#1a1a1a] min-w-[100px]">
//                     {item.label}
//                   </span>
//                   <span className="text-[#a4ac86] text-[16px] font-medium">
//                     {item.value}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Interests Section with Vertical Divider Line */}
//             <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
//               {interests.map((hobby, index) => (
//                 <div key={index} className="flex items-center gap-3 relative pl-4 first:pl-0">
//                   {/* Vertical Line Divider (Clyde Style) */}
//                   {index !== 0 && (
//                     <div className="absolute left-[-20px] h-10 w-[1px] bg-gray-200" />
//                   )}
                  
//                   <div className="w-10 h-10 rounded-full bg-[#f4f5f0] flex items-center justify-center text-[#82905b]">
//                     {hobby.icon}
//                   </div>
//                   <span className="font-bold text-[#1a1a1a] text-[15px]">
//                     {hobby.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Music, Plane, Film, Trophy } from 'lucide-react';

// const About = () => {
//   const details = [
//     { label: "Name:", value: "Shashank Patel" },
//     { label: "Date of birth:", value: "April 29, 2000" },
//     { label: "Address:", value: "Ahmedabad, Gujarat, India" },
//     { label: "Zip code:", value: "382330" },
//     { label: "Email:", value: "shashankpatel9998@gmail.com" },
//     { label: "Phone:", value: "+91-9328649313" },
//   ];

//   const interests = [
//     { icon: <Music size={18} />, label: "Music" },
//     { icon: <Plane size={18} />, label: "Travel" },
//     { icon: <Film size={18} />, label: "Movie" },
//     { icon: <Trophy size={18} />, label: "Sports" },
//   ];

//   return (
//     <section id="about" className="py-24 bg-white">
//       <div className="container mx-auto px-6 max-w-6xl">
//         <div className="flex flex-col md:flex-row items-start gap-12">
          
//           {/* Left Side: Image */}
//           <div className="w-full md:w-5/12">
//             <img 
//               src="/your-photo.jpg" 
//               alt="Shashank Patel" 
//               className="w-full h-auto rounded-sm grayscale shadow-sm border border-gray-100"
//             />
//           </div>

//           {/* Right Side: Content */}
//           <div className="w-full md:w-7/12">
//             <span className="text-[#a4ac86] uppercase tracking-[3px] font-bold text-[13px] mb-2 block">
//               My Intro
//             </span>
//             <h2 className="text-5xl font-bold text-[#333333] mb-8 tracking-tight">
//               About Me
//             </h2>
            
//             <p className="text-gray-400 leading-relaxed text-[16px] mb-10">
//               "My creative work thrives within the vibrant atmosphere of Ahmedabad—a city where history meets modernity on the banks of the Sabarmati. Just as the lanes of Manek Chowk offer a diverse palette of flavors, my coding reflects a precise blend of cutting-edge technology and intuitive design."
//             </p>

//             {/* Vertical Details (Line by Line) */}
//             <div className="flex flex-col gap-y-4 mb-12">
//               {details.map((item, index) => (
//                 <div key={index} className="flex items-center border-b border-gray-50 pb-2 last:border-0">
//                   <span className="text-[16px] font-bold text-[#1a1a1a] min-w-[130px]">
//                     {item.label}
//                   </span>
//                   <span className="text-[#a4ac86] text-[16px] font-medium ml-4">
//                     {item.value}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Interests Section */}
//             <div className="flex flex-wrap items-center gap-x-10 gap-y-6 pt-6 border-t border-gray-100">
//               {interests.map((hobby, index) => (
//                 <div key={index} className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full bg-[#f4f5f0] flex items-center justify-center text-[#82905b]">
//                     {hobby.icon}
//                   </div>
//                   <span className="font-bold text-[#1a1a1a] text-[15px]">
//                     {hobby.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';
import { Music, Plane, Film, Trophy } from 'lucide-react';
import Img from '../assets/ShashankkumarPatel.png';

const About = () => {
  const details = [
    { label: "Name:", value: "Shashankkumar Patel" },
    // { label: "Date of birth:", value: "April 29, 2000" },
    { label: "Address:", value: "Ahmedabad, Gujarat, India" },
    { label: "Zip code:", value: "382330" },
    { label: "Email:", value: "shashankpatel9998@gmail.com" },
    { label: "Phone:", value: "+91-9328649313" },
  ];

  const interests = [
    { icon: <Music size={18} />, label: "Music" },
    { icon: <Plane size={18} />, label: "Travel" },
    { icon: <Film size={18} />, label: "Movie" },
    { icon: <Trophy size={18} />, label: "Sports" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          {/* Left Side: Image with Hover Effect */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-5/12"
          >
            {/* Image Wrapper */}
            <div className="relative group overflow-hidden rounded-sm cursor-pointer shadow-sm">
              
              {/* Decorative Subtle Line Divider */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[#f4f5f0] z-0 group-hover:scale-y-110 transition-transform duration-500" />
              
              {/* Actual Image */}
              <img 
                src={Img} 
                alt="Shashank Patel" 
                className="relative z-10 w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-110 transition-all duration-700 ease-in-out border border-gray-100"
              />
              
              {/* Transparent Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#82905b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-7/12"
          >
            <span className="text-[#a4ac86] uppercase tracking-[3px] font-bold text-[13px] mb-2 block">
              My Intro
            </span>
            <h2 className="text-5xl font-bold text-[#333333] mb-8 tracking-tight">
              About Me
            </h2>
            
            <p className="text-gray-400 leading-relaxed text-[16px] mb-10">
              "I am a passionate Full Stack Web Developer who enjoys building modern, responsive, and user-friendly web applications. I specialize in creating seamless experiences by combining clean front-end design with efficient back-end functionality. My goal is to transform ideas into practical digital solutions using modern web technologies. I continuously learn and explore new tools to improve performance, scalability, and user experience in every project I build."

            </p>

            {/* Vertical Details (Line by Line) */}
            <div className="flex flex-col gap-y-4 mb-12">
              {details.map((item, index) => (
                <div key={index} className="flex items-center border-b border-gray-50 pb-2 last:border-0 group">
                  <span className="text-[16px] font-bold text-[#1a1a1a] min-w-[130px] group-hover:text-[#82905b] transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[#a4ac86] text-[16px] font-medium ml-4 transition-colors">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Interests Section */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6 pt-6 border-t border-gray-100">
              {interests.map((hobby, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 group"
                  whileHover={{ scale: 1.05 }} // Minor subtle effect on the hobby section
                >
                  <div className="w-10 h-10 rounded-full bg-[#f4f5f0] flex items-center justify-center text-[#82905b] group-hover:bg-[#82905b] group-hover:text-white transition-all">
                    {hobby.icon}
                  </div>
                  <span className="font-bold text-[#1a1a1a] text-[15px] transition-colors group-hover:text-[#82905b]">
                    {hobby.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;