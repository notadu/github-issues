import React from 'react';
import PropTypes from 'prop-types';

import Issues from '../issues/Issues';

import './Main.scss';

const Main = ({ showLoader, showAlert}) => (
  <div className="app-main">
    <div className="container">
      <Issues
        showLoader={showLoader}
        showAlert={showAlert}
      />
    </div>
  </div>
);

Main.propTypes = {
  showLoader: PropTypes.func,
  showAlert: PropTypes.func,
};

export default Main;