import React from 'react';
import Article from '../../components/article/Article';
import { articleData, blog01 } from './import';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__margin' id='blog'>
      <div className='gpt3__blog-title'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container-groupA'>
          <Article
            image={blog01}
            date='Sep 26, 2021'
            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
            actions='Read Full Article'
          />
        </div>
        <div className='gpt3__blog-container-groupB'>
          {articleData.map((item, index) => (
            <Article
              image={item.image}
              date={item.date}
              title={item.title}
              actions={item.actions}
              key={item.image + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
