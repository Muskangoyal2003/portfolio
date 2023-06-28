import React from 'react'
import './Contact.css'
import  file from '../../images/my-cv.pdf'
const Contact = () => {
  return (
    <div id='contact'>
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className='sub-title'>Contact Me</h1>
            <p> <i className='fa fa-envelope-o'></i> &nbsp;itsmuskangoyal2003@gmail.com</p>
            <p><i className='fa fa-mobile'></i>&nbsp;7206046420</p>
            <div className='social-icons'>
             <a href="https://www.instagram.com/goyal___muskan/" target='_blank' rel='noreferrer'><i className='fab fa-instagram'></i></a> 
             <a href="https://www.linkedin.com/in/muskan-goyal-a29b85225/" target='_blank' rel='noreferrer'><i className='fab fa-linkedin'></i></a>
             </div>
            <a href={file}  download className='btn'>Download CV</a>

          </div>
          <div className="contact-right">
            <form>
             <input type="text" name='Name' placeholder='Your Name' required />
             <input type="email" name='email' placeholder='Your Email' required />
             <textarea name="Message" rows="6" placeholder='Your Message'></textarea>
             <button type='submit' className='btn btn2'>Submit</button>
            </form>
          </div>
        </div>
      </div>
     <div className="copyright">
      <p>Copyright &#169; Muskan, made with <i className='fas fa-heart'></i></p>
     </div>

    </div>
  )
}

export default Contact
