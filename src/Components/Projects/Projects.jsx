import React from 'react'
import { SectionWrapper } from '../../hoc'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt';
import ecommerce from '../../assets/Projects/ecommerce.jpg'
import weatherApp from '../../assets/Projects/weatherApp.png'
import portfolio from '../../assets/Projects/portfolio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


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


const Projects = () => {
  return (
    <div id='projects'>
      <motion.div variants={textVariant()}>
        <p className='lg:text-[30px] sm:text-[26px] min-[380px]:20px text-[16px] text-[#ABB2BF] ubuntu m-0'>MY WORK</p>
        <h2 className='lg:text-[80px] sm:text-[60px] min-[380px]:50px text-[40px] text-white ubuntu m-0'>Portfolio Projects</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='poppins text-[17px] text-[#ABB2BF] mt-3 leading-[30px]'>
        Following are the projects that I have worked on so far. These projects reflects the skills that I have learnt and experience gained to work on real-world examples. Each project is briefly described with
        links to code repositories and live demos in it. I have majorly worked on JavaScript language and its frameworks/libraries and will be looking forward to work more in this field as well as learn new technologies and implement them in my future projects.
      </motion.p>
      <div className='flex flex-wrap gap-7 mt-20'>
        <Tilt className='sm:w-[360px] w-full'>
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)}
            className='pink-green-gradient p-[1px] rounded-2xl shadow-xl shadow-black' >
            <div className='p-5 w-full bg-black rounded-2xl'>
              <div className='img-container relative w-full h-[230px]'>
                <img
                  src={ecommerce}
                  alt='project_image'
                  className='project_image w-full h-full bg-cover bg-no-repeat rounded-2xl'
                />
                <ul className='list-none image_tags flex justify-center flex-wrap gap-2 self-center p-8'>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>Reactjs</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>nodejs</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>Expressjs</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>CSS</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>Bootstrap</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>Passport Js</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>MongoDB</li>
                </ul>
              </div>
              <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px] flex justify-between items-center poppins'>Shopping Cart
                  <a href="https://github.com/AnuragRajput1202/CHATBUDD" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                </h3>
                <p className='mt-2 text-secondary text-[14px] text-[#ABB2BF] ubuntu'>Developed a responsive shopping cart web application with user authentication, product management, real-time price calculations and seamless checkout functionality for both buyer and seller.</p>
              </div>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='sm:w-[360px] w-full'>
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)}
            className='pink-green-gradient p-[1px] rounded-2xl shadow-xl shadow-black' >
            <div className='p-5 w-full bg-black rounded-2xl'>
              <div className='img-container relative w-full h-[230px]'>
                <img
                  src={weatherApp}
                  alt='project_image'
                  className='project_image w-full h-full bg-cover bg-no-repeat rounded-2xl'
                />
                <ul className='list-none image_tags flex justify-center flex-wrap gap-2 self-center p-8'>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>JavaScript</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>Axios</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>HTML</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>CSS</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>Open Api</li>
                </ul>
              </div>
              <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px] flex justify-between  items-center'>Weather App
                  <a href="https://github.com/AnuragRajput1202/iNoteBook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                </h3>
                <p className='mt-2 text-secondary text-[14px] text-[#ABB2BF]'>Developed a user-friendly weather application that provides real-time and forecasted weather data for any city using an Open Weather API. Users can search weather conditions by city name or geographic coordinates.</p>
              </div>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='sm:w-[360px] w-full'>
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)}
            className='pink-green-gradient p-[1px] rounded-2xl shadow-xl shadow-black' >
            <div className='p-5 w-full bg-black rounded-2xl'>
              <div className='img-container relative w-full h-[230px]'>
                <img
                  src={portfolio}
                  alt='project_image'
                  className='project_image w-full h-full bg-cover bg-no-repeat rounded-2xl'
                />
                <ul className='list-none image_tags flex justify-center flex-wrap gap-2 self-center p-8'>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>Reactjs</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>react-three-fiber</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>CSS</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>Framer-motion</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>TailwindCSS</li>
                  <li className='rounded text-sm bg-[#C778DD] p-1'>emailjs</li>
                </ul>
              </div>

              <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px] flex justify-between items-center poppins'>Personal Portfolio
                  <a href="https://github.com/AnuragRajput1202/personal-portfolio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                </h3>
                <p className='mt-2 text-secondary text-[14px] text-[#ABB2BF]'>This is my portfolio website. In this project, I have shown my entire IT career so far. I have majorly worked on frontend, learnt some advanced animations and libraries of React and implemented them.</p>
              </div>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </div >
  )
}

export default SectionWrapper(Projects, '#projects')
