import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ value, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
  >
    {value}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;