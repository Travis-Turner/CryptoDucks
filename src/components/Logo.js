import React from 'react';
import LogoDuck from '../images/logo.png';
import './styles/Logo.css';

function Logo () {
  return (
    <div className="logo">
      <img className="logo__image" src={LogoDuck} alt="CryptoDucks logo"/>
    </div>
  )
}

export default Logo;