import React from 'react';
const {Component} = React;
import Navigation from './components/navigation';
import Hero from './components/hero/index';
import ProblemSection from './sections/problem';
import HelpSection from './sections/help';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Hero/>
        <ProblemSection/>
        <HelpSection/>
      </div>
    )
  }
}
