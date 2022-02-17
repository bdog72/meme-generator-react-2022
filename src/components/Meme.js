//
//

import React from 'react';
import '../styles/Meme.css';
import { memesData } from '../memesData';

console.log(memesData);

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState('');

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main className='meme'>
      <div className='meme--form'>
        <input
          type='text'
          placeholder='Top Text'
          className='meme--form-input'
        />
        <input
          type='text'
          placeholder='Bottom Text'
          className='meme--form-input'
        />
        <button onClick={getMemeImage} className='meme--form-button'>
          New Image
        </button>
        <img className='meme--form-image' src={memeImage} alt='' />
      </div>
    </main>
  );
}
