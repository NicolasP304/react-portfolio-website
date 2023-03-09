import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>NICOLAS R PAPAGEORGIOU</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.facebook.com/profile.php?id=100070861607257'><AiOutlineFacebook/></a>
        <a href='https://www.linkedin.com/in/nicolas-r-papageorgiou'><AiOutlineLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Nicolas R Papageorgiou. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer