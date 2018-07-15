import axios from 'axios';
import { GITHUB_ENDPOINT } from './endpoints';

class Api {
  fetchIssues(userRepo, page, count) {
    return axios.get(`${GITHUB_ENDPOINT}repos/${userRepo}/issues?page=${page}&per_page=${count}&state=all`);
  }
}

export default Api;

