import React, {Component} from 'react';
import FlatButton from '../buttons/flat-button';
import classNames from 'classnames';

export default class NavItem extends Component {
  render() {
    const {href, active, label, onClick} = this.props;
    const className = classNames({
      'nav-item': true,
      'active-nav-item': active === label
    })
    console.log({className, active, label});
    return (
      <a href={href}>
      <FlatButton
        className={className}
        active={active}
        onClick={onClick.bind(null, label)}
        label={label}/>
      </a>
    )
  }
}
