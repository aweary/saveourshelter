import React, {Component} from 'react';
import NavItem from './item';
import palette from 'google-material-color';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null
    }
    this.setActive = this.setActive.bind(this);
  }

  setActive(label) {
    this.setState({active: label});
  }

  render() {
    return (
      <div className='navigation'>
        <NavItem
          href='#stats'
          active={this.state.active}
          onClick={this.setActive}
          label='Stats'/>
        <NavItem
          href='#help'
          active={this.state.active}
          onClick={this.setActive}
          label='Help'/>
        <NavItem
          href='#photos'
          active={this.state.active}
          onClick={this.setActive}
          label='Photos'/>
      </div>
    );
  }
}
export default Navigation;
