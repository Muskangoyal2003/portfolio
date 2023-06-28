import React from 'react'
import './Portfolio.css'
import image5 from '../../images/portfolio.png'
import image2 from '../../images/chat-app.png'
import image3 from '../../images/text.png'
import image4 from '../../images/news.png'
import image6 from '../../images/jarvis.png'
import image1 from '../../images/work-5.png'


const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className="container">
        <h1 className="sub-title">Projects</h1>
        <div className="work-list">
          <div className="work">
            <img src={image1} alt="" />
            <div className="layer">
              <h3>BEING SOCIAL</h3>
              <p>It is a small CRUD app (Create, Read, Update and Delete) with some basic functions like sign up, login, logout, following other user, creating post, updating user section, viewing other users & their posts and user's own posts.
                <br/>
                Tech Used -Node.js,React.js,Express.js,HTML, CSS,Javascript & MongoDB
              </p>
            </div>
          </div> 
          <div className="work">
            <img src={image2} alt="" />
            <div className="layer">
              <h3>CHIT CHAT</h3>
              <p>A responsive app where multiple users can chat or interact easily.
                <br/><br/>
                Tech Used -Node.js,React.js,Express.js,HTML, CSS,Javascript & Socket.io
              </p>
            </div>
           </div>
           <div className="work">
            <img src={image4} alt="" />
            <div className="layer">
              <h3>NEWBASKET</h3>
              <p>It is a responsive app which provides the user all the news, categorywise.The data is fetched through News Api.
                <br/><br/>
                Tech Used - React.js,HTML,CSS,Javascript, Bootstrap
              </p>
            </div>
            </div>
            <div className="work">
            <img src={image3} alt="" />
            <div className="layer">
              <h3>TEXTUTILSELLA</h3>
              <p>It is a frontend project to count the no. of characters, measures typing speed of user, used to copy the text, delete the text and helps in uppercase & lowercase convertion too.
                <br/><br/>
                Tech Used -React.js,HTML,CSS,Javascript, Bootstrap
              </p>
            </div>
            </div>
            <div className="work">
            <img src={image5} alt="" />
            <div className="layer">
              <h3>PORTFOLIO</h3>
              <p>It's my personal portfolio website which shows all my skills, eduction, projects and contact information.
                <br/><br/>
                Tech Used -React.js,HTML,CSS,Javascript
              </p>
            </div>
          </div>
          <div className="work">
            <img src={image6} alt="" />
            <div className="layer">
              <h3>JARVIS</h3>
              <p>It is a Desktop Assistant.
              It can do various tasks such as wishing the user, searching over the wikipedia whatever the user asked for ,tells
            time ,can open various tabs on command ,etc.
                <br/><br/>
                Tech Used - python (based on a special module called SpeechRecognition) 
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio
