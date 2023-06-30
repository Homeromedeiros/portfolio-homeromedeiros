import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Minhas habilidades</h5>
      <h2>Experiências</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Desenvolvimento Frontend</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsCheckCircleFill className='.experience_details-icon'/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='.experience_details-icon'/>
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='.experience_details-icon'/>
              <div>  
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='.experience_details-icon'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>
        </div>

        {/* Fim FrontEnd */}

        <div className="experience_frontend">
          <h3>Desenvolvimento Sistemas</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsCheckCircleFill className='.experience_details-icon'/>
              <div>
                <h4>SolidWorks</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='.experience_details-icon'/>
              <div>
                <h4>AutoCAD</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='.experience_details-icon'/>
              <div>
                <h4>Inventor</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='.experience_details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='.experience_details-icon'/>
              <div>
                <h4>VB.Net</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='.experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience