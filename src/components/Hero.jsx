import React from 'react'
import {delay, motion, spring} from "motion/react";
import avatar from '../assets/avatar.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Contact from './Contact';




const Hero = () => {

 

  return (
  <div id='Hero' classname='text-white py-10'>
    <motion.img 
    initial={{opacity:0, scale:0 }}
    animate={{opacity:1, scale:1}}
    transition={{
      delay:0.5,
      duration:0.5
    }}
    src={avatar} className='mx-auto w-2/3 md:w-1/3 lg:w-1/4 '>
    </motion.img>
    <div 
    
    className='container mx-auto text-white text-center'>
      <motion.div
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{
        delay:0.5,
        duration:1
      }}>
      <h1 className='text-5xl md:text-6x1 font-bold flex flex-col gap-3 mb-2'>HI!</h1>
      <h2 className='text-4xl md:text-5x1 font-bold flex flex-col gap-3 mb-2'>JUST A NORMAL FREELANCER
      <span className='text-sky-300'>CHECK OUT HERE WHAT I CAN DO </span></h2>
      </motion.div>

      <h3 className='lex flex-col mx-auto mt-6'>
      <motion.button
      initial={{opacity:0, x:-100}}
      animate={{opacity:1, x:0}}
      transition={{
        delay:1,
        duration:1
      }}
      className='mr-5 md:text-base font-bold lg:text-lg text-xl text-slate-800 bg-sky-300  hover:bg-white hover:text-slate-800 px-4 py-2 rounded-full'>
        <Link 
        to={"Contact"}
        smooth={true}
        duration={500}
        offset={-70}
        >
        HIRE ME
        </Link>
      </motion.button>
      <motion.button 
       initial={{opacity:0, x:100}}
       animate={{opacity:1, x:0}}
       transition={{
         delay:1,
         duration:1
       }}
      className='mr-5 md:text-base font-bold lg:text-lg text-xl text-white bg-slate-800  hover:bg-white outline hover:text-slate-800 px-4 py-2 rounded-full'>
        <Link
          to={"About"}
          smooth={true}
          duration={500}
          offset={-70}
        >
        MY STORY
        </Link>
        </motion.button>
      </h3>
    </div>
  </div>
  )
}

export default Hero;

