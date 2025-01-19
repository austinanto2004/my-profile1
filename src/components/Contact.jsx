import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {delay, motion, spring} from "motion/react";
import { useInView } from "react-intersection-observer";

const Contact =( )=> {
    const { ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,  
      })
    return(
        <motion.div ref={ref}
        initial={{opacity:0}}
        animate={ inView ? { opacity:1} : {}}
        transition={{
            delay:0.1,
            duration:.1
        }}
        id='Contact'>
            <div className='container mx-auto px-20 text-center py-20' >
                <motion.h2 
                ref={ref}
                                initial={{opacity:0, scale:0 }}
                                animate={inView? { opacity:1, scale:1} : {}}
                                transition={{
                                    delay:0.1,
                                    duration:0.5
                                }}
                className='underline mb-10 text-sky-300 text-5xl md:text-6x1 font-extrabold flex flex-col'>Contact Me</motion.h2>
                
                    <motion.p 
                     ref={ref}
                                        initial={{opacity:0, y:100 }}
                                        animate={ inView? { opacity:1, y:0} : {}}
                                        transition={{
                                            delay:0.3,
                                            duration:1
                                        }}
                                        
                    className='text-2xl md:text-3x1 font-semibold flex flex-col text-white' >
                        if you have any doubts please contact me 
                    </motion.p>
                

            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 1g:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='space-y-6'>
                    <div className='flex items-center space-x-9'>
                        <motion.div 
                        ref={ref}
                                                      initial={{opacity:0, scale:0 }}
                                                      animate={ inView? { opacity:1, scale:1} : {}}
                                                      transition={{
                                                          delay:0.7,
                                                          duration:1
                                                      }}
                        className=' bg-sky-300 p-4 rounded-full'>
                        <FaPhoneAlt className='text-black w-6 h-6'/>
                        

                        </motion.div>
                        <motion.div 
                        ref={ref}
                                                    initial={{opacity:0, x:-100 }}
                                                    animate={ inView? { opacity:1, x:0} : {}}
                                                    transition={{
                                                        delay:0.6,
                                                        duration:1
                                                    }}
                        >
                            <p className='text-white  text-2xl  font-medium text-start'>Call me</p>
                            <p className='text-white text-1xl gap-2'>+91 88485 48770 </p>
                        </motion.div>
                        
                    </div>
                    <div className='flex items-center space-x-9'>
                        <motion.div  
                        ref={ref}
                                                      initial={{opacity:0, scale:0 }}
                                                      animate={ inView? { opacity:1, scale:1} : {}}
                                                      transition={{
                                                          delay:0.7,
                                                          duration:1
                                                      }}
                        className=' bg-sky-300 p-4 rounded-full'>
                        <a href='austinantoignatius@gmail.com'><MdOutlineMailOutline  className='text-black w-6 h-6'/></a>
                        

                        </motion.div >
                        <motion.div 
                        ref={ref}
                                                    initial={{opacity:0, x:-100 }}
                                                    animate={ inView? { opacity:1, x:0} : {}}
                                                    transition={{
                                                        delay:0.6,
                                                        duration:1
                                                    }} >
                            <p className='text-white  text-2xl  font-medium text-start'>austinantoignatius@gmail.com</p>
                            
                        </motion.div >
                        
                    </div>
                    <div className='flex items-center space-x-9'>
                        <motion.div  
                        ref={ref}
                                                      initial={{opacity:0, scale:0 }}
                                                      animate={ inView? { opacity:1, scale:1} : {}}
                                                      transition={{
                                                          delay:0.7,
                                                          duration:1
                                                      }}
                        className=' bg-sky-300 p-4 rounded-full'>
                        <a href='https://maps.app.goo.gl/BJvxXQH2zW1EaBWV8' ><FiMapPin  className='text-black w-6 h-6'/></a>
                        

                        </motion.div >
                        <motion.div 
                        ref={ref}
                                                    initial={{opacity:0, x:-100 }}
                                                    animate={ inView? { opacity:1, x:0} : {}}
                                                    transition={{
                                                        delay:0.6,
                                                        duration:1
                                                    }} >
                            <p className='text-white  text-2xl  font-medium text-start'>Thrissur, Kerala</p>
                            
                        </motion.div >
                        
                    </div>
                </div>
                <motion.form 
                ref={ref}
                initial={{opacity:0, x:100 }}
                animate={ inView? { opacity:1, x:1} : {}}
                transition={{
                    delay:0.6,
                    duration:1
                }}
                className='space-y-6 text-white'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <input type='text' placeholder='Full Name' className='border-2 rounded-full p-4 w-full border-sky-300 bg-[#010026] text-xl text-center'></input>
                        <input type='text' placeholder='Last Name' className='border-2 rounded-full p-4 w-full border-sky-300 bg-[#010026] text-xl text-center'></input>
                       
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <input type='text' placeholder='phone number' className='border-2 rounded-full p-4 w-full border-sky-300 bg-[#010026] text-xl text-center'></input>
                        <input type='text' placeholder='email id' className='border-2 rounded-full p-4 w-full border-sky-300 bg-[#010026] text-xl text-center'></input>
                        
                        
                    </div>
                    <div className='grid  gap-5'>
                        <textarea placeholder='message' className='border-2 rounded-full p-4 w-full border-sky-300 bg-[#010026] text-xl text-center'></textarea>
                        
                        
                        
                    </div>
                    <motion.div 
                    whileHover={{scale:1.05}}
                    whileTap={{scale:.95}}
                    className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                        <div className='border rounded-full p-4 w-full border-white bg-sky-300 text-black text-2xl font-extrabold text-center hover:bg-sky-400'>
                            <div className='ml-20 grid grid-cols-1 sm:grid-cols-2 gap-3 '>
                                <button type='submit' > Submit </button>
                                <FaArrowRight className='mt-1 font-extrabold'  />
                            </div>
                        </div>
                    </motion.div>
                </motion.form>
            </div>
            
            <motion.div
            ref={ref}
                                        initial={{opacity:0, y:100 }}
                                        animate={ inView? { opacity:1, y:0} : {}}
                                        transition={{
                                            delay:0.6,
                                            duration:1
                                        }}
            className='text-white break-after-auto mt-48 flex justify-between items-center text-xl p-5  border-t-4 border-sky-300   '>
                <p className='ml-6'>@ 2025. All Rights Reserved</p>
                <p>Austin Antony Ignatius</p>
                <div className=' flex justify-between items-center gap-3 space-x-4  mr-6'>
                    <a href='https://www.linkedin.com/in/austin-antony-ignatius-689660291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' className='hover:text-sky-300'><FaLinkedin  className='w-6 h-6'/></a>
                    <a href="https://www.instagram.com/_austi_edits?igsh=MWNuY2UyeXBmdjJ0ZA==" className='hover:text-sky-300'><FaInstagram className='w-6 h-6'/></a>
                    <a href='https://github.com/austinanto2004' className='hover:text-sky-300'><FaGithub className='w-6 h-6'/></a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;