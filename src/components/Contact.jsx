// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Phone, Send, Globe } from 'lucide-react';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     });

//     const [errors, setErrors] = useState({});

//     const validate = () => {
//         let tempErrors = {};
//         if (!formData.name) tempErrors.name = "Name is required";
//         if (!formData.email) {
//             tempErrors.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             tempErrors.email = "Email is invalid";
//         }
//         if (!formData.subject) tempErrors.subject = "Subject is required";
//         if (!formData.message) tempErrors.message = "Message cannot be empty";

//         setErrors(tempErrors);
//         return Object.keys(tempErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             console.log("Form Submitted:", formData);
//             alert("Message sent successfully!");
//             setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
//         }
//     };

//     const contactInfo = [
//         { icon: <MapPin size={20} />, label: "Address:", value: "Ahmedabad, Gujarat, India 382330" },
//         { icon: <Phone size={20} />, label: "Phone:", value: "+91-9328649313" },
//         { icon: <Send size={20} />, label: "Email:", value: "shashankpatel9998@gmail.com" },
//         { icon: <Globe size={20} />, label: "Website:", value: "yourwebsite.com" },
//     ];

//     return (
//         <section id="contact" className="py-24 bg-white">
//             <div className="container mx-auto px-6 max-w-6xl">

//                 {/* Section Header */}
//                 <div className="text-center mb-20">
//                     <span className="text-[#a4ac86] uppercase tracking-[4px] font-bold text-xs mb-3 block">
//                         Contact Us
//                     </span>
//                     <h2 className="text-5xl font-black text-black mb-6 tracking-tighter">Have a Project?</h2>
//                     <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
//                         I am available for new projects and collaborations. Feel free to reach out for a consultation or just to say hi.
//                     </p>
//                 </div>

//                 <div className="flex flex-col lg:flex-row gap-16 items-start">

//                     {/* Contact Form */}
//                     {/* <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="w-full lg:w-7/12 bg-[#f8f9f5] p-8 md:p-12 rounded-lg"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-1">
//                   <input 
//                     type="text" 
//                     placeholder="Your Name"
//                     className={`w-full p-4 bg-white border ${errors.name ? 'border-red-400' : 'border-gray-100'} outline-none focus:border-[#a4ac86] transition-all rounded-sm`}
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   />
//                   {errors.name && <span className="text-red-500 text-xs font-bold uppercase">{errors.name}</span>}
//                 </div>
//                 <div className="space-y-1">
//                   <input 
//                     type="email" 
//                     placeholder="Your Email"
//                     className={`w-full p-4 bg-white border ${errors.email ? 'border-red-400' : 'border-gray-100'} outline-none focus:border-[#a4ac86] transition-all rounded-sm`}
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   />
//                   {errors.email && <span className="text-red-500 text-xs font-bold uppercase">{errors.email}</span>}
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <input 
//                   type="text" 
//                   placeholder="Subject"
//                   className={`w-full p-4 bg-white border ${errors.subject ? 'border-red-400' : 'border-gray-100'} outline-none focus:border-[#a4ac86] transition-all rounded-sm`}
//                   value={formData.subject}
//                   onChange={(e) => setFormData({...formData, subject: e.target.value})}
//                 />
//                 {errors.subject && <span className="text-red-500 text-xs font-bold uppercase">{errors.subject}</span>}
//               </div>

//               <div className="space-y-1">
//                 <textarea 
//                   placeholder="Message"
//                   rows="6"
//                   className={`w-full p-4 bg-white border ${errors.message ? 'border-red-400' : 'border-gray-100'} outline-none focus:border-[#a4ac86] transition-all rounded-sm resize-none`}
//                   value={formData.message}
//                   onChange={(e) => setFormData({...formData, message: e.target.value})}
//                 ></textarea>
//                 {errors.message && <span className="text-red-500 text-xs font-bold uppercase">{errors.message}</span>}
//               </div>

//               <button 
//                 type="submit"
//                 className="bg-[#a4ac86] text-white font-bold uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-[#8e976f] transition-all shadow-lg shadow-[#a4ac86]/20"
//               >
//                 Send Message
//               </button>
//             </form>
//           </motion.div> */}

