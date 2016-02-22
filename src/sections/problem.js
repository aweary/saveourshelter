import React, {Component} from 'react';

export default class ProblemSection extends Component {
  render() {
    return (
      <div id='problem' className='section'>
        <div className='content'>
        <h3><i className='material-icons'>report_problem</i></h3>
        <h2>Our Problem</h2>
        <p className='description'>
          <b><span className='emphasis'>The Pflugerville City Council</span> is preparing to vote to close the existing shelter in Pflugerville and partner with the Williamson County (WILCO) Animal Shelter.</b> They will be investing over $2 million dollars of our tax money to expand the WILCO shelter to accommodate the additional animals. The city will also contribute approx. $200,000-300,000 per year for maintenance. After the bond initiative for a new shelter was narrowly defeated last November, the city council promised to upgrade the existing facilities to meet the needs of the shelter. A $1.8 million dollar building was proposed on the existing site, which would house the kennels for the animals as well as storage and grooming areas. Now the city council is planning on abandoning the shelter, along with their promises, in an attempt to make their problem go away. The residents of Pflugerville need to have a say in this decision. The WILCO shelter is over 15 miles away for most Pflugerville residents, which would greatly reduce animal reclaims and stray drop-offs. The Friends of the Pflugerville Animal Shelter want your help in letting our city council know that they are not acting in the best interest of the city and its residents.
        </p>
      </div>
    </div>
    )
  }
}
