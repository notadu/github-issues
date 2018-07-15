import React from 'react';
import PropTypes from 'prop-types';

import IssuesSearchBar from './search/IssuesSearchBar';
import IssuesList from './list/IssuesList';
import Button from '../formElements/button/Button';
import Api from '../../api/Api';
import { ERROR, SUCCESS } from '../../constants/alertConstants';

const api = new Api();

class Issues extends React.Component {
  constructor() {
    super();
    this.state = {
      userRepo: '',
      itemsPerPage: '20',
      currentPage: 0,
      issues: [],
      showMore: false,
    };

    this.searchForIssues = this.searchForIssues.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  }

  setInitialState(callback) {
    this.setState({
      issues: [],
      currentPage: 0,
      showMore: false,
    }, () => callback());
  }

  searchForIssues() {
    this.setInitialState(this.fetchData);
  }

  fetchData() {
    const { userRepo, issues, currentPage, itemsPerPage } = this.state;
    const { showAlert, showLoader } = this.props;
    const page = currentPage + 1;
    let alert = {};

    showLoader(true);
    api.fetchIssues(userRepo, page, itemsPerPage)
      .then(response => {
        const newIssues = [...issues, ...response.data];
        if (!response.data.length) {
          alert.type = SUCCESS;
          alert.message = `But no issues found for repo ${userRepo}`;
        }
        this.setState({
          issues: newIssues,
          currentPage: page,
          showMore: /rel="next"/.test(response.headers.link),
        })
      })
      .catch(error => {
        alert.type = ERROR;
        alert.message = error.response.data.message || 'Something went wrong!';
      })
      .then(()=> showLoader(false))
      .then(() => showAlert(!!alert.type, alert));
  }

  renderSearchBar() {
    const { userRepo } = this.state;

    return (
      <IssuesSearchBar
        userRepo={userRepo}
        onChange={this.handleChange}
        onClick={this.searchForIssues}
      />
    );
  }

  renderIssues() {
    const { issues } = this.state;
    return !!issues.length && <IssuesList issues={issues} />;
  }


  render() {
    return (
      <div className="issues">
        {this.renderSearchBar()}
        {this.renderIssues()}
        {this.renderShowMoreButton()}
      </div>
    );
  }

  renderShowMoreButton() {
    const { showMore } = this.state;

    return showMore &&
      <Button
        value="Show more issues"
        onClick={this.fetchData}
      />;
  }
}

Issues.propTypes = {
  showLoader: PropTypes.func,
  showAlert: PropTypes.func,
};

export default Issues;