//                     {/* Contact Form Container - exact border color from screen */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         className="w-full lg:w-7/12 bg-white p-8 md:p-12 rounded-lg border border-gray-200/60 shadow-lg shadow-gray-500/5"
//                     >
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                                 {/* Name Input */}
//                                 <div className="space-y-1">
//                                     <input
//                                         type="text"
//                                         placeholder="Your Name"
//                                         className={`w-full p-4 bg-white border ${errors.name ? 'border-red-300' : 'border-gray-200'} outline-none focus:border-[#a4ac86] focus:ring-1 focus:ring-[#a4ac86]/20 transition-all rounded-sm text-gray-800 placeholder:text-gray-300`}
//                                         value={formData.name}
//                                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                     />
//                                     {errors.name && <span className="text-red-500 text-xs font-bold uppercase tracking-wider">{errors.name}</span>}
//                                 </div>

//                                 {/* Email Input */}
//                                 <div className="space-y-1">
//                                     <input
//                                         type="email"
//                                         placeholder="Your Email"
//                                         className={`w-full p-4 bg-white border ${errors.email ? 'border-red-300' : 'border-gray-200'} outline-none focus:border-[#a4ac86] focus:ring-1 focus:ring-[#a4ac86]/20 transition-all rounded-sm text-gray-800 placeholder:text-gray-300`}
//                                         value={formData.email}
//                                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                     />
//                                     {errors.email && <span className="text-red-500 text-xs font-bold uppercase tracking-wider">{errors.email}</span>}
//                                 </div>
//                             </div>

//                             {/* Subject Input */}
//                             <div className="space-y-1">
//                                 <input
//                                     type="text"
//                                     placeholder="Subject"
//                                     className={`w-full p-4 bg-white border ${errors.subject ? 'border-red-300' : 'border-gray-200'} outline-none focus:border-[#a4ac86] focus:ring-1 focus:ring-[#a4ac86]/20 transition-all rounded-sm text-gray-800 placeholder:text-gray-300`}
//                                     value={formData.subject}
//                                     onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                                 />
//                                 {errors.subject && <span className="text-red-500 text-xs font-bold uppercase tracking-wider">{errors.subject}</span>}
//                             </div>

//                             {/* Message Input */}
//                             <div className="space-y-1">
//                                 <textarea
//                                     placeholder="Message"
//                                     rows="6"
//                                     className={`w-full p-4 bg-white border ${errors.message ? 'border-red-300' : 'border-gray-200'} outline-none focus:border-[#a4ac86] focus:ring-1 focus:ring-[#a4ac86]/20 transition-all rounded-sm resize-none text-gray-800 placeholder:text-gray-300`}
//                                     value={formData.message}
//                                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                 ></textarea>
//                                 {errors.message && <span className="text-red-500 text-xs font-bold uppercase tracking-wider">{errors.message}</span>}
//                             </div>

//                             {/* Submit Button */}
//                             <button
//                                 type="submit"
//                                 className="bg-[#a4ac86] text-white font-black uppercase tracking-widest px-12 py-4 rounded-sm hover:bg-[#8e976f] transition-all shadow-md shadow-[#a4ac86]/30 active:scale-[0.98]"
//                             >
//                                 Send Message
//                             </button>
//                         </form>
//                     </motion.div>

//                     {/* Contact Details */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         className="w-full lg:w-5/12 space-y-10"
//                     >
//                         {contactInfo.map((info, index) => (
//                             <div key={index} className="flex items-start gap-6 group">
//                                 <div className="w-14 h-14 rounded-full bg-[#f8f9f5] flex items-center justify-center text-[#a4ac86] group-hover:bg-[#a4ac86] group-hover:text-white transition-all duration-300">
//                                     {info.icon}
//                                 </div>
//                                 <div>
//                                     <h4 className="text-black font-black text-lg mb-1">{info.label}</h4>
//                                     <p className="text-gray-400 font-medium">{info.value}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </motion.div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Phone, Send, Globe, ArrowRight } from 'lucide-react';

// const Contact = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
//     const [errors, setErrors] = useState({});

//     const validate = () => {
//         let tempErrors = {};
//         if (!formData.name) tempErrors.name = "Name is required";
//         if (!formData.email) {
//             tempErrors.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             tempErrors.email = "Invalid email format";
//         }
//         if (!formData.subject) tempErrors.subject = "Subject is required";
//         if (!formData.message) tempErrors.message = "Message is required";
//         setErrors(tempErrors);
//         return Object.keys(tempErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             alert("Message sent successfully!");
//             setFormData({ name: '', email: '', subject: '', message: '' });
//         }
//     };

//     return (
//         <section id="contact" className="py-24 bg-white">
//             <div className="container mx-auto px-6 max-w-6xl">

//                 {/* Header Section */}
//                 <div className="text-center mb-16">
//                     <motion.span
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         className="text-[#a4ac86] uppercase tracking-[6px] font-bold text-xs mb-3 block"
//                     >
//                         Get In Touch
//                     </motion.span>
//                     <motion.h2
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.1 }}
//                         className="text-6xl font-black text-black mb-6 tracking-tighter"
//                     >
//                         Let's Talk.
//                     </motion.h2>
//                     <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
//                         I am available for new projects and collaborations. Feel free to reach out for a consultation or just to say hi.
//                     </p>
//                 </div>

//                 <div className="flex flex-col lg:flex-row gap-16">

//                     {/* Enhanced Form Card */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         className="w-full lg:w-7/12 bg-white p-10 md:p-14 rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden"
//                     >
//                         {/* Background Decorative Blob */}
//                         <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#a4ac86]/5 rounded-full blur-3xl" />

//                         <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                                 {/* Name field with bottom border focus */}
//                                 <div className="relative group">
//                                     <input
//                                         type="text"
//                                         placeholder="Full Name"
//                                         className="w-full py-3 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#a4ac86] transition-all duration-300 text-gray-800 placeholder:text-gray-300 font-medium"
//                                         value={formData.name}
//                                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                     />
//                                     <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a4ac86] group-focus-within:w-full transition-all duration-500" />
//                                     {errors.name && <span className="text-red-400 text-[10px] font-bold uppercase mt-1 block">{errors.name}</span>}
//                                 </div>

//                                 {/* Email field */}
//                                 <div className="relative group">
//                                     <input
//                                         type="email"
//                                         placeholder="Email Address"
//                                         className="w-full py-3 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#a4ac86] transition-all duration-300 text-gray-800 placeholder:text-gray-300 font-medium"
//                                         value={formData.email}
//                                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                     />
//                                     <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a4ac86] group-focus-within:w-full transition-all duration-500" />
//                                     {errors.email && <span className="text-red-400 text-[10px] font-bold uppercase mt-1 block">{errors.email}</span>}
//                                 </div>
//                             </div>

//                             {/* Subject field */}
//                             <div className="relative group">
//                                 <input
//                                     type="text"
//                                     placeholder="Subject"
//                                     className="w-full py-3 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#a4ac86] transition-all duration-300 text-gray-800 placeholder:text-gray-300 font-medium"
//                                     value={formData.subject}
//                                     onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                                 />
//                                 <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a4ac86] group-focus-within:w-full transition-all duration-500" />
//                             </div>

//                             {/* Message field */}
//                             <div className="relative group">
//                                 <textarea
//                                     placeholder="Tell me about your project..."
//                                     rows="4"
//                                     className="w-full py-3 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#a4ac86] transition-all duration-300 text-gray-800 placeholder:text-gray-300 font-medium resize-none"
//                                     value={formData.message}
//                                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                 ></textarea>
//                                 <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a4ac86] group-focus-within:w-full transition-all duration-500" />
//                             </div>

//                             {/* Modern Animated Button */}
//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 type="submit"
//                                 className="group flex items-center gap-3 bg-[#a4ac86] text-white font-black uppercase tracking-[2px] px-10 py-5 rounded-sm transition-all duration-300 shadow-lg shadow-[#a4ac86]/20"
//                             >
//                                 Send Message
//                                 <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
//                             </motion.button>
//                         </form>
//                     </motion.div>

//                     {/* Contact Details (Minimalist) */}
//                     <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-12 pl-0 lg:pl-10">
//                         {[
//                             { icon: <MapPin />, label: "Location", val: "Ahmedabad, India" },
//                             { icon: <Phone />, label: "Phone", val: "+91 93286 49313" },
//                             { icon: <Send />, label: "Email", val: "shashankpatel9998@gmail.com" }
//                         ].map((item, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, x: 20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: i * 0.1 }}
//                                 className="flex items-center gap-6"
//                             >
//                                 <div className="w-14 h-14 bg-[#f8f9f5] rounded-2xl flex items-center justify-center text-[#a4ac86]">
//                                     {item.icon}
//                                 </div>
//                                 <div>
//                                     <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-1">{item.label}</p>
//                                     <p className="text-xl font-bold text-black">{item.val}</p>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;




// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Send, ArrowRight } from "lucide-react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const validate = () => {
//     let tempErrors = {};

//     if (!formData.name) tempErrors.name = "Name is required";

//     if (!formData.email) {
//       tempErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       tempErrors.email = "Invalid email format";
//     }

//     if (!formData.subject) tempErrors.subject = "Subject is required";

//     if (!formData.message) tempErrors.message = "Message is required";

//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setLoading(true);

//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       subject: formData.subject,
//       message: formData.message
//     };

//     emailjs
//       .send(
//         "service_831gb9p",
//         "template_8w02dvu",
//         templateParams,
//         "ZlM4WPlOn2nAmTmbj"
//       )
//       .then(() => {

//         alert("Message sent successfully!");

//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: ""
//         });

//         setLoading(false);

//       })
//       .catch((error) => {

//         console.error("Email error:", error);
//         alert("Failed to send message");
//         setLoading(false);

//       });
//   };

//   return (

//     <section id="contact" className="py-24 bg-white">

//       <div className="container mx-auto px-6 max-w-6xl">

//         {/* Header */}
//         <div className="text-center mb-16">

//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-[#a4ac86] uppercase tracking-[6px] font-bold text-xs mb-3 block"
//           >
//             Get In Touch
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-6xl font-black text-black mb-6 tracking-tighter"
//           >
//             Let's Talk.
//           </motion.h2>

//           <p className="text-gray-400 max-w-2xl mx-auto">
//             I am available for new projects and collaborations.
//           </p>

//         </div>

//         <div className="flex flex-col lg:flex-row gap-16">

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="w-full lg:w-7/12 bg-white p-10 rounded-3xl border border-gray-100 shadow-xl"
//           >

//             <form onSubmit={handleSubmit} className="space-y-8">

//               <div className="grid md:grid-cols-2 gap-8">

//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     className="w-full border-b-2 py-3 outline-none"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                   />
//                   {errors.name && (
//                     <p className="text-red-400 text-sm">{errors.name}</p>
//                   )}
//                 </div>

//                 <div>
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="w-full border-b-2 py-3 outline-none"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                   />
//                   {errors.email && (
//                     <p className="text-red-400 text-sm">{errors.email}</p>
//                   )}
//                 </div>

//               </div>

//               <div>
//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className="w-full border-b-2 py-3 outline-none"
//                   value={formData.subject}
//                   onChange={(e) =>
//                     setFormData({ ...formData, subject: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <textarea
//                   placeholder="Message"
//                   rows="4"
//                   className="w-full border-b-2 py-3 outline-none"
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                 />
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 disabled={loading}
//                 className="flex items-center gap-3 bg-[#a4ac86] text-white font-bold px-8 py-4 rounded"
//               >
//                 {loading ? "Sending..." : "Send Message"}
//                 <ArrowRight size={18} />
//               </motion.button>

//             </form>

//           </motion.div>

//           {/* Contact Info */}

//           <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-10">

//             {[
//               { icon: <MapPin />, label: "Location", val: "Ahmedabad, India" },
//               { icon: <Phone />, label: "Phone", val: "+91 9328649313" },
//               { icon: <Send />, label: "Email", val: "shashankpatel9998@gmail.com" }
//             ].map((item, i) => (

//               <div key={i} className="flex items-center gap-6">

//                 <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-[#a4ac86]">
//                   {item.icon}
//                 </div>

//                 <div>
//                   <p className="text-xs uppercase text-gray-400">
//                     {item.label}
//                   </p>
//                   <p className="text-lg font-bold">{item.val}</p>
//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Contact;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Send, ArrowRight } from "lucide-react";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";

// const Contact = () => {

// const [formData, setFormData] = useState({
// name:"",
// email:"",
// subject:"",
// message:""
// });

// const [errors,setErrors]=useState({});
// const [loading,setLoading]=useState(false);
// const [success,setSuccess]=useState(false);

// const validate=()=>{
// let tempErrors={};

// if(!formData.name) tempErrors.name="Name required";

