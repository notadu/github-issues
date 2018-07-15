import React from 'react';
import PropTypes from 'prop-types';

import { alertConfig, DEFAULT } from '../../constants/alertConstants';

import './Alert.scss';

let timeout;

class Alert extends React.Component {

  componentDidMount() {
    timeout = setTimeout(() => this.props.onClick(false), 5000);
  }

  componentWillUnmount() {
    clearTimeout(timeout);
  }

  render() {
    const { type, message, onClick } = this.props;

    return (
      <div className={`alert ${alertConfig[type].className}`}>
        <button
          className="alert-btn"
          onClick={onClick.bind(null, false)}
        >
          &times;
        </button>
        <h2 className="alert-title">{alertConfig[type].title}</h2>
        <p>{message}</p>
      </div>
    );
  }
}

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  onClick: PropTypes.func,
};

Alert.defaultProps = {
  type: DEFAULT,
  message: '',
  onClick: null,
};

export default Alert;