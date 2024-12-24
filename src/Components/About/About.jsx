import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import  {SectionWrapper}  from '../../hoc'


const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};


const About = () => {
  return (
    <div id='about'>
      <motion.div variants={textVariant()}>
        <p className='lg:text-[30px] sm:text-[26px] min-[380px]:20px text-[16px] text-[#ABB2BF] ubuntu m-0'>INTRODUCTION</p>
        <h2 className='lg:text-[80px] sm:text-[60px] min-[380px]:50px text-[40px] text-white ubuntu m-0'>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='poppins text-[17px] text-[#ABB2BF] mt-5 leading-[30px]'>
        I am a skilled software developer with experience in programming languages like  <span className='text-[#ae3ace]'>Java </span> and <span className='text-[#ae3ace]'>JavaScript </span>along with databases like <span className='text-[#ae3ace]'>MongoDB </span> and <span className='text-[#ae3ace]'>Oracle </span>  . I also possess expertise in libraries/frameworks like <span className='text-[#ae3ace]'>Spring Boot, Angular, React.js and Node.js </span>. I am a quick learner and collaborate closely with clients to create more efficient, scalable and user-friendly solutions that solve real-world problems. I am looking forward to contribute more in the software industry, at the same time I want to take my learnings and skill development to a next level.
      </motion.p>
      <div className='flex flex-wrap gap-10 mt-20'>
        <Tilt className='min-[300px]:w-[250px] w-full'>
          <motion.div variants={fadeIn("right", "spring", "0", 0.75)}
            className='w-full pink-green-gradient p-[1px] rounded-[20px] shadow-xl shadow-black'>
            <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
              <FontAwesomeIcon  icon={faReact} className='text-8xl text-[#ABB2BF]' />
              <h3 className='poppins text-white text-sm font-bold'>Frontend Developer</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='min-[300px]:w-[250px] w-full'>
          <motion.div variants={fadeIn("right", "spring", "0.5", 0.75)}
            className='w-full pink-green-gradient p-[1px] rounded-[20px] shadow-xl shadow-black'>
            <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
              <FontAwesomeIcon icon={faNode} className='text-8xl text-[#ABB2BF]' />
              <h3 className='poppins text-white text-sm font-bold'>Backend Developer</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='min-[300px]:w-[250px] w-full'>
          <motion.div variants={fadeIn("right", "spring", "1", 0.75)}
            className='w-full pink-green-gradient p-[1px] rounded-[20px] shadow-xl shadow-black'>
            <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
              <FontAwesomeIcon icon={faDatabase} className='text-8xl text-[#ABB2BF]' />
              <h3 className='poppins text-white text-sm font-bold'>Oracle Database</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='min-[300px]:w-[250px] w-full'>
          <motion.div variants={fadeIn("right", "spring", "2", 0.75)}
            className='w-full pink-green-gradient p-[1px] rounded-[20px] shadow-xl shadow-black'>
            <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
              <FontAwesomeIcon icon={faPython} className='text-8xl text-[#ABB2BF]' />
              <h3 className='poppins text-white text-sm font-bold'>Java Programming</h3>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </div>
  )
}

export default SectionWrapper(About, "#about")
