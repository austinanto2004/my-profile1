import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import {color, motion, spring} from "motion/react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';




const Navbar = () => {
  const variants = {
    open: {clipPath: "circle(1200px at 43px 43px)"},
    transition: {
      type: "spring",
      
    },
    closed: {clipPath: "circle(25px at 43px 40px)",
      transition: {
        type: "spring",
        duration: 1,
      }
    },

    
  };

  
  const [menu,setMenu]= useState(false);
  const items= [
    {id: 1, text:'About',to:'About'},
    {id: 2, text:'Services' ,to: 'Services'},
    {id: 3, text:'Contact', to: 'Contact'},
  ];
  return (
    <div >
      <motion.div 
       initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            transition={{
              delay:0.5,
              duration:1
            }}
      className='container mx-auto hidden  md:flex justify-between items-center py-10 '>
        <div className='text-xl lg:text-2xl font-extrabold '>
          <div className='text-sky-300 flex items-center gap-2 hover:text-white'> 
            <span className= 'ml-7 '>AUSTIN</span>
            <span>ANTONY</span>
            <span>IGNATIUS</span>
            </div>
           
        </div>
        <div>
            <ul 
            
            className='hidden   md:flex font-medium items-center space-x-9 list-none lg:text-lg md:text-base text-white'>
              {items.map(({id,text,to}) => (
                <motion.li 
                whileHover={{scale:1.05}}
                whileTap={{scale:.95}}
                className='  hover:shadow-lg hover:underline '
                  key={id}>
                    <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-70}>
                    {text}
                    </Link>
                </motion.li>
              ))}
            </ul>
        </div>
        <a href='https://drive.google.com/drive/folders/17rrY_PPLX1516dpYvzvos-PxArQ5M00K'  className='mr-5 md:text-base font-bold lg:text-lg text-xl text-slate-800 bg-sky-300  hover:bg-white hover:text-slate-800 px-4 py-2 rounded-full'>Download CV</a>
      </motion.div>
      <div className='flex md:hidden justify-between'>
        <motion.div 
        animate = {menu ? "open" : "closed"}>
          <motion.div 
          variants={variants}
          onClick={()=> setMenu ((prev ) => !prev)}
          className='bg-white w-2/3 h-screen text-black fixed z-10'
          >
            <div className='px-7 py-6'>
              {menu ? (<IoClose size={35}/>): 
              <CiMenuBurger  size={30}/>}
            </div>
            {menu &&(
              <div className='flex flex-col justify justify-center items-center gap-3'>
                <ul className='space-y-1 text-lg font-serif font-black'>
                  {items.map(({id,text,to}) => (
                    <li key={id} className='hover:text-cyan-600'>
                      <Link
                      to={to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      >
                        {text}
                      </Link>
                      
                      </li>
                  ))}
                </ul>
                <a href='https://drive.google.com/drive/folders/17rrY_PPLX1516dpYvzvos-PxArQ5M00K' className=' md:text-base font-medium mg:text-g text-xl text-white bg-slate-800  hover:bg-cyan-500 hover:text-slate-800 px-4 py-2 rounded-full'>Download CV</a>

              </div>
            )}
          </motion.div>
        </motion.div>
        <motion.div 
         initial={{opacity:0, y:-100}}
         animate={{opacity:1, y:0}}
         transition={{
           delay:0.5,
           duration:.5
         }}
        className='text-xl font-bold  gap-2 px-4 py-5 text-sky-300'>
          <span>AUSTIN </span> 
          <span >ANTONY </span> 
          <span >IGNATIUS </span>
        </motion.div>
      </div>
    </div>


  );
};

export default Navbar;
