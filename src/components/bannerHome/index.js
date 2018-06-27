
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import banner from '../../img/banner.png';

export default class BannerHome extends Component {

  constructor(props){
    super(props);
  }

  render () {

    return (

      <div className='wrapper bannerHome'>
        <img src={banner} alt="landingTestHome" title="landingTestHome" />
      </div>

    );
  }
  
}
