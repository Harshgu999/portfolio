import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2> Services</h2>

    <div className='container services_container'>
    <article className='services'>
      <div className='services_head'>
        <h3>UI/UX</h3>
        </div>

        <ul className='services_list'>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p> I have a good knowledge to style by usinng CSS and Java Script.</p>
          </li>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p> I have a good knowledge of colors.</p>
          </li>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p> I like to make each and every thing in detail.</p>
          </li>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p> I can create some effect and good looking slides. </p>
          </li>
        </ul>
      
    </article>

    <article className='services'>
      <div className='services_head'>
        <h3>Web Development</h3>
        </div>

        <ul className='services_list'>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p> I provide react base webapps.</p>
          </li>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p> I have a good command on django, MySQL as a backend.</p>
          </li>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p> I have basic knowledge of flask.</p>
          </li>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p>I have a good commaned on HTML, CSS, JavaScript.</p>
          </li>
          
        </ul>
      
    </article>

    <article className='services'>
      <div className='services_head'>
        <h3>Content creation</h3>
        </div>

        <ul className='services_list'>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p> I like to make more detailed content.</p>
          </li>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p> I like to write about new topics.</p>
          </li>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p> Whenever I write about something, first I ensure that thing is plagiarism free. </p>
          </li>
          <li>
            <BsCheckLg className='services_list-icon' />
            <p> I love to work hard on every type of content creation.</p>
          </li>
        </ul>
      
    </article>
    </div>
    </section>
  )
}

export default Services