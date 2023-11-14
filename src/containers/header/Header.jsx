import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className='gpt3__header section__padding' id='home'>
    <div className='gpt3__header-content'>
      <h1 className='gradient__text'>
        Let&apos;s build something amazing with GPT-3 open AI
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
      <div className='gpt3__header-content__input'>
        <input type='email' placeholder='Your Email Address' />
        <button type='button'>get started</button>
      </div>
      <div className='gpt3__header-content__people'>
        <img src={people} alt='followers' />
        <p>1600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
    <div className='gpt3__header-illustration'>
      <img src={ai} alt='Illustration AI' />
    </div>
  </div>
);

export default Header;