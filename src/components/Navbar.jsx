// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   // સ્ક્રોલ વખતે બેકગ્રાઉન્ડ ચેન્જ કરવા માટે
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const navLinks = [
// //     { name: 'Home', path: '/' },
// //     { name: 'About', path: '#about' },
// //     { name: 'Skills', path: '#skills' },
// //     { name: 'Education', path: '#education' },
// //     { name: 'Projects', path: '#projects' },
// //   ];

// //   return (
// //     <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
// //       scrolled ? 'py-4 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
// //     }`}>
// //       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

// //         {/* Logo */}
// //         <Link to="/" className="text-2xl font-black tracking-tighter group">
// //           MV<span className="text-blue-500 group-hover:animate-pulse">.</span>
// //         </Link>

// //         {/* Desktop Menu */}
// //         <div className="hidden md:flex items-center gap-10">
// //           <div className="flex gap-8 text-sm font-medium text-gray-400">
// //             {navLinks.map((link) => (
// //               <Link 
// //                 key={link.name} 
// //                 to={link.path} 
// //                 className="hover:text-white transition-colors relative group"
// //               >
// //                 {link.name}
// //                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
// //               </Link>
// //             ))}
// //           </div>

// //           {/* Social Icons */}
// //           <div className="flex items-center gap-5 border-l border-white/10 pl-8 text-gray-400">
// //             <a href="#" className="hover:text-white transition"><Github size={18} /></a>
// //             <a href="#" className="hover:text-white transition"><Linkedin size={18} /></a>
// //           </div>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <button 
// //           className="md:hidden text-white p-2"
// //           onClick={() => setIsOpen(!isOpen)}
// //         >
// //           {isOpen ? <X size={28} /> : <Menu size={28} />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu Overlay */}
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div 
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             className="fixed inset-0 top-[72px] bg-[#030712] z-[90] flex flex-col p-8 md:hidden"
// //           >
// //             <div className="flex flex-col gap-6 text-4xl font-bold italic">
// //               {navLinks.map((link, i) => (
// //                 <motion.div
// //                   key={link.name}
// //                   initial={{ opacity: 0, x: -20 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ delay: i * 0.1 }}
// //                 >
// //                   <Link 
// //                     to={link.path} 
// //                     onClick={() => setIsOpen(false)}
// //                     className="hover:text-blue-500 transition-colors"
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             <div className="mt-auto pt-10 border-t border-white/10 flex gap-6 text-gray-400">
// //                <Github size={24} />
// //                <Linkedin size={24} />
// //                <Twitter size={24} />
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, Github, Linkedin, Download } from 'lucide-react';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const navLinks = [
//         { name: 'Home', path: '/' },
//         { name: 'About', path: '#about' },
//         { name: 'Skills', path: '#skills' },
//         { name: 'Education', path: '#education' },
//         { name: 'Projects', path: '#projects' },
//     ];

//     return (
//         <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
//             }`}>
//             <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

//                 {/* Logo */}
//                 {/* Logo */}
//                 <Link to="/" className="text-2xl font-black tracking-tight group">
//                     <span className="text-white">Shashank</span>
//                     <span className="text-blue-500 ml-1">Patel</span>
//                 </Link>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex items-center gap-8">
//                     <div className="flex gap-8 text-sm font-medium text-gray-400">
//                         {navLinks.map((link) => (
//                             <a
//                                 key={link.name}
//                                 href={link.path}
//                                 className="hover:text-white transition-colors relative group"
//                             >
//                                 {link.name}
//                                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
//                             </a>
//                         ))}
//                     </div>

//                     <div className="flex items-center gap-6 border-l border-white/10 pl-8">
//                         {/* Social Icons */}
//                         <div className="flex gap-4 text-gray-400">
//                             <a href="#" className="hover:text-white transition-transform hover:-translate-y-1"><Github size={20} /></a>
//                             <a href="#" className="hover:text-white transition-transform hover:-translate-y-1"><Linkedin size={20} /></a>
//                         </div>

//                         {/* Download CV Button */}
//                         <motion.a
//                             href="/resume.pdf" // તમારી PDF ફાઇલનું નામ અહીં લખો
//                             download="Manav_Vishwas_CV.pdf"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all"
//                         >
//                             <Download size={16} />
//                             <span>CV</span>
//                         </motion.a>
//                     </div>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button
//                     className="md:hidden text-white p-2"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>

//             {/* Mobile Menu Overlay */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: '100vh' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="fixed inset-0 top-0 bg-[#030712] z-[90] flex flex-col p-8 md:hidden overflow-hidden"
//                     >
//                         <div className="flex justify-between items-center mb-12">
//                             <span className="text-xl font-bold">Menu</span>
//                             <X size={28} onClick={() => setIsOpen(false)} />
//                         </div>

//                         <div className="flex flex-col gap-8 text-5xl font-black italic">
//                             {navLinks.map((link, i) => (
//                                 <motion.a
//                                     key={link.name}
//                                     href={link.path}
//                                     initial={{ x: -20, opacity: 0 }}
//                                     animate={{ x: 0, opacity: 1 }}
//                                     transition={{ delay: i * 0.1 }}
//                                     onClick={() => setIsOpen(false)}
//                                     className="hover:text-blue-500 transition-colors"
//                                 >
//                                     {link.name}
//                                 </motion.a>
//                             ))}
//                         </div>

//                         <div className="mt-auto pb-10">
//                             <motion.a
//                                 href="/resume.pdf"
//                                 download
//                                 className="flex items-center justify-center gap-3 bg-white text-black w-full py-5 rounded-2xl text-xl font-bold"
//                             >
//                                 <Download size={24} />
//                                 Download CV
//                             </motion.a>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </nav>
//     );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, Github, Linkedin, Download } from 'lucide-react';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const navLinks = [
//         { name: 'Home', path: '/' },
//         { name: 'About', path: '#about' },
//         { name: 'Skills', path: '#skills' },
//         { name: 'Education', path: '#education' },
//         { name: 'Projects', path: '#projects' },
//         { name: 'Contact', path: '#contact' },
//     ];

//     return (
//         <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
//             scrolled 
//             ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' 
//             : 'py-6 bg-transparent'
//         }`}>
//             <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

//                 {/* Logo - Template Style */}
//                 <Link to="/" className="text-2xl font-black tracking-tighter flex items-center group">
//                     <span className="text-black uppercase">Shashank</span>&nbsp;
//                     <span className="text-[#82905b] font-black">Patel</span>
//                 </Link>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex items-center gap-10">
//                     <div className="flex gap-8 text-[13px] uppercase tracking-[2px] font-bold text-gray-800">
//                         {navLinks.map((link) => (
//                             <a
//                                 key={link.name}
//                                 href={link.path}
//                                 className="hover:text-[#82905b] transition-colors relative group"
//                             >
//                                 {link.name}
//                                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#82905b] transition-all group-hover:w-full" />
//                             </a>
//                         ))}
//                     </div>

//                     <div className="flex items-center gap-6 border-l border-gray-200 pl-8">
//                         {/* Social Icons */}
//                         <div className="flex gap-4 text-gray-500">
//                             <a href="https://github.com/Shashank9998/" className="hover:text-[#82905b] transition-transform hover:-translate-y-1"><Github size={18} /></a>
//                             <a href="https://www.linkedin.com/in/shashankkumar-patel-63a333245/" className="hover:text-[#82905b] transition-transform hover:-translate-y-1"><Linkedin size={18} /></a>
//                         </div>

//                         {/* Download CV Button - Template Theme Color */}
//                         <motion.a
//                             href="/resume.pdf"
//                             download="Manav_CV.pdf"
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                             className="flex items-center gap-2 bg-[#82905b] text-white px-6 py-2.5 rounded-full text-[12px] uppercase tracking-widest font-black shadow-lg hover:shadow-[#82905b]/30 transition-all"
//                         >
//                             <Download size={14} />
//                             <span>Download CV</span>
//                         </motion.a>
//                     </div>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button
//                     className="md:hidden text-black p-2"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>

//             {/* Mobile Menu Overlay - Clean Light Style */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, x: '100%' }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: '100%' }}
//                         transition={{ type: "spring", damping: 25, stiffness: 200 }}
//                         className="fixed inset-0 bg-white z-[90] flex flex-col p-8 md:hidden"
//                     >
//                         <div className="flex justify-between items-center mb-16">
//                             <span className="text-xl font-black uppercase tracking-widest text-[#82905b]">Menu</span>
//                             <button onClick={() => setIsOpen(false)} className="text-black">
//                                 <X size={32} />
//                             </button>
//                         </div>

//                         <div className="flex flex-col gap-6">
//                             {navLinks.map((link, i) => (
//                                 <motion.a
//                                     key={link.name}
//                                     href={link.path}
//                                     initial={{ x: 20, opacity: 0 }}
//                                     animate={{ x: 0, opacity: 1 }}
//                                     transition={{ delay: i * 0.1 }}
//                                     onClick={() => setIsOpen(false)}
//                                     className="text-4xl font-black uppercase tracking-tighter text-black hover:text-[#82905b] transition-colors"
//                                 >
//                                     {link.name}
//                                 </motion.a>
//                             ))}
//                         </div>

//                         <div className="mt-auto">
//                             <motion.a
//                                 href="/resume.pdf"
//                                 download
//                                 className="flex items-center justify-center gap-3 bg-black text-white w-full py-5 rounded-xl text-lg font-bold uppercase tracking-widest"
//                             >
//                                 <Download size={20} />
//                                 Resume
//                             </motion.a>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Education', id: 'education' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (id) => {

        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    };

    return (

        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled
            ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'py-6 bg-transparent'
            }`}>

            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo */}

                <Link to="/" className="text-2xl font-black tracking-tighter flex items-center group">

                    <span className="text-black uppercase">
                        Shashank
                    </span>

                    {/* &nbsp; */}

                    <span className="text-[#82905b] font-black">
                        Patel
                    </span>

                </Link>

                {/* Desktop Menu */}

                <div className="hidden md:flex items-center gap-10">

                    <div className="flex gap-8 text-[15px] uppercase tracking-[2px] font-extrabold text-gray-800">

                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className="hover:text-[#82905b] transition-colors relative group"

                            >

                                {link.name}

                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#82905b] transition-all group-hover:w-full" />

                            </button>
                        ))}

                    </div>

                    <div className="flex items-center gap-6 border-l border-gray-200 pl-8">

                        {/* Social Icons */}

                        <div className="flex gap-4 text-gray-500">

                            <a
                                href="https://github.com/Shashank9998/"
                                className="hover:text-[#82905b] transition-transform hover:-translate-y-1"

                            >

                                <Github size={18} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/shashankkumar-patel-63a333245/"
                                className="hover:text-[#82905b] transition-transform hover:-translate-y-1"

                            >

                                <Linkedin size={18} />
                            </a>

                        </div>

                        {/* Download CV */}

                        <motion.a
                            href="/resume.pdf"
                            download="Shashank_Patel_CV.pdf"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 bg-[#82905b] text-white px-6 py-2.5 rounded-full text-[12px] uppercase tracking-widest font-black shadow-lg hover:shadow-[#82905b]/30 transition-all"

                        >

                            <Download size={14} />
                            <span>Download CV</span>

                        </motion.a>

                    </div>

                </div>

                {/* Mobile Menu Button */}

                <button
                    className="md:hidden text-black p-2"
                    onClick={() => setIsOpen(!isOpen)}

                >

                    {isOpen ? <X size={28} /> : <Menu size={28} />}

                </button>

            </div>

            {/* Mobile Menu */}

            <AnimatePresence>

                {isOpen && (

                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-[90] flex flex-col p-8 md:hidden"

                    >

                        <div className="flex justify-between items-center mb-16">

                            <span className="text-xl font-black uppercase tracking-widest text-[#82905b]">
                                Menu
                            </span>

                            <button onClick={() => setIsOpen(false)}> <X size={32} /> </button>

                        </div>

                        <div className="flex flex-col gap-6">

                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => {
                                        scrollToSection(link.id);
                                        setIsOpen(false);
                                    }}
                                    className="text-5xl font-black uppercase tracking-tight text-black hover:text-[#82905b]"
                                >

                                    {link.name}

                                </motion.button>
                            ))}

                        </div>

                        <div className="mt-auto">

                            <motion.a
                                href="/resume.pdf"
                                download
                                className="flex items-center justify-center gap-3 bg-black text-white w-full py-5 rounded-xl text-lg font-bold uppercase tracking-widest"

                            >

                                <Download size={20} />
                                Resume

                            </motion.a>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </nav>

    );

};

export default Navbar;
