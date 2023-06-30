import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'
import {GiNotebook} from 'react-icons/gi'
import {BiSidebar} from 'react-icons/bi'
import {MdContactSupport} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiNotebook/></a>
        <a href="#portfolio" onClick={() => setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}><BiSidebar/></a>
        <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><MdContactSupport/></a>
      </nav>
  )
}

export default Nav