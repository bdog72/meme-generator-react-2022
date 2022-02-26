//
//

import React from 'react';

import '../memesData';
// import { memesData } from '../memesData';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bgw.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function getMemeImage() {
    // const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className='form'>
        <input
          type='text'
          placeholder='Top Text'
          className='form--input'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Bottom Text'
          className='form--input'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className='form--button'>
          Get A New Meme Image
        </button>
      </div>

      <div className='meme'>
        <img className='meme--image' src={meme.randomImage} alt='' />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
