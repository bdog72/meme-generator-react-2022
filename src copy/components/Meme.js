//
//

import React from 'react';
import '../styles/Meme.css';
import { memesData } from '../memesData';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bgw.jpg',
  });

  /* eslint-disable no-unused-vars */
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
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
        <div className='meme'>
          <img className='meme--form-image' src={meme.randomImage} alt='' />
        </div>
      </div>
    </main>
  );
}
