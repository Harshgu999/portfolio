import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>HK brothers</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_social'>
        <a href='https://www.linkedin.com/in/harsh-gupta-5ab283228/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/Harshgu999' target="_blank"><BsGithub /></a>
        <a href='https://twitter.com/Capsco4' target="_blank"><BsTwitter /></a>
        <a href='https://www.youtube.com/channel/UCF9lO7tWKET_RpwhLpfAs6Q' target="_blank"><BsYoutube /></a>
</div>

<div className='footer_copyright'>
  <small>
    &copy; HK brothers. All rights reserved
  </small>
</div>
    </footer>
  )
}

export default Footer