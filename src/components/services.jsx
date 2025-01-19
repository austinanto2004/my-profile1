import React from 'react'
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import {delay, motion, spring} from "motion/react";
import { useInView } from "react-intersection-observer";


const Services = () => {
    const { ref, inView} = useInView({
          triggerOnce: true,
          threshold: 0.2,  
        })
    const servicedata = [
        {
            title:"Web Development",
            description: "I am skilled in web development, with experience in designing and delivering responsive, user-friendly websites using HTML, CSS, JavaScript, and modern frameworks."
        },

        {
            title:"App Design",
            description: "I am skilled in app design, with experience in creating intuitive, user-friendly interfaces and seamless user experiences, focusing on both functionality and aesthetics."
        },

        {
            title:"Video Editing",
            description: "I am skilled in video editing, with experience in creating engaging, high-quality videos by combining creativity and technical expertise to deliver polished content."
        },

        {
            title:"Photoshop",
            description: "I am proficient in Photoshop, with experience in designing and enhancing visuals, creating eye-catching graphics, and delivering professional-quality edits."

        },
        {
            title:"Front-End-Development",
            description: "I am skilled in front-end development, with expertise in building responsive, visually appealing user interfaces using HTML, CSS, JavaScript, and modern frameworks"
        },
        
        
    ];
    return(

        <motion.div 
        ref={ref}
        initial={{opacity:0}}
        animate={ inView ? { opacity:1} : {}}
        transition={{
            delay:0.1,
            duration:.1
        }}
        id='Services'
        >
        
            <div className='container text-center py-1' >
                <motion.h2 
                ref={ref}
                initial={{opacity:0, y:100}}
                animate={ inView ? { opacity:1, y:0} : {}}
                transition={{
                    delay:0.3,
                    duration:1
                }}
                className="underline mb-6 text-sky-300 text-5xl md:text-6x1 font-extrabold flex flex-col ">Services</motion.h2>
                <motion.p 
                ref={ref}
                initial={{opacity:0, y:100}}
                animate={ inView ? { opacity:1, y:0} : {}}
                transition={{
                    delay:0.5,
                    duration:1
                }}
                className='text-white text-2xl md:text-3x1 mb-9'>These are the services that i can provide.</motion.p>
                <div className='mx-auto pr-9 pl-9 px-9 mb-9 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {servicedata.map(( Services, index) => ( 
                    <motion.div
                    whileHover={{scale:1.05}}
                        
                    whileTap={{scale:.95}}
                    >   
                        <motion.div
                        
                        
                        ref={ref}
                        initial={{opacity:0, y:100}}
                        animate={ inView ? { opacity:1, y:0} : {}}
                        transition={{
                            delay:0.8,
                            duration:1
                        }}
                        
                        className='bg-[#353535] text-center rounded-full p-11 hover:shadow-lg hover:shadow-sky-300 transition-shadow duration-350'
                        key={index}
                        >
                                < MdOutlineMiscellaneousServices className='container mx-auto text-5xl md:text-7x1 text-center flex flex-col justify-center text-sky-300'/>
                                <h3 className='text-2xl md:text-2x1 mb-2 font-bold'> {Services.title} </h3>
                                <p>
                                    {Services.description}
                                </p>
                            
                        </motion.div>
                    </motion.div>    
                    ))}

                </div>

            </div>
        </motion.div>

    )
}
export default Services;