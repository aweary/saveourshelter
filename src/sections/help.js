import React, {Component} from 'react';

export default class ProblemSection extends Component {
  render() {
    return (
      <div id='help' className='section'>
        <div className='content'>
        <h3><i className="material-icons">question_answer</i></h3>
        <h2>How to Help</h2>
        <div className='help-content'>
        <div className='row'>
          <div className='col-md-4'>
            <div className="media">
            <div className="media-body">
              <h3 className="media-heading">Make your voice heard.</h3>
            </div>
          </div>
          </div>
          <div className='col-md-4'>
            <div className="media">
            <div className="media-body">
              <h3 className="media-heading">Show your support.</h3>
            </div>
          </div>
          </div>
          <div className='col-md-4'>
            <div className="media">
            <div className="media-body">
              <h3 className="media-heading">Sign the petition.</h3>
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
