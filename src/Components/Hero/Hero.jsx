import React from 'react'
import './Hero.css'
import photo from '../../assets/photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto overflow-y-hidden'>
      <div className='absolute inset-0 sm:w-[80%] px-[3rem] top-[70px] mx-auto flex items-start gap-5'>
        <div className="flex flex-col justify-center items-center">
          <div className="glowing-circle w-5 h-5 rounded-full"></div>
          <div className='w-1 sm:h-48 h-32 pink-gradient'></div>
        </div>
        <div>
          <h1 className='min-[450px]:text-4xl md:text-6xl text-3xl font-bold'>Hi, I'm <span className='text-[#ae3ace]'>Udit</span></h1>
          <p className='description text-[#ABB2BF] mt-2 text-xl'>Software Developer</p>
          <p className='description  mt-2 text-sm'>I excel at creating <br />interactive Web Applications and APIs</p>
          <div className="buttons flex max-[1166px]:flex-col max-[1166px]:items-start mt-32 items-center gap-12 max-md:hidden">
            <a href="https://docs.google.com/document/d/16k6m6Wj3ebO_KCdI7ADz2Cgb2g1m21R2JhwdXaVbumw/edit?usp=drive_link" target="_blank" rel="noopener noreferrer"><button className='text-2xl max-lg:text-xl border border-[#C778DD] p-4 rounded-xl hover:bg-[#C778DD]'>Download CV</button></a>
            <a href="https://github.com/uditgour" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2xl' beat className='rounded-full max-[1166px]:mx-16 hover:text-[#C778DD] cursor-pointer' /></a>
            <a href="https://www.linkedin.com/in/udit-gour-3432621b7/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2xl' beat className='max-[1166px]:mx-16 hover:text-[#C778DD] cursor-pointer' /></a>
          </div>
          <div className="md:flex w-96  mt-8 hidden summary">
            <div className="w-1/3 first flex items-center gap-2">
              <span className='text-6xl'>2</span>
              <p className='text-xs leading-3 text-[#ABB2BF]'>Years of experience in IT industry</p>
            </div>
            <div className="w-1/3 second ml-auto flex items-center gap-2">
              <span className='text-6xl'>5</span>
              <p className='text-xs leading-3 text-[#ABB2BF]'>plus more personal projects completed</p>
            </div>
          </div>
          <div className="md:flex w-96 mt-8 hidden summary">
            <div className="w-1/3 first flex items-center gap-2">
              <span className='text-6xl'>1</span>
              <p className='text-xs leading-3 text-[#ABB2BF]'>Client projects completed</p>
            </div>
            <div className="w-1/3 second ml-auto flex items-center gap-2">
              <span className='text-6xl'>2</span>
              <p className='text-xs leading-3 text-[#ABB2BF]'>Years of experience in SpringBoot and Angular programming</p>
            </div>

          </div>
          <div className="mobile-buttons hidden max-md:flex absolute bottom-24 items-center gap-5 text-lg">
          <a href="https://docs.google.com/document/d/16k6m6Wj3ebO_KCdI7ADz2Cgb2g1m21R2JhwdXaVbumw/edit?usp=drive_link" target="_blank" rel="noopener noreferrer"><button className='border border-[#C778DD] p-2 rounded-lg hover:bg-[#C778DD]'>Download CV</button></a>
            <a href="https://github.com/uditgour" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='lg' beat className='rounded-full hover:text-[#C778DD]' /></a>
            <a href="https://www.linkedin.com/in/udit-gour-3432621b7/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='lg' beat className='hover:text-[#C778DD] cursor-pointer' /></a>
          </div>
        </div>
        <div className="circle absolute rounded-full mt-12 lg:top-20 top-48 max-[380px]:w-56 max-[380px]:h-56 max-md:w-64 max-md:h-64 max-lg:w-80 max-lg:h-80 max-md:ml-6 max-lg:ml-60 lg:right-16 w-96 h-96 bg-cover bg-no-repeat"></div>
        <div className="photo-container rounded-full mt-12 lg:top-20 top-48 max-[380px]:w-56 max-[380px]:h-56 max-md:w-64 max-md:h-64 max-lg:w-80 max-lg:h-80 max-md:ml-6 max-lg:ml-60 lg:right-16 absolute w-96 h-96 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${photo})` }}></div>

      </div>
    </section>

  )
}

export default Hero
