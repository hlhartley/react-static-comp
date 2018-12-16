import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import './App.css';

const stories = [
  {
    img: './story1.jpg',
    title: 'Winning at Fonts',
    desc: 'or, Why you should care about typography',
    authImg: './louisa.png',
    authName: 'Louisa',
    estTime: '2 min',
    popCulture: true,
  },
  {
    img: './story2.jpg',
    title: 'Hoodlums: a dissertation',
    desc: 'Examining villains in modern storytelling',
    authImg: './alternate.png',
    authName: 'Nathaniel',
    estTime: '10 min',
    popCulture: false,
  },
  {
    img: './story3.jpg',
    title: 'Halloween is a year-round sport',
    desc: 'Those who say otherwise just aren\'t trying hard enough.',
    authImg: './leta.png',
    authName: 'Leta',
    estTime: '8 min',
    popCulture: false,
  },
  {
    img: './story4.jpg',
    title: 'How to Improve Learning and Classroom Engagement with Humor',
    desc: 'Okay, so first of all, everybody knows fart jokes are hilarious ...',
    authImg: './pamela.png',
    authName: 'Pamela',
    estTime: '11 min',
    popCulture: true,
  }
]

const popCultureStories = stories.filter((story) => {
  return story.popCulture;
})

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Stories  storiesTitle="Today's Top Stories"
                stories={stories} />
      <Stories  storiesTitle="Pop Culture"
                stories={popCultureStories} />
      <Footer />
    </div>
  );
}

export default App;
