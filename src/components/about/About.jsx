import React from 'react'
import './about.css'
import ME from '../../assets/homero_about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'

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
              <FaAward className='about_icon'/>
              <h5>Experiêcnia</h5>
              <small>Mais de 4 anos de experiência</small>
            </article>

            <article className='about_card'>
              <FaUserFriends className='about_icon'/>
              <h5>Clientes</h5>
              <small>A procura de clientes</small>
            </article>

            <article className='about_card'>
              <AiFillProject className='about_icon'/>
              <h5>Projetos</h5>
              <small>Alguns projetos escolares</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem quis quisquam veniam blanditiis explicabo fugit perferendis, quidem excepturi praesentium eius, cupiditate iusto ipsam sunt debitis recusandae molestias! Quod, repudiandae?</p>

          <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About