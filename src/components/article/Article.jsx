import React from 'react';
import './article.css';

const Article = ({ image, date, title, actions }) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-image'>
        <img src={image} alt='blog' />
      </div>
      <div className='gpt3__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>{actions}</p>
      </div>
    </div>
  );
};

export default Article;
