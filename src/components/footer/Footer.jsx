import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer className="app-footer">
    <div className="container">
      <p>Powered by&nbsp;
        <a
          href="https://developer.github.com/v3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github API
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;