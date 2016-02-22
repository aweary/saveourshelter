import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
const {string} = PropTypes;

export default class FlatButton extends Component {

  render() {
    const {primary, label, onClick, rightIcon} = this.props;
    let className = classNames({
      'flat-button': true,
      'primary-button': primary,
    });
    className = `${className} ${this.props.className}`;
    console.log(className);
    return (
      <button
        onClick={onClick}
      className={className}>
        {label}
        {rightIcon && (
          <i className="button-right-icon material-icons">{rightIcon}</i>
        )}
      </button>
    )
  }
}


FlatButton.propTypes = {
  label: string,
  backgroundColor: string
}
