import React from 'react'
import "./about.css"
import Me from '../../assets/Me2.jpg'
import { FiAward } from 'react-icons/fi'
import { BsFillBookFill } from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='Me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FiAward className='about-icons' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <BsFillBookFill className='about-icons' />
              <h5>Education</h5>
              <small>B Tech from Information Technology session-(2018-2022)</small>
            </article>

          </div>

          <p>
            Seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge,
            and leverage my learning.
            I really like to work with a team project. I am polite and hardworking type person.
            
          </p>
          <a href='#contact' className='btn bn-primary'>Let's Connect</a>

        </div>
      </div>
    </section>
  )
}

export default About