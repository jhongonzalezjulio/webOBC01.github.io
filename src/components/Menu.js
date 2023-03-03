import React from 'react';
import '../styles/Menu.css'
import logo from '../imagenes/logo.png'


function Menu() {
  return (
    <div className='contenedor-menu'>
      <div className='contenedor-imagen'>
        <img className='logo' src={logo} />
      </div>
      <nav className='menu'>
        <ul className='contlista'>
          <li className='listas'>Especializaciones</li>
          <li className='listas'>¿Eres una empresa?</li>
          <li className='listas'>Trabaja como Developer</li>
          <li className='listas'>¿Quieres ser profesor?</li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;