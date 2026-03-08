// import React from 'react';
// import { motion } from 'framer-motion';

// const Education = () => {
//   const eduData = [
//     { year: "2022 - Present", degree: "Web Development Specialization", school: "Advanced Learning" },
//     { year: "2019 - 2022", degree: "Bachelor of Computer Application", school: "University Name" },
//     { year: "2017 - 2019", degree: "Higher Secondary Education", school: "Gujarat Board" }
//   ];

//   return (
//     <section className="py-20 px-6 max-w-5xl mx-auto">
//       <h2 className="text-5xl md:text-7xl font-black mb-16 text-right text-purple-500/50 italic">EDUCATION</h2>
      
//       <div className="relative border-l-2 border-white/10 ml-4 md:ml-0">
//         {eduData.map((edu, i) => (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-12 ml-8 relative"
//           >
//             {/* Dot Animation */}
//             <div className="absolute -left-[41px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            
//             <span className="text-sm font-mono text-blue-400 mb-2 block">{edu.year}</span>
//             <h3 className="text-3xl font-bold mb-2">{edu.degree}</h3>
//             <p className="text-gray-400 text-lg">{edu.school}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;




import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Full Stack Web Development",
      institute: "Creative Design & Multimedia Institute",  
      duration: "2023 - Present",
      location: "Ahmedabad, Gujarat",
      description: "Focused on modern frontend frameworks like ReactJS, state management with Redux, and interactive UI using Framer Motion."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Gujarat University",
      duration: "2020 - 2023",
      location: "Ahmedabad, India",
      description: "Gained core knowledge in programming languages like C, C++, Java, and Database Management Systems."
    },
    // {
    //   degree: "Higher Secondary Education (HSC)",
    //   institute: "Gujarat Secondary Education Board",
    //   duration: "2016 - 2018",
    //   location: "Ahmedabad, Gujarat",
    //   description: "Completed schooling with a focus on Mathematics and Computer Science."
    // }
  ];

  return (
    <section id="education" className="py-24 bg-[#fcfdf8]">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#a4ac86] uppercase tracking-[4px] font-bold text-xs mb-3 block">
            Learning Journey
          </span>
          <h2 className="text-5xl font-black text-black mb-6 tracking-tighter">Education</h2>
          <div className="w-20 h-1 bg-[#a4ac86] mx-auto"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Left Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4 text-[#a4ac86]">
                    <GraduationCap size={24} />
                    <span className="font-bold uppercase tracking-widest text-xs">{edu.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-black mb-2 group-hover:text-[#a4ac86] transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-lg font-bold text-gray-700 mb-4">{edu.institute}</p>
                  
                  <p className="text-gray-400 leading-relaxed max-w-2xl">
                    {edu.description}
                  </p>
                </div>

                {/* Right Info (Location) */}
                <div className="flex items-center gap-2 text-gray-400 bg-gray-50 px-4 py-2 rounded-full self-start md:self-center">
                  <MapPin size={16} />
                  <span className="text-sm font-bold uppercase tracking-wider">{edu.location}</span>
                </div>

              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#f4f5f0] opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full z-0" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;