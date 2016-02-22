import React from 'react';
import FlatButton from '../buttons/flat-button';

export default function Hero() {
  return (
    <div className="jumbotron hero vertical-center">
      <div className='overlay'></div>
      <div className='container'>
        <h1>Help us Save our Shelter</h1>
        <h3>Keep Pflugerville pets in Pflugerville</h3>
        <br/>
        <a href="#help">
          <FlatButton
            primary
            rightIcon='pets'
            label='How to Help'/>
        </a>
      </div>
    </div>
  );
}
