// import React from 'react';
// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail, ArrowUpRight, Heart } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: <Github size={20} />, href: "https://github.com", label: "Github" },
//     { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
//     { icon: <Mail size={20} />, href: "mailto:contact@manav.dev", label: "Email" },
//   ];

//   return (
//     <footer className="relative w-full pt-20 pb-10 px-6 overflow-hidden bg-transparent border-t border-white/5">
//       {/* Background Glow Effect */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
//           {/* Left Side: Call to Action */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
//               LET'S BUILD <br /> 
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
//                 TOGETHER.
//               </span>
//             </h2>
//             <p className="text-gray-400 text-lg max-w-md mb-8 font-medium italic">
//               હાલમાં હું ફ્રીલાન્સ પ્રોજેક્ટ્સ અને નવી તકો માટે ઉપલબ્ધ છું. જો તમારી પાસે કોઈ વિચાર હોય, તો ચાલો તેને હકીકત બનાવીએ.
//             </p>
//             <motion.a 
//               href="mailto:hello@manav.dev"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 group"
//             >
//               Get In Touch 
//               <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
//             </motion.a>
//           </motion.div>

//           {/* Right Side: Info & Socials */}
//           <div className="flex flex-col md:items-end justify-between">
//             <div className="flex gap-4 mb-8 md:mb-0">
//               {socialLinks.map((link, i) => (
//                 <motion.a
//                   key={i}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ y: -5, color: "#60a5fa" }}
//                   className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 backdrop-blur-md transition-colors"
//                   aria-label={link.label}
//                 >
//                   {link.icon}
//                 </motion.a>
//               ))}
//             </div>

//             <div className="text-left md:text-right">
//               <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mb-2">Location</p>
//               <p className="text-xl font-bold">Jamnagar, Gujarat, India</p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="flex items-center gap-2 text-gray-500 font-medium">
//             <span>Made with</span>
//             <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
//             <span>by Manav Vishwas</span>
//           </div>

//           <div className="flex gap-8 text-gray-500 text-sm font-mono tracking-tighter">
//             <span>© {currentYear} ALL RIGHTS RESERVED</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: <Facebook size={20} />, url: "#" },
//     { icon: <Twitter size={20} />, url: "#" },
//     { icon: <Instagram size={20} />, url: "#" },
//     { icon: <Linkedin size={20} />, url: "#" },
//   ];

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Education", href: "#education" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <footer className="bg-[#f8f9f5] pt-20 pb-10">
//       <div className="container mx-auto px-6 max-w-6xl">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
//           {/* Brand Section */}
//           <div className="space-y-6">
//             <h2 className="text-2xl font-black text-black tracking-tighter uppercase">
//               Clyde<span className="text-[#a4ac86]">.</span>
//             </h2>
//             <p className="text-gray-400 leading-relaxed text-sm">
//               A small river named Duden flows by their place and supplies it with the necessary regelalia.
//             </p>
//             <div className="flex gap-4">
//               {socialLinks.map((social, index) => (
//                 <a 
//                   key={index} 
//                   href={social.url}
//                   className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#a4ac86] hover:text-white transition-all duration-300 shadow-sm"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links Section */}
//           <div className="md:ml-auto">
//             <h4 className="text-black font-black uppercase tracking-widest text-sm mb-8">
//               Quick Links
//             </h4>
//             <ul className="space-y-4">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <a 
//                     href={link.href} 
//                     className="text-gray-400 hover:text-[#a4ac86] transition-colors font-medium text-sm flex items-center gap-2 group"
//                   >
//                     <span className="w-0 h-[1px] bg-[#a4ac86] group-hover:w-3 transition-all"></span>
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info Summary */}
//           <div className="md:ml-auto">
//             <h4 className="text-black font-black uppercase tracking-widest text-sm mb-8">
//               Have a Question?
//             </h4>
//             <div className="space-y-4 text-sm font-medium">
//               <p className="flex items-start gap-4 text-gray-400">
//                 <span className="text-black">Address:</span> Ahmedabad, Gujarat, India
//               </p>
//               <p className="flex items-center gap-4 text-gray-400">
//                 <span className="text-black">Phone:</span> +91 93286 49313
//               </p>
//               <p className="flex items-center gap-4 text-gray-400">
//                 <span className="text-black">Email:</span> shashankpatel9998@gmail.com
//               </p>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Copyright Section */}
//         <div className="border-t border-gray-200 pt-10 text-center">
//           <p className="text-gray-400 text-sm flex items-center justify-center gap-1 flex-wrap">
//             Copyright © {currentYear} All rights reserved | This template is made with 
//             <Heart size={14} className="text-[#a4ac86] fill-[#a4ac86]" /> by 
//             <a href="#" className="text-black font-bold hover:text-[#a4ac86] transition-colors">
//               Shashank Patel
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={18} />, url: "#" },
    { icon: <Twitter size={18} />, url: "#" },
    { icon: <Instagram size={18} />, url: "#" },
    { icon: <Linkedin size={18} />, url: "#" },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#1a1a1a] pt-24 pb-12 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Bio (4 Columns) */}
          <div className="md:col-span-5 space-y-8">
            <h2 className="text-3xl font-black tracking-tighter uppercase italic">
              Shashank<span className="text-[#a4ac86]">Patel</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-[15px] max-w-sm">
              Building seamless digital experiences in Ahmedabad. Combining creative design with solid engineering to turn complex problems into elegant solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a 
                  whileHover={{ y: -5, backgroundColor: "#a4ac86" }}
                  key={index} 
                  href={social.url}
                  className="w-11 h-11 rounded-xl bg-[#262626] flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 border border-white/5"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links (3 Columns) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-[2px] text-xs mb-8 opacity-50">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#a4ac86] transition-all font-medium text-[15px] flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a4ac86] opacity-0 group-hover:opacity-100 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (4 Columns) */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-[2px] text-xs mb-8 opacity-50">
              Get in Touch
            </h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-lg bg-[#262626] flex items-center justify-center text-[#a4ac86] group-hover:bg-[#a4ac86] group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <span className="text-[15px]">Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-lg bg-[#262626] flex items-center justify-center text-[#a4ac86] group-hover:bg-[#a4ac86] group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-[15px]">+91 93286 49313</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-lg bg-[#262626] flex items-center justify-center text-[#a4ac86] group-hover:bg-[#a4ac86] group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-[15px]">shashankpatel9998@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Final Copyright Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by 
            <span className="text-white font-bold ml-1">Shashank Patel</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;