import React from 'react'
import './header.css'
import CTA from './CTA'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import ME from '../../assets/homero_perfil.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Olá, eu sou</h5>
        <h1 className='name'>Homero Costa Medeiros</h1>
        <h5 className='text-light'>Desenvolvedor full-stack</h5>
        <CTA />

        {/* <HeaderSocial/> */}

        {/* <div className='me'>
          <img src={ME} alt="Meu_perfil" />
        </div> */}

          <a href="#contact" className='scroll_down'><BsFillArrowDownCircleFill/> </a>

      </div>
    </header>
  )
}

export default Header