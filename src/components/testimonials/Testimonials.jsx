import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar_1.jpg'
import AVTR2 from '../../assets/avatar_2.jpg'
import AVTR3 from '../../assets/avatar_3.jpg'
import AVTR4 from '../../assets/avatar_4.jpg'

// core version + navigation, pagination modules:
import { Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Homero Medeiros',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis exercitationem temporibus quas, at doloribus quidem ab, tempore deserunt nesciunt, amet adipisci iste debitis placeat ratione.'
  },
  {
    avatar: AVTR2,
    name: 'Izaura Raquel',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis exercitationem temporibus quas, at doloribus quidem ab, tempore deserunt nesciunt, amet adipisci iste debitis placeat ratione.'
  },
  {
    avatar: AVTR3,
    name: 'João Carlos',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis exercitationem temporibus quas, at doloribus quidem ab, tempore deserunt nesciunt, amet adipisci iste debitis placeat ratione.'
  },
  {
    avatar: AVTR4,
    name: 'Maria Isis',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis exercitationem temporibus quas, at doloribus quidem ab, tempore deserunt nesciunt, amet adipisci iste debitis placeat ratione.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>revisão do cliente</h5>
      <h2>Testemunhas</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
        data.map(({avatar,name,review},index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt="Avatar 1"/>
            </div>
            <div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </div>
          </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials
