import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './components/landingPage'

import './scss/main.scss';

class AppBoilerplate extends Component {
  render() {
  
    return(
      <LandingPage />
    );
  }
}

ReactDOM.render(
  <AppBoilerplate />,
	document.getElementById('app')
);
