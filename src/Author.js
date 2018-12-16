import React from 'react';
import './Author.css';
import { allCaps } from './helpers/stringHelper.js'

const Author = (props) => {
  return (
    <div className='author-info'>
      <img src={props.authImg} className='author-image' />
      <div className='author-text'>
        <h4>{allCaps(props.authName)}</h4>
        <h4>{props.estTime} read</h4>
      </div>
    </div>
  )
}

export default Author;
