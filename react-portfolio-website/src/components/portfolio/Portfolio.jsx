import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-1.png'
import IMG2 from '../../assets/portfolio-2.gif'
import IMG3 from '../../assets/portfolio-3.png'

const data = [
  {
      id: 1,
      image: IMG1,
      title: 'Calculator',
      github: 'https://github.com/NicolasP304/Calculator.git'
  },
  {
    id: 2,
    image: IMG2,
    title: 'BlackJack Game',
    github: 'https://github.com/NicolasP304/black-jack-game.git'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Units Converter',
    github: 'https://github.com/NicolasP304/units-converter.git'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work Experience</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
              return(
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image"></div>
                  <img src={image} alt={title}></img>
                  <h3>{title}</h3>
                  <a href={github } className='btn btn-primary' target='_blank'>GitHub</a>
              </article>
              )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio