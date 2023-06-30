import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/homero_perfil.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Olá, eu sou</h5>
        <h1>Homero Costa Medeiros</h1>
        <h5 className='text-light'>Desenvolvedor Front-End</h5>
        <CTA />

        <HeaderSocial/>

        <div className='me'>
          <img src={ME} alt="Meu_perfil" />
        </div>

          <a href="#contact" className='scroll_down'>Role para baixo</a>

      </div>
    </header>
  )
}

export default Header