// if(!formData.email){
// tempErrors.email="Email required";
// }
// else if(!/\S+@\S+\.\S+/.test(formData.email)){
// tempErrors.email="Invalid email";
// }

// if(!formData.subject) tempErrors.subject="Subject required";
// if(!formData.message) tempErrors.message="Message required";

// setErrors(tempErrors);
// return Object.keys(tempErrors).length===0;
// };

// const handleSubmit=(e)=>{

// e.preventDefault();

// if(!validate()) return;

// setLoading(true);

// const templateParams={
// name:formData.name,
// email:formData.email,
// subject:formData.subject,
// message:formData.message
// };

// emailjs.send(
// "service_g8rpllo",
// "template_akb4mky",
// templateParams,
// "ZlM4WPlOn2nAmTmbj"
// )

// .then(()=>{

// setSuccess(true);

// toast.success("Message sent successfully!");

// setFormData({
// name:"",
// email:"",
// subject:"",
// message:""
// });

// setLoading(false);

// })

// .catch((error)=>{

// console.log(error);

// toast.error("Failed to send message");

// setLoading(false);

// });

// };

// return(

// <section id="contact" className="py-24 bg-white">

// <Toaster position="top-right"/>

// <div className="container mx-auto px-6 max-w-6xl">

// <div className="text-center mb-16">

// <h2 className="text-5xl font-bold mb-4">
// Let's Talk
// </h2>

// <p className="text-gray-400">
// Send me a message for collaboration
// </p>

// </div>

// <div className="flex flex-col lg:flex-row gap-16">

// {/* FORM */}

// <div className="w-full lg:w-7/12">

// <form onSubmit={handleSubmit} className="space-y-6">

// <input
// type="text"
// placeholder="Name"
// className="w-full border-b p-3"
// value={formData.name}
// onChange={(e)=>setFormData({...formData,name:e.target.value})}
// />

// <input
// type="email"
// placeholder="Email"
// className="w-full border-b p-3"
// value={formData.email}
// onChange={(e)=>setFormData({...formData,email:e.target.value})}
// />

// <input
// type="text"
// placeholder="Subject"
// className="w-full border-b p-3"
// value={formData.subject}
// onChange={(e)=>setFormData({...formData,subject:e.target.value})}
// />

// <textarea
// placeholder="Message"
// rows="4"
// className="w-full border-b p-3"
// value={formData.message}
// onChange={(e)=>setFormData({...formData,message:e.target.value})}
// />

// <motion.button
// whileHover={{scale:1.05}}
// whileTap={{scale:0.95}}
// type="submit"
// disabled={loading}
// className="bg-[#a4ac86] text-white px-8 py-4 flex items-center gap-2"
// >

// {loading?"Sending...":"Send Message"}
// <ArrowRight size={18}/>

// </motion.button>

// </form>

// {success && (

// <motion.div
// initial={{opacity:0}}
// animate={{opacity:1}}
// className="mt-6 text-green-600 font-semibold"
// >

// Message Sent Successfully 🎉

// </motion.div>

// )}

// </div>

// {/* CONTACT INFO */}

// <div className="space-y-8">

// <div className="flex gap-4 items-center">
// <MapPin/>
// <p>Ahmedabad, India</p>
// </div>

// <div className="flex gap-4 items-center">
// <Phone/>
// <p>+91 9328649313</p>
// </div>

// <div className="flex gap-4 items-center">
// <Send/>
// <p>shashankkumarpatel9977@gmail.com</p>
// </div>

// </div>

// </div>

// </div>

// </section>

// );

// };

