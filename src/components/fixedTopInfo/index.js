
import React, { Component } from 'react';

export default class FixTopInfo extends Component {

  constructor(props){
    super(props);

    this.state = {
      idioma: 'Español'
    } 

    this.selectLang = this.selectLang.bind(this);
  }

  selectLang(e) {
    const {idioma} = this.state

    const idiomaNew = (idioma=='Español') ? 'Inglés' : 'Español'  

    this.setState({idioma: idiomaNew})
  }

  render () {

    const { idioma } = this.state

    return (

      <div className='fixTop'>
    	  <div className='wrapper-fixTop'>
    	    <p className='actionCall'>Llámanos <span className='phone'></span> (+34) 555 55 55</p>

          <div className='rightMenu'>
      	    <ul className='topMenu'>
      	      <li><a href=''><span className='buscar'></span>Buscar</a></li>
              <li><a href=''><span className='biblioteca'></span>Biblioteca</a></li>
              <li><a href=''><span className='correo'></span>Correo</a></li>
              <li><a href=''><span className='areapersonal'></span>Area personal</a></li>
      	    </ul>
            
            <div className='langs'>
              <p>{idioma} <i class="arrow bottom"></i></p>
              <ul>
                <li onClick={this.selectLang}>Español</li>
                <li className='langs-split'> / </li>
                <li onClick={this.selectLang}>Inglés</li>
              </ul>
            </div>

          </div>

    	  </div>
      </div>

    );
  }
  
}
