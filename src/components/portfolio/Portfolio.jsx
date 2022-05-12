import React from 'react'
import './portfolio.css'
import IMG from '../../assets/pro1.png'
import IMG2 from '../../assets/pro2.png'
import IMG3 from '../../assets/pro3.png'
import IMG4 from '../../assets/pro4.png'
import IMG5 from "../../assets/pro5.png"


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image' >
            <img src={IMG2} alt="image" />
          </div>
          <h3>This is a Mini restaurant project based on react.</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Harshgu999/react-restaurant-project" className='btn' target="_blank">Github</a>
            <a href='https://harshgu999.github.io/react-restaurant-project/' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image' >
            <img src={IMG4} alt="image" />
          </div>
          <h3>This webapp is give the detail about weather of any city in the world it is based on react. In this I use openweather API.</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Harshgu999/react-weather-webapp" className='btn' target="_blank">Github</a>
            <a href='https://harshgu999.github.io/react-weather-webapp/' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image' >
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a digital clock mini project based on react(Hookes)</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Harshgu999/digital-clock-react" className='btn' target="_blank">Github</a>
            <a href='https://harshgu999.github.io/digital-clock-react/' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image' >
            <img src={IMG3} alt="image" />
          </div>
          <h3>This is a Todo project based on flask.</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Harshgu999/todonew" className='btn' target="_blank">Github</a>
            <a href='https://todo-workspace.herokuapp.com/#' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image' >
            <img src={IMG} alt="image" />
          </div>
          <h3>This is a simple website which is based on django.</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Harshgu999/django-dog-website" className='btn' target="_blank">Github</a>
            <a href='https://dotrainerdjango.herokuapp.com/' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio