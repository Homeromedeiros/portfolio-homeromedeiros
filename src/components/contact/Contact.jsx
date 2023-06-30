import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hnr90q5', 'template_2edasts', form.current, 'bx2uCrh1XJ7aKNraA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Contacte-me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>homero.mede@gmail.com</h5>
            <a href="homero.mede@gmail.com">Envie uma mensagem</a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 84 999928047</h5>
            <a href="https://api.whatsapp.com/send?phone=+5584999928047">Envie uma mensagem</a>
          </article>
        </div>
        {/* FIM DAS OPÇOES DE CONTATO */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Seu nome completo' required/>
          <input type="email" name='email' placeholder='Seu email' required/>
          <textarea name="message" rows="7" placeholder='Deixe sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact