import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Typed from 'react-typed'
import image from "../../images/background2.png"
const Home = () => {
  return (
     <div id ='header'>
      <div className="container">
      <Navbar/>
      <div className="header-text">
        <p>I'm Muskan</p>
        <Typed  className ='typed'strings ={['A web developer.',' A programmer.','A Tech Enthusiast']}
        typeSpeed ={150} backSpeed={100} loop/>
      </div>
      </div>
    </div>
  )
}

export default Home
