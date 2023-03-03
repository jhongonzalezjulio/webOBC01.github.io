import React from "react";
import padlock from '../imagenes/padlock.png'
import '../styles/Flotante01.css'



function Flotantes() {
    return(
        <div className="contenedor-flotantes">
            <div className="flotante-01">
                <img className="iconos" src={padlock} />
            </div>
            <div className="contenedor-parrafo">
            <span className="texto">Sin compromisos</span>
            </div>
        </div>
    );
}

export default Flotantes;