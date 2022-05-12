import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/harsh-gupta-5ab283228/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Harshgu999" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/Capsco4" target="_blank"><BsTwitter/></a>
        <a href="https://www.youtube.com/channel/UCF9lO7tWKET_RpwhLpfAs6Q" target="_blank"><BsYoutube /></a>
    </div>
  )
}

export default HeaderSocial