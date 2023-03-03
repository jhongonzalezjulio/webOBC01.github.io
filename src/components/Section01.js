import React from "react";
import layer from '../imagenes/layers.png'
import '../styles/Section01.css'
function Section01() {
    return(
        <div className="contenedor-formacion">
            <h1>Te preparamos para diversos puestos</h1>
            <div className="c1">
                <div className="icon">
                    <img src={layer} className='imagen-icon' />
                </div>
            </div>
            <div className="c2"></div>
            <div className="c3"></div>
        </div>
    );
}

export default Section01;