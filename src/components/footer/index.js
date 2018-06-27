
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {

  constructor(props){
    super(props);
  }

  render () {

    return (

      <footer>

        <div className='wrapper'>
        
          <div className='footer-info'>
            <div className='footer-info-box'>
              <p>Dirección</p>
              <p>
                Lorem ipsum dolor, 30<br />
                35000 Las Palmas de Gran Canaria<br />
                España
              </p>
            </div>
            <div className='footer-infoBox'>
              <p>Contacto</p>
              <p>E-mail: ipsum@ipsum.es</p>
            </div>
          </div>

          <ul className='footer-map'>
            <li><a href='#' title=''>Accesibilidad</a></li>
            <li><a href='#' title=''>Mapa Web</a></li>
            <li><a href='#' title=''>Tablón de anuncios</a></li>
            <li><a href='#' title=''>Aviso Legal</a></li>
            <li><a href='#' title=''>Protección de datos</a></li>
            <li><a href='#' title=''>Ayuda</a></li>
          </ul>

        </div>

      </footer>

    );
  }
  
}
