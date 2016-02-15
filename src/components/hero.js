import React from 'react';

export default function Hero() {
  return (
    <div className="jumbotron hero vertical-center">
      <div className='hero-overlay'></div>
      <div className='container'>
        <h1>Help us Save our Shelter</h1>
        <br/>
        <a href="#help">
          <button type="button" className="btn btn-info">How to Help</button>
        </a>
      </div>
    </div>
  );
}
