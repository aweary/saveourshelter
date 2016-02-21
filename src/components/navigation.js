import React from 'react';
import FlatButton from './buttons/flat-button';
import palette from 'google-material-color';

function Navigation() {
  return (
    <div className='navigation'>
      <a href='#problem'>
      <FlatButton label='Our Problem'/>
      </a>
      <FlatButton label='Stats'/>
      <FlatButton label='Photos'/>
    </div>
  );
}

export default Navigation;
