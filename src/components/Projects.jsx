import React, { useState } from "react";
import img from "../assets/image.png";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image4.jpeg";
import img5 from "../assets/image5.jpeg";
import img6 from "../assets/image6.jpeg";
import img7 from "../assets/image7.jpeg";
import img8 from "../assets/image8.jpeg";

//  const projectData = [
//         {   title: "Patel Glass Interior", 
//             category: "3D Design", 
//             image: img, 
//             link: "https://patel-glasswork.vercel.app/" 
//         },
//         {   title: "SP Iron & Steel Works", 
//             category: "Industrial", 
//             image: img2, 
//             link: "https://sp-steel-iron.vercel.app/" 
//         },
//         {   title: "Blog App", 
//             category: "React App", 
//             image: img3, 
//             link: "https://blog-7df7.vercel.app/" 
//         },
//         {   title: "Finance Tracker", 
//             category: "Management", 
//             image: img4, 
//             link: "https://finance-tawny-ten.vercel.app/" 
//         },
//         {   title: "M-Watch App", 
//             category: "API", 
//             image: img5, 
//             link: "https://m-watch.vercel.app/" 
//         },
//         {   title: "Quiz App", 
//             category: "React App", 
//             image: img6, 
//             link: "https://quiz-virid-two.vercel.app/" 
//         },
//         {   title: "UrbanCart", 
//             category: "E-commerce", 
//             image: img7, 
//             link: "https://urban-cart-h5mz.vercel.app/" 
//         },
//         {   title: "Recipe Finder", 
//             category: "API", 
//             image: img8, 
//             link: "https://recipe-nu-eight.vercel.app/" 
//         }
//     ];


const Projects = () => {

    const [displayCount, setDisplayCount] = useState(6);
    const [showAll, setShowAll] = useState(false);

    // const projectData = [
    //     { title: "Patel Glass Interior", category: "3D Design", image: img, link: "https://patel-glasswork.vercel.app/" },
    //     { title: "SP Iron & Steel Works", category: "Industrial", image: img2, link: "https://sp-steel-iron.vercel.app/" },
    //     { title: "Blog App", category: "React App", image: img3, link: "https://blog-7df7.vercel.app/" },
    //     { title: "Finance Tracker", category: "Management", image: img4, link: "https://finance-tawny-ten.vercel.app/" },
    //     { title: "M-Watch App", category: "API", image: img5, link: "https://m-watch.vercel.app/" },
    //     { title: "Quiz App", category: "React App", image: img6, link: "https://quiz-virid-two.vercel.app/" },
    //     { title: "UrbanCart", category: "E-commerce", image: img7, link: "https://urban-cart-h5mz.vercel.app/" },
    //     { title: "Recipe Finder", category: "API", image: img8, link: "https://recipe-nu-eight.vercel.app/" }
    // ];
        
 const projectData = [
        {   title: "Patel Glass Interior", 
            category: "3D Design", 
            image: img, 
            link: "https://patel-glasswork.vercel.app/" 
        },
        {   title: "SP Iron & Steel Works", 
            category: "Industrial", 
            image: img2, 
            link: "https://sp-steel-iron.vercel.app/" 
        },
        {   title: "Blog App", 
            category: "React App", 
            image: img3, 
            link: "https://blog-7df7.vercel.app/" 
        },
        {   title: "Finance Tracker", 
            category: "Management", 
            image: img4, 
            link: "https://finance-tawny-ten.vercel.app/" 
        },
        {   title: "M-Watch App", 
            category: "API", 
            image: img5, 
            link: "https://m-watch.vercel.app/" 
        },
        {   title: "Quiz App", 
            category: "React App", 
            image: img6, 
            link: "https://quiz-virid-two.vercel.app/" 
        },
        {   title: "UrbanCart", 
            category: "E-commerce", 
            image: img7, 
            link: "https://urban-cart-h5mz.vercel.app/" 
        },
        {   title: "Recipe Finder", 
            category: "API", 
            image: img8, 
            link: "https://recipe-nu-eight.vercel.app/" 
        }
    ];

    const toggleProjects = () => {
        if (showAll) {
            setDisplayCount(6);
            setShowAll(false);
        } else {
            setDisplayCount(projectData.length);
            setShowAll(true);
        }
    };

    return (

    <section id="projects" className="min-h-screen py-28 bg-[#fafafa] cursor-default scroll-mt-24">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}

                <div className="text-center mb-16">

                    <span className="text-[#a4ac86] uppercase tracking-[6px] font-bold text-[10px] mb-4 block">
                        Portfolio
                    </span>

                    <h2 className="text-5xl font-black text-black mb-6 tracking-tighter">
                        Featured Works
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A curated collection of digital experiences crafted with a blend of modern aesthetics and functional code.
                    </p>

                </div>


                {/* Grid */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {projectData.slice(0, displayCount).map((project) => (

                        <div
                            key={project.title}
                            className="relative group overflow-hidden rounded-xl bg-white shadow-sm min-h-[200px] md:min-h-[240px] cursor-pointer"
                        >

                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                // className="w-full h-full object-cover transform-gpu transition-transform duration-500 group-hover:scale-110"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                            />

                            {/* Overlay */}

                            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-[#a4ac86] text-[10px] uppercase tracking-[3px] mb-6">
                                    {project.category}
                                </p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#a4ac86] hover:text-white transition-colors"
                                >
                                    Live Demo
                                </a>

                            </div>

                        </div>

                    ))}

                </div>


                {/* Button */}

                {projectData.length > 6 && (

                    <div className="text-center mt-16">

                        <button
                            onClick={toggleProjects}
                            className="text-black font-bold text-sm border-b-2 border-black pb-2 hover:text-[#a4ac86] hover:border-[#a4ac86] transition-all"
                        >
                            {showAll ? "HIDE PROJECTS" : "VIEW ALL PROJECTS"}
                        </button>

                    </div>

                )}

            </div>

        </section>

    );
};

export default Projects;