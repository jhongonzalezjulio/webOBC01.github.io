import React from "react";
import empresaimg from '../imagenes/empresaimg.jpg';
import '../styles/Section05.css';
import icon01 from '../imagenes/programacionicono.png';
import icon02 from '../imagenes/rotacion.png';
import icon03 from '../imagenes/reloj.png';


function Section05() {

    return (
        <div className="contenedor-empresas">



            <div className="iconos-empresas">
                <div className="numero01">
                    <img
                        className="icono01"
                        src={icon01}
                    />
                    <h2 className="textempre">Desarrolladores comprometidos</h2>
                </div>
                <div className="numero02">
                    <img
                        className="icono02"
                        src={icon02}
                    /> 
                    <h2 className="textempre">Elimina la rotación</h2>
                    </div>
                <div className="numero03">
                    <img
                        className="icono03"
                        src={icon03}
                    />
                    <h2 className="textempre">Desarrolladores en 1 semana</h2>
                </div>
                <div className="cajaboton">
                    <button className="botonempresa">
                        Contrata Desarrolladores
                    </button>
                </div>

            </div>
        </div>
    );

}

export default Section05;