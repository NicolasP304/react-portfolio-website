import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div> 
        <div className="CTA">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me!</a>
        </div>
    </div>
  )
}

export default CTA
