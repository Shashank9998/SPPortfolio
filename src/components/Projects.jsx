// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Projects = () => {
//   const triggerRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       if (window.innerWidth > 1024) {
//         gsap.to(sectionRef.current, {
//           translateX: "-200vw",
//           ease: "none",
//           scrollTrigger: {
//             trigger: triggerRef.current,
//             start: "top top",
//             end: "2000 top",
//             scrub: 1,
//             pin: true,
//           }
//         });
//       }
//     });
//     return () => ctx.revert();
//   }, []);

//   const projects = [
//     { title: "Luxury Glass", tech: "Three.js", color: "from-blue-900/40" },
//     { title: "SP Iron Works", tech: "Tailwind", color: "from-purple-900/40" },
//     { title: "Cineriew", tech: "React API", color: "from-emerald-900/40" }
//   ];

//   return (
//     <div ref={triggerRef} id="projects">
//       <div ref={sectionRef} className="flex flex-col lg:flex-row lg:w-[300vw]">
//         {projects.map((p, i) => (
//           <div key={i} className="h-screen w-screen flex items-center justify-center p-10">
//             <div className={`w-full max-w-6xl h-[70vh] bg-gradient-to-br ${p.color} to-transparent backdrop-blur-2xl border border-white/10 rounded-[50px] p-12 flex flex-col justify-end group cursor-none`}>
//               <h3 className="text-6xl md:text-9xl font-black mb-4 group-hover:scale-105 transition-transform duration-500">{p.title}</h3>
//               <p className="text-blue-400 font-mono tracking-widest text-xl">{p.tech}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projectData = [
        {
            title: "Patel Glass Interior",
            category: "Web Design / 3D",
            image: "https://images.pexels.com/photos/257856/pexels-photo-257856.jpeg", // તમારી ઈમેજ પાથ અહીં મૂકો
            link: "https://patel-glasswork.vercel.app/",
        },
        {
            title: "SP Iron & Steel Works",
            category: "Industrial Website",
            image: "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg",
            link: "https://sp-steel-iron.vercel.app/",
        },
        // {
        //     title: "Instagram Blog Clone",
        //     category: "React Application",
        //     image: "/blog-project.jpg",
        // },
        {
            title: "Finance Tracker",
            category: "Personal Finance Management App",
            image: "https://images.pexels.com/photos/732444/pexels-photo-732444.jpeg",
            link: "https://finance-tawny-ten.vercel.app/",
        },
        {
            title: "M-Watch App",
            category: "API Integration",
            image: "https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg",
            link: "https://m-watch.vercel.app/",
        },
        {
            title: "Quiz App",
            category: "React Application",
            image: "https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg",
            link: "https://quiz-virid-two.vercel.app/",
        },
        {
            title: "UrbanCart",
            category: "E-commerce",
            image: "https://images.pexels.com/photos/5650016/pexels-photo-5650016.jpeg",
            link: "https://patel-glasswork.vercel.app/",
        },
    ];

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[#a4ac86] uppercase tracking-[4px] font-bold text-xs mb-3 block">
                        Accomplishments
                    </span>
                    <h2 className="text-5xl font-black text-black mb-6 tracking-tighter">Our Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A curated collection of digital experiences crafted with a blend of modern aesthetics and functional code. Each project reflects a commitment to quality, innovation, and user-centric design.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            {/* <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div 
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  className="text-center p-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#a4ac86] font-bold uppercase tracking-widest text-xs">
                    {project.category}
                  </p>
                </motion.div>
              </div> */}
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <motion.div className="text-center p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-[#a4ac86] font-bold uppercase tracking-widest text-xs mb-6">
                                        {project.category}
                                    </p>

                                    {/* Vercel Link Button */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-[#a4ac86] text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-white hover:text-black transition-all"
                                    >
                                        View Live Project
                                    </a>
                                </motion.div>
                            </div>

                            {/* Corner Accent (Optional - Match with Clyde style) */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#a4ac86] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;