
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import cotitulado from '../../img/cotitulado.png';
import cotitulado1 from '../../img/cotitulado1.png';
import cotitulado2 from '../../img/cotitulado2.png';
import group1 from '../../img/group1.png';
import group2 from '../../img/group2.png';
import group3 from '../../img/group3.png';
import group4 from '../../img/group4.png';


export default class ContentPage extends Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('go to link');
  }

  render () {

    return (

      <div className='wrapper'>

        <div className='titleSection'>
          <h2>El Centro</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        </div>

        <div className='wrapperBoxes'>

          <div className='boxBig' onClick={this.handleClick}>
            <img src={cotitulado} alt="landingTestHome" title="landingTestHome" />
            <div className='boxBig-links'>
              <h4>Lorem ipsum</h4>
              <p className='subtitle'>Lorem dolor sit amet, consectetur adipiscing, sed do eiusmod</p>
              <i class="arrow right"></i>
            </div>
          </div>
          <div className='boxBig' onClick={this.handleClick}>
            <img src={cotitulado1} alt="landingTestHome" title="landingTestHome" />
            <div className='boxBig-links'>
              <h4>Lorem ipsum</h4>
              <p className='subtitle'>Lorem dolor sit amet, consectetur adipiscing, sed do eiusmod</p>
              <i class="arrow right"></i>
            </div>
          </div>
          <div className='boxBig' onClick={this.handleClick}>
            <img src={cotitulado2} alt="landingTestHome" title="landingTestHome" />
            <div className='boxBig-links'>
              <h4>Lorem ipsum</h4>
              <p className='subtitle'>Lorem dolor sit amet, consectetur adipiscing, sed do eiusmod</p>
              <i class="arrow right"></i>
            </div>
          </div>

        </div>
      
        <div className='titleSection'>
          <h2>Trámites e información</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        </div>

        <div className='wrapperBoxes'>

          <div className='boxSmall'>
            <img src={group1} alt="landingTestHome" title="landingTestHome" />
            <div className='boxSmall-title'>
              <h4>Lorem ipsum</h4>
              <p className='subtitle subtitle--small'>Lorem dolor sit amet</p>
            </div>
          </div>
          <div className='boxSmall'>
            <img src={group2} alt="landingTestHome" title="landingTestHome" />
            <div className='boxSmall-title'>
              <h4>Lorem ipsum</h4>
              <p className='subtitle subtitle--small'>Lorem dolor sit amet</p>
            </div>
          </div>
          <div className='boxSmall'>
            <img src={group3} alt="landingTestHome" title="landingTestHome" />
            <div className='boxSmall-title'>
              <h4>Lorem ipsum</h4>
              <p className='subtitle subtitle--small'>Lorem dolor sit amet</p>
            </div>
          </div>
          <div className='boxSmall'>
            <img src={group4} alt="landingTestHome" title="landingTestHome" />
            <div className='boxSmall-title'>
              <h4>Lorem ipsum</h4>
              <p className='subtitle subtitle--small'>Lorem dolor sit amet</p>
            </div>
          </div>

        </div>
      
      </div>

    );
  }
  
}
