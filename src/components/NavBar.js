import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import './styles/NavBar.css';


function NavBar () {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Logo/>
      </div>
      <ul className="navbar__nav">
        <li><Link className="navbar__link">Ducks</Link></li>
        <li><Link className="navbar__link">My Profile</Link></li>
        <li><Link className="navbar__link">Sign out</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;