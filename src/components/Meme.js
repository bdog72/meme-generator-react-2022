//
//

import React from 'react';
import '../styles/Meme.css';
import { memesData } from '../memesData';
console.log(memesData);

export default function Meme() {
  let url;
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    console.log(url);
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
          Get a new meme Image
        </button>
        <img src={url} alt='' />
      </div>
    </main>
  );
}
