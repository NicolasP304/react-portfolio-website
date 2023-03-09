import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Know More About Me . . .</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt='About Image'></img>
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ in Melbourne</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <ul>
            <li><span>Confident and enthusiastic individual with excellent proven ability to work and complete tasks in a proactive and productive manner.</span></li>
            <li><span>University student with highly developed communicative skills, punctuality and versatility portrayed through professional coaching, disability support work and industry based software development.</span></li>
            <li><span>A dedicated and driven student who enjoys communicating and building relationships with new individuals to embrace a positive work place environment.</span></li>
          </ul>
        <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
      </section>
  )
}

export default About