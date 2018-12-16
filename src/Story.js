import React from 'react';
import Author from './Author.js';
import Button from './Button';
import { allCaps } from './helpers/stringHelper.js'
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.img} />
      <div className='story-info'>
        <div>
          <h3>{allCaps(props.title)}</h3>
          <p>{props.desc}</p>
        </div>
        <Author
          authImg={props.authorImage} 
          authName={props.authorName}
          estTime={props.estimatedTime}
        />
      </div>
    </div>
  )
}

export default Story;
