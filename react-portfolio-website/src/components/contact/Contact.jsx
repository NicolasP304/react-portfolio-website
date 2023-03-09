import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7kmpxjv', 'template_qk27rs9', form.current, 'yHAOouMi06QazUqMF')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>nicolas.papageorgiou@outlook.com</h5>
          <a href='mailto:nicolas.papageorgiou@outlook.com' target="_blank">Send a message</a>
        </article>

        <article className="contact__option">
          <AiOutlineWhatsApp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+61499999412</h5>
          <a href='https://api.whatsapp.com/send?phone+61499999412' target="_blank">Send a message</a>
        </article>
        </div>
        {/*****END OF CONTACT OPTIONS*****/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email Address" required />
          <textarea name="message" id='' rows='7' placeholder='Write a message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact