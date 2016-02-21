import React from 'react';
import FlatButton from '../buttons/flat-button';
import HeroImage from '../../../images/hero.jpg';

export default function Hero() {

  const style = {
    backgroundImage: `url(${HeroImage})`
  }

  return (
    <div
      style={style}
      className="jumbotron hero vertical-center">
      <div className='overlay'></div>
      <div className='container'>
        <h1>Help us Save our Shelter</h1>
        <br/>
        <a href="#help">
          <FlatButton
            primary
            label='How to Help'/>
        </a>
      </div>
    </div>
  );
}