// export default Contact;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Send, Globe, ArrowRight, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name required";
        if (!formData.email) {
            tempErrors.email = "Email required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Invalid email";
        }
        if (!formData.subject) tempErrors.subject = "Subject required";
        if (!formData.message) tempErrors.message = "Message required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs
            .send(
                "service_g8rpllo",
                "template_akb4mky",
                templateParams,
                "ZlM4WPlOn2nAmTmbj"
            )
            .then(() => {
                // Toastify Success Alert
                toast.success("Message sent successfully! 🎉", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    // Clyde થીમ મુજબનો ગ્રીન કલર સેટ કરવા માટે (Optional)
                    style: { backgroundColor: "#a4ac86" }
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                // Toastify Error Alert
                toast.error("Failed to send message. Please try again later.", {
                    position: "top-right",
                    theme: "colored",
                });
                setLoading(false);
            });
    };

    const contactInfo = [
        { icon: <MapPin />, label: "Location", val: "Ahmedabad, India" },
        { icon: <Phone />, label: "Phone", val: "+91 93286 49313" },
        { icon: <Send />, label: "Email", val: "shashankkumarpatel9977@gmail.com" },
        // { icon: <Globe />, label: "Website", val: "yourwebsite.com" },
    ];

    return (
        <section id="contact" className="py-24 bg-white">
            <Toaster position="top-right" />
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#a4ac86] uppercase tracking-[6px] font-bold text-xs mb-3 block"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl font-black text-black mb-6 tracking-tighter"
                    >
                        Let's Talk.
                    </motion.h2>
                    <p className="text-darkgray-600 max-w-2xl mx-auto">

                        I am available for new projects and collaborations. Feel free to reach out for a consultation or just to say hi.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Enhanced Form Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-full lg:w-7/12 bg-white p-10 md:p-14 rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden"
                    >
                        {/* Background Decorative Blob */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#a4ac86]/5 rounded-full blur-3xl" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Name field with floating label */}
                                <div className="relative group">
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#a4ac86] transition-all duration-300 text-gray-800 placeholder-transparent font-medium group"
                                        placeholder="Full Name"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#a4ac86 Peer-focus:text-sm"
                                    >
                                        Full Name
                                    </label>
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a4ac86] group-focus-within:w-full transition-all duration-500" />
                                    <AnimatePresence>
                                        {errors.name && (
                                            <motion.span
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="text-red-400 text-[10px] font-bold uppercase mt-1 block"
                                            >
                                                {errors.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Email field */}
                                <div className="relative group">
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="w-full py-3 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#a4ac86] transition-all duration-300 text-gray-800 placeholder-transparent font-medium group"
                                        placeholder="Email Address"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#a4ac86 Peer-focus:text-sm"
                                    >
                                        Email Address
                                    </label>
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a4ac86] group-focus-within:w-full transition-all duration-500" />
                                    <AnimatePresence>
                                        {errors.email && (
                                            <motion.span
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="text-red-400 text-[10px] font-bold uppercase mt-1 block"
                                            >
                                                {errors.email}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Subject field */}
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) =>
                                        setFormData({ ...formData, subject: e.target.value })
                                    }
                                    className="w-full py-3 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#a4ac86] transition-all duration-300 text-gray-800 placeholder-transparent font-medium group"
                                    placeholder="Subject"
                                />
                                <label
                                    htmlFor="subject"
                                    className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#a4ac86 Peer-focus:text-sm"
                                >
                                    Subject
                                </label>
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a4ac86] group-focus-within:w-full transition-all duration-500" />
                                <AnimatePresence>
                                    {errors.subject && (
                                        <motion.span
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-red-400 text-[10px] font-bold uppercase mt-1 block"
                                        >
                                            {errors.subject}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Message field */}
                            <div className="relative group">
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    rows="4"
                                    className="w-full py-3 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#a4ac86] transition-all duration-300 text-gray-800 placeholder-transparent font-medium resize-none group"
                                    placeholder="Tell me about your project..."
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#a4ac86 Peer-focus:text-sm"
                                >
                                    Tell me about your project...
                                </label>
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a4ac86] group-focus-within:w-full transition-all duration-500" />
                                <AnimatePresence>
                                    {errors.message && (
                                        <motion.span
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-red-400 text-[10px] font-bold uppercase mt-1 block"
                                        >
                                            {errors.message}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Modern Animated Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className={`group flex items-center gap-3 ${loading ? "bg-gray-400" : "bg-[#a4ac86]"
                                    } text-white font-bold uppercase tracking-[2px] px-10 py-5 rounded-full shadow-xl transition-all duration-500`}
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight
                                            size={20}
                                            className="group-hover:translate-x-2 transition-transform duration-300"
                                        />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Details (Minimalist) */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-12 pl-0 lg:pl-10">
                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-6"
                            >
                                <div className="w-14 h-14 bg-[#f8f9f5] rounded-2xl flex items-center justify-center text-[#a4ac86]">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-1">
                                        {item.label}
                                    </p>
                                    <p className="text-xl font-bold text-black">{item.val}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;