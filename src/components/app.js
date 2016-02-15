import React from 'react';
const {Component} = React;
import Navigation from './navigation';
import Hero from './hero';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Hero/>
      </div>
    )
  }
}
