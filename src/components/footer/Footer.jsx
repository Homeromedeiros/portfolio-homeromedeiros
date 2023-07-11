import React from 'react'
import './footer.css'
import FooterSocial from './FooterSocial'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Homero</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#portfolio">Portifólio</a></li>
        <li><a href="#testimonials">Testemunhas</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      
      <FooterSocial/>

      <div className='footer_copyright'>
        <small>&copy; Homero Tutoriais</small>
      </div>
    </footer>
  )
}

export default Footer