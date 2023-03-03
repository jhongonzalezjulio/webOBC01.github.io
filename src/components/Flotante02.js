import React from "react";
import '../styles/Flotante02.css'
import cronometro from '../imagenes/cronometro.png'

function Flotante02() {
    return (
        <div className="contenedor-flotante2">
            <div className="flotante-01">
                <img className="iconos" src={cronometro} />
            </div>
            <div className="contenedor-parrafo">
                <span className="texto">A tu Ritmo</span>
            </div>
        </div>
    );
}

export default Flotante02;