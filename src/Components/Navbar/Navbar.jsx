import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/UG_LOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [active, setActive] = useState("")
    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <nav className='flex justify-center w-full h-12 px-2 max-sm:px-4 fixed top-0 z-20'>
            <div className="nav-container flex w-[75%] max-[800px]:w-full justify-between items-center">
                <Link to='/' onClick={() => {setActive(""); window.scrollTo(0,0)}} className="nav-left flex items-center">
                    <div className="logo-container" style={{ backgroundImage: `url(${logo})`}}></div>
                    <h1 className={`hover-effect home ${active !== "" && "text-[#ABB2BF]"} text-lg cursor-pointer`}>Udit Gour</h1>
                </Link>
                <div className="nav-right flex max-sm:hidden">
                    <ul className='flex text-lg gap-4 list-none'>
                        <li className={`hover-effect ${active !== "About" && "text-[#ABB2BF]"}`}><a href='#about' onClick={() => setActive("About")}>About</a></li>
                        <li className={`hover-effect ${active !== "Experience" && "text-[#ABB2BF]"}`}><a href='#experience' onClick={() => setActive("Experience")}>Experience</a></li>
                        <li className={`hover-effect ${active !== "Projects" && "text-[#ABB2BF]"}`}><a href="#projects"  onClick={() => setActive("Projects")}>Projects</a></li>
                        <li className={`hover-effect ${active !== "Contact" && "text-[#ABB2BF]"}`}><a href="#contact" onClick={() => setActive("Contact")}>Contact</a></li>
                    </ul>
                </div>
                <div className="menu hidden max-sm:block text-lg">
                    {!menuIsOpen ? <FontAwesomeIcon icon={faBars} onClick={toggleMenu} color='#FFFFFF' className='cursor-pointer' />
                        : <FontAwesomeIcon icon={faXmark} onClick={toggleMenu} color='#FFFFFF' className='cursor-pointer' />}
                </div>
                <div className={`mobile-menu gradient hidden max-sm:${menuIsOpen ? "block" : "hidden"} p-6 absolute top-12 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                    <ul className='list-none text-sm  flex gap-4 flex-col'>
                    <li className={`hover-effect ${active !== "About" && "text-[#ABB2BF]"}`}><a href='#about' onClick={() => setActive("About")}>About</a></li>
                        <li className={`hover-effect ${active !== "Experience" && "text-[#ABB2BF]"}`}><a href='#experience' onClick={() => setActive("Experience")}>Experience</a></li>
                        <li className={`hover-effect ${active !== "Projects" && "text-[#ABB2BF]"}`}><a href="#projects"  onClick={() => setActive("Projects")}>Projects</a></li>
                        <li className={`hover-effect ${active !== "Contact" && "text-[#ABB2BF]"}`}><a href="#contact" onClick={() => setActive("Contact")}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
