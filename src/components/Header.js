//
//

import React from 'react';

import logoImage from '../images/troll-face.png';

import '../styles/Header.css';

export default function Header() {
  return (
    <header className='header'>
      <img className='header--image' src={logoImage} alt='' />
      <h1 className='header--title'>Meme Generator</h1>
    </header>
  );
}
