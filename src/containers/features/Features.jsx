import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in a rapid blush.',
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-header'>
        <h1 className='gradient__text'>
          The future is now and you just need to realize it. Step into future
          today & make it happen.
        </h1>
        <p>Request early access to get started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((feature, idx) => (
          <Feature
            title={feature.title}
            text={feature.text}
            key={feature.title + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
