import React from "react";
import jovenes from '../imagenes/jovenes.png'
import '../styles/Section.css'

function Section() {
    return(
        <div className="cont-public">
            <div className="contenedor-imagen">
                <img 
                    className="jovenesimg"
                    src={jovenes}
                    alt='foto-jovenes'
                />
            </div>
            <div className="contenedor-texto">
                <h1 className="title">El Bootcamp gratuito<br></br>
                que se adapta a ti</h1>
                <p className="parrafo">Especialízate en desarrollo independientemente de tu nivel de conocimientos y experiencia, nosotros nos adaptaremos a tus objetivos.</p>
            </div>
        </div>
    );
}

export default Section;