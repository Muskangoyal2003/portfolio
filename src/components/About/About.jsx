import React, { useState } from 'react'
import photo from '../../images/pic.png'
import './About.css'

const About = () => {
 
  const [toggleState,setToggleState] = useState(1)


  const toggleTab=(index)=>{
    setToggleState(index)
  }


  return (
    <div id="about">
    <div className='container'>
      <div className="row">
        <div className="about-col-1">
          <img src={photo} alt="alt" className='image' />
        </div>
        <div className="about-col-2">
          <h1 className='sub-title'>About Me</h1>
          <p>A self-built, sincere & passionate learner always wants to explore new things and learn more to enhance skills. Some of my interests in technology as well as extra-curricular activities include problem solving (Data Structures and Algorithms), web development, creative writing, management, public speaking, listening music, playing chess, dancing, media reporting and travelling.</p>
          <div className='tab-titles'>
            <p className={toggleState === 1?'tab-links active-link':'tab-links' }  onClick={()=>toggleTab(1)}>Skills</p>
            <p className={toggleState === 2?'tab-links active-link':'tab-links' } onClick={()=>toggleTab(2)}>Education</p>
          </div>


          <div className={toggleState===1?'tab-contents active-tab':'tab-contents'} id='skills'>
            <ul>
              <li>
                <span>FRONTEND DEVELOPMENT</span>
                <br/>Html, Css, Javascript, Bootstrap, React.js, Github
              </li>
              <li>
                <span>BACKEND DEVELOPMENT</span>
                <br/>Node.js, Express.js, MongoDB, Socket.io
              </li>
              <li>
                <span>LANGUAGES</span>
                <br />C++, Python, C
              </li>
              <li>
                <span>PROBLEM SOLVING & CORE SUBJECTS</span>
                <br />
                DSA, OS, DBMS, SQL, CN
              </li>
            </ul>
          </div>


          <div className={toggleState===2?'tab-contents active-tab':'tab-contents'} id='education'>
            <ul>
              <li>
                <span>2020-24</span>
                <br/>B.Tech from NIT Kurukshetra
              </li>
              <li>
                <span>2019-20</span>
                <br/>Higher Secondary Education from Thukral Public School
              </li>
              <li>
                <span>2017-18</span>
                <br/>Secondary Education from BRCM Public School
              </li>
            </ul>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default About
