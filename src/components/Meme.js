//
//

import React from 'react';

import '../styles/Meme.css';

export default function Meme() {
  return (
    <main className='meme-main'>
      <form className='meme-form'>
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
        <button className='meme-form--button'>Get a new meme image</button>
      </form>
    </main>
  );
}
