import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_1.jpg'
import IMG2 from '../../assets/portfolio_2.jpg'
import IMG3 from '../../assets/portfolio_3.png'
import IMG4 from '../../assets/portfolio_4.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Curso HTML5 e CSS3',
    github: 'https://github.com/Homeromedeiros/html-css'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Projeto umidade e temperatura',
    github: 'https://github.com/Homeromedeiros/arduino_projeto'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Projeto Pokémon-listagem',
    github: 'https://github.com/Homeromedeiros/pokemon-listagem'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Página The last of us',
    github: 'https://github.com/Homeromedeiros/pagina-the-last-of-us'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus trabalhos</h5>
      <h2>Portifólio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt="title" />
                </div>
                <h3>{title}</h3>
                <div className="portifolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio 