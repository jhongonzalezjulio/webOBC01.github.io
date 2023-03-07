import React from "react";
import '../styles/Flotante03.css'
import empresario from '../imagenes/empresario.png'

function Flotante03() {
    return (
        <div className="contenedor-flotante3">
            <div className="flotante-01">
                <img className="iconos" src={empresario} />
            </div>
            <div className="contenedor-parrafo">
                <span className="texto">Personalizable</span>
            </div>
        </div>
    );
} 

export default Flotante03;