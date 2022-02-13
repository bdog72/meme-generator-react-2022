//
//

import React from 'react';

import { memesData } from '../memeData';
import '../styles/Meme.css';

console.log(memesData);

export default function Meme() {
  function getNewImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }

  return (
    <main className='meme-main'>
      <div className='meme-form'>
        <input
          type='text'
          className='meme-form--input'
          placeholder='Top Text'
        />
        <input
          type='text'
          className='meme-form--input'
          placeholder='Bottom Text'
        />
        <button onClick={getNewImage} className='meme-form--button'>
          Get a new meme image
        </button>
      </div>
    </main>
  );
}
