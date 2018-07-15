import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ name, value, placeholder, onChange }) => (
  <input
    placeholder={placeholder}
    name={name}
    value={value}
    type="text"
    onChange={onChange}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;