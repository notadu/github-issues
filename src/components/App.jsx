import React from 'react';

import Main from './main/Main';
import Header from './header/Header';
import Footer from './footer/Footer';
import Alert from './alert/Alert';
import Loader from "./loader/Loader";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: false,
      isAlert: false,
      alert: {},
    };

    this.showAlert = this.showAlert.bind(this);
    this.showLoader = this.showLoader.bind(this);
  }

  showLoader(state) {
    this.setState({
      isFetching: state,
    });
  }

  showAlert(state, alert={}){
    this.setState({
      isAlert: state,
      alert,
    });
  }

  renderAlert() {
    const { isAlert, alert } = this.state;

    return isAlert &&
      <Alert
        type={alert.type}
        message={alert.message}
        onClick={this.showAlert}
      />;
  }

  renderLoader() {
    const { isFetching } = this.state;
    return isFetching && <Loader />;
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Main
          showAlert={this.showAlert}
          showLoader={this.showLoader}
        />
        <Footer/>
        {this.renderLoader()}
        {this.renderAlert()}
      </div>
    );
  }
}

export default App;