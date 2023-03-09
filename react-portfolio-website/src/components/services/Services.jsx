import React from 'react'
import './services.css'
import { BsCheck2Square } from "react-icons/bs";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>User stories</p>
            </li>

            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>User flow charts, diagrams</p>
            </li>

            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>Wireframes</p>
            </li>

            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>Content strategy</p>
            </li>

            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>Information architecture</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>Visually Appealing, Polished, and Professional Interfaces.</p>
            </li>

            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>User Friendly, Intuitive to use Websites.</p>
            </li>

            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>Responsive Designs Optimized for Mobile Devices and Search Engines.</p>
            </li>

            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>Regularly Checked for any Broken Links or not Working Scripts.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>Infographics</p>
            </li>

            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>Blog Content</p>
            </li>

            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>Podcasts</p>
            </li>

            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>Videos</p>
            </li>

            <li>
              <BsCheck2Square className='service__list-icon'/>
              <p>Social media</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services