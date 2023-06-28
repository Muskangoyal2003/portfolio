import React from 'react'
import './Navbar.css'
const Navbar = () => {
  
  return (
    <div>
      <nav className='navbar'>
        <div className="icon">PORTFOLIO</div>
        <ul className='nav-links'>
          <li><a href='#header'>Home</a></li>
          <li><a href='#about'> About</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
          {/* <i className='fas fa-times'></i> */}
        </ul>
        {/* <i className='fas fa-bars'></i> */}
      </nav>
    </div>
  )
}

export default Navbar
