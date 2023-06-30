import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImYoutube} from 'react-icons/im'


const HeaderSocial = () => {
  return (
    <div className='header_socials'> 
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com" target='blank'><FaGithub/></a>
        <a href="https://youtube.com" target='blank'><ImYoutube/></a>
    </div>
  )
}

export default HeaderSocial