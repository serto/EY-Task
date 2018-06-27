
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FixTopInfo from '../fixedTopInfo'

import Header from '../header'
import BannerHome from '../bannerHome'
import ContentPage from '../contentPage'
import Footer from '../footer'

export default class LandingPage extends Component {

  constructor(props){
    super(props);
  }

  render () {

    return (
      <div >

      	<FixTopInfo />

        <Header />

        <BannerHome />

        <ContentPage />

        <Footer />

      </div>
    );
  }
  
}
