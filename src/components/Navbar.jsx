import { Link, NavLink } from 'react-router-dom'
import Toggle from './Toggle'
import React from 'react'

function Navbar() {
  return (
    <div className="nav-container">
      <div className="header-box">
        <Link to="/" className="top-logo">
          <img src="SiliconLogo.svg" alt="silicon icon"/>
          <h1>Silicon</h1>
        </Link>
        <nav className="menu-container">
          <NavLink to="/Features">Features</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </nav>
      </div>
      <div className="header-box">
        <Toggle />
        <a href="#" className="btn-header">
          <img src="/profileicon.svg" alt="" />
          <span>Sign in / up</span>
        </a>
      </div>
    </div>
  )
}

export default Navbar