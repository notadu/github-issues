import React from 'react';
import PropTypes from 'prop-types';

import './IssuesList.scss';

const IssuesList = ({ issues }) => (
  <div className="issues-list">
    <table>
      <tr>
        <th>Number</th>
        <th>Title</th>
        <th>Created at</th>
      </tr>
      {issues.map(issue => (
        <tr key={issue.id}>
          <td>{issue.number}</td>
          <td>{issue.title}</td>
          <td>{new Date(issue.created_at).toLocaleDateString()}</td>
        </tr>
      ))}
    </table>
  </div>
);

IssuesList.propTypes = {
  issues: PropTypes.array,
};

export default IssuesList;