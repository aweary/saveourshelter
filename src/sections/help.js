import React, {Component} from 'react';

export default class ProblemSection extends Component {
  render() {
    return (
      <div id='help' className='section'>
        <div className='content'>
        <h2>How to Help</h2>
          <p className='description'>
            On to be determined date the Pflugerville City Council will be discussing the possibility of shutting down the Pflugerville Animal Shelter. What can we do? Write, call and email the City Council! Tell them that we will not stand for this. Make your voice heard.
          </p>
        <div className='help-content'>
        <div className='row'>
          <div className='col-md-4'>
            <div className="media">
            <div className="media-body">
              <i className="material-icons">hearing</i>
              <h3 className="media-heading">Make your voice heard.</h3>
                <ul className='list-unstyled'>
                <li>Mayor Jeff Coleman - <a href='mailto:mayor@pflugervilletx.gov'>mayor@pflugervilletx.gov</a></li>
                <li>Wayne Cooper - <a href="mailto:council1@pflugervilletx.gov">council1@pflugervilletx.gov</a></li>
                <li>Brad Marshall - <a href="mailto:council2@pflugervilletx.gov">council2@pflugervilletx.gov</a></li>
                <li>Omar Pena - <a href="mailto:council3@pflugervilletx.gov">council3@pflugervilletx.gov</a></li>
                <li>Starlet Sattler - <a href="mailto:council4@pflugervilletx.gov">council4@pflugervilletx.gov</a></li>
                <li>Mike Heath - <a href="mailto:council5@pflugervilletx.gov">council5@pflugervilletx.gov</a></li>
                <li>            City Manager Brandon Wade -  <a href="mailto:citymanager@pflugervilletx.gov">citymanager@pflugervilletx.gov</a></li>
              </ul>
            </div>
          </div>
          </div>
          <div className='col-md-4'>
            <div className="media">
            <div className="media-body">
              <i className="material-icons">people</i>
              <h3 className="media-heading">Show your support.</h3>
              <p>
                Attend the Pflugerville City Council meetings and make your voice heard.
              </p>
            </div>
          </div>
          </div>
          <div className='col-md-4'>
            <div className="media">
            <div className="media-body">
              <i className="material-icons">assignment</i>
              <h3 className="media-heading">Sign the petition.</h3>
              <a href='https://www.change.org/p/stop-the-vote'>
                https://www.change.org/p/stop-the-vote
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }
}
