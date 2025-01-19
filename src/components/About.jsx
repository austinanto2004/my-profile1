import React from "react";
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import {delay, motion, spring} from "motion/react";
import { useInView } from "react-intersection-observer";


const About = () => {
    const { ref, inView} = useInView({
      triggerOnce: true,
      threshold: 0.2,  
    })
   

    return (

        <motion.div 
        ref={ref}
        initial={{opacity:0}}
        animate={ inView ? { opacity:1} : {}}
        transition={{
            delay:0.1,
            duration:.1
        }}
        id="About"
        >
            <div  className=" py-56">
                <div className="container mx-auto text-center px-4 ">
                    <motion.h2 
                    ref={ref}
                    initial={{opacity:0, scale:0 }}
                    animate={inView? { opacity:1, scale:1} : {}}
                    transition={{
                        delay:0.1,
                        duration:0.5
                    }}
                    className="underline mb-20 text-sky-300 text-5xl md:text-6x1 font-extrabold flex flex-col "
                    >
                        About Me
                    </motion.h2>
                    <div className="container mx-auto justify-center text-2xl md:text-3x1 font-semibold flex flex-col text-white ">
                        
                        <motion.p 
                        ref={ref}
                        initial={{opacity:0, y:-100 }}
                        animate={ inView? { opacity:1, y:0} : {}}
                        transition={{
                            delay:0.6,
                            duration:1
                        }}
                        
                        className="mb-10">Hello! I’m Austin Antony Ignatius, a second-year B.Tech student pursuing Electronics and Communication Engineering at Christ Engineering College, Irinjalakuda. My journey in the world of technology and innovation has been fueled by curiosity and a passion for creativity.</motion.p>
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <div className="  flex justify-center ">
                                <motion.img 
                                ref={ref}
                                initial={{opacity:0, scale:0 }}
                                animate={ inView? { opacity:1, scale:1} : {}}
                                transition={{
                                    delay:0.3,
                                    duration:0.5
                                }}
                                src={avatar2} className="mx-auto w-1/2 sm:w-1/4 md:w-10/12  " ></motion.img>
                            </div>  
                                <motion.p 
                                ref={ref}
                                initial={{opacity:0, x:100 }}
                                animate={ inView? { opacity:1, x:0} : {}}
                                transition={{
                                    delay:0.6,
                                    duration:1
                                }}
                                className=" mb-10 md:w-1/2">Over the years, I’ve honed my skills by developing more than 10 websites, each tailored to unique purposes and audiences. This experience has given me a deep understanding of web technologies, design principles, and user experience. Beyond web development, I am deeply passionate about video editing, where I bring stories to life by blending visuals, sound, and creativity. It’s a medium that allows me to express my artistic vision and explore the endless possibilities of storytelling.</motion.p>

                        </div>
                        <div className="flex flex-col md:flex-row justify-center items-center">
                                <motion.p 
                                ref={ref}
                                initial={{opacity:0, x:-100 }}
                                animate={ inView? { opacity:1, x:0} : {}}
                                transition={{
                                    delay:0.6,
                                    duration:1
                                }}
                                className="mb-10  md:w-1/2">As an aspiring Electronics and Communication Engineer, I am intrigued by how technology shapes the future. I enjoy working on projects that challenge me to think critically and innovate, especially in areas that merge hardware and software. I believe in lifelong learning and constantly strive to expand my skill set, whether through academic pursuits, hands-on projects, or creative hobbies.</motion.p>
                                <div className="mb-8 flex justify-center"> 
                                    <motion.img 
                                    ref={ref}
                                    initial={{opacity:0, scale:0 }}
                                    animate={ inView? { opacity:1, scale:1} : {}}
                                    transition={{
                                        delay:0.3,
                                        duration:0.5
                                    }}
                                    src={avatar3} className="mx-auto w-1/2 sm:w-1/5 md:w-6/12  " ></motion.img>

                                </div>
                        </div>
                        <motion.p 
                        ref={ref}
                        initial={{opacity:0, y:100 }}
                        animate={ inView ? { opacity:1, y:0} : {}}
                        transition={{
                            delay:0.6,
                            duration:1
                        }}
                        
                        className="mb-15" >If you’re looking for someone with a blend of technical expertise, creativity, and a drive to innovate, I’m excited to connect and collaborate on meaningful projects!</motion.p>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}
export default About;