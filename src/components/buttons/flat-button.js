import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

const {string} = PropTypes;

export default class FlatButton extends Component {

  render() {
    const {primary, label, onClick} = this.props;
    const className = classNames({
      'flat-button': true,
      'primary-button': primary
    });
    return (
      <button
      onClick={onClick}
      className={className}>
        {label}
      </button>
    )
  }
}


FlatButton.propTypes = {
  label: string,
  backgroundColor: string
}
