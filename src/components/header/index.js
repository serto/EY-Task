
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from '../../img/logo.png';

export default class Header extends Component {

  constructor(props){
    super(props);
  }

  render () {

    return (

      <header>
        <div className='wrapper'>
          
          <img src={logo} alt='' className='logoSite' />

          <ul className='header-menu header-menu--socialLinks'>
            <li className='iconSocial iconTwitter'><a href=''></a></li>
            <li className='iconSocial iconLinkedin'><a href=''></a></li>
            <li className='iconSocial iconGoogle'><a href=''></a></li>
            <li className='iconSocial iconFacebook'><a href=''></a></li>
            <li className='iconSocial iconYoutube'><a href=''></a></li>
          </ul>
          
          <hr />

          <ul className='header-menu header-menu--linksSite'>
            <li><a href=''>INICIO</a></li>
            <li><a href=''>TRÁMITES EN LÍNEA</a></li>
            <li><a href=''>VERIDICACIÓN DE DOCUMENTOS</a></li>
            <li><a href=''>REQUISITOS TÉCNICOS</a></li>
            <li><a href=''>CONTACTO</a></li>
          </ul>
        </div>
      </header>

    );
  }
  
}
