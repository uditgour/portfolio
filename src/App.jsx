import React from 'react'
import { Navbar, Hero, About, Experience, Skills, Projects, Contact } from './Components'
import StarsCanvas from './Components/Canvas/Stars'
import { BrowserRouter } from 'react-router-dom'
import heroBg from './assets/herobg.svg'

const App = () => {
  return (
    <BrowserRouter>
      <div className="background relative z-0 bg-[#282C33]">
        <div className='bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${heroBg})`  }}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <div className='relative z-0 bg-black'>
          <Contact />
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter >
  )
}

export default App
