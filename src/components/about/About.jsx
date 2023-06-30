import React from 'react'
import './about.css'
import ME from '../../assets/homero_about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUserFriends } from 'react-icons/fa'
import { AiFillProject } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Olá!</h5>
      <h2>Sobre mim</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About imagem" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experiêcnia</h5>
              <small>Mais de 4 anos de experiência</small>
            </article>

            <article className='about_card'>
              <FaUserFriends className='about_icon' />
              <h5>Clientes</h5>
              <small>A procura de clientes</small>
            </article>

            <article className='about_card'>
              <AiFillProject className='about_icon' />
              <h5>Projetos</h5>
              <small>Alguns projetos turoriais</small>
            </article>
          </div>

          <p>Sou formado em Engenharia Mecatrônica (Controle e Automação) no ano 2017 na UFRN. Atualmente trabalho com sistemas CADs prestando serviços internacionais, onde atuo a mais de 4 anos. Tenho experiência com: SolidWorks, Inventor, AutoCAD, entre outros.

          Possuo conhecimentos com pacote office e em algumas linguagens de programação, tais como: HTML, CSS, JavaScript, React, Java, VB.net, MySQL e PHP. Na Universidade desenvolvi projetos eletrônicos através do microcontrolador Arduino, um dos destaques foi uma maquete de um estacionamento inteligente e simulador para cirurgia laparoscópica, participei também de uma Iniciação Científica e na direção do Centro Acadêmico do curso.</p>

          <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About