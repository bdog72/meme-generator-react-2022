//
//

import React from 'react';

import '../styles/Header.css';
import logo from '../images/troll-face.png';

export default function Header() {
  return (
    <header className='header-container'>
      <div className='header-inner-container1'>
        <img src={logo} alt='logo' />
        <h1>Meme Generator</h1>
      </div>
    </header>
  );
}
