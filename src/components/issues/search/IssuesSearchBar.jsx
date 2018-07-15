import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../formElements/input/Input';
import Button from '../../formElements/button/Button';

import './IssuesSearchBar.scss';

const IssuesSearchBar = ({ userRepo, onClick, onChange }) => (
  <div className="issues-search-bar">
    <Input
      placeholder="username/reponame"
      name="userRepo"
      value={`${userRepo}`}
      onChange={onChange}
    />
    <Button
      disabled={!userRepo}
      onClick={onClick}
      value="Search"
    />
  </div>
);

IssuesSearchBar.propTypes = {
  itemsPerPage: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  userRepo: PropTypes.string,
};

export default IssuesSearchBar;