import React from "react";
import linkedin from '../imagenes/linkedin.png';
import twitter from '../imagenes/twitter.png';
import instagram from '../imagenes/instagram.png';
import twitch from '../imagenes/twitch.png';
import '../styles/Botonvar.css';

function Botonvar() {
    return (
        <div className="contenedorluz">

            <ul className="listiconluz">
                <li className="listasluz">
                    <a href="#">
                        <img className="imagenred" src={linkedin} />
                    </a>
                </li>
                <li className="listasluz">
                    <a href="#">
                        <img className="imagenred" src={twitter} />
                    </a>
                </li>
                <li className="listasluz">
                    <a href="#">
                        <img className="imagenred" src={instagram} />
                    </a>

                </li>
                <li className="listasluz">
                    <a href="#">
                        <img className="imagenred" src={twitch} />
                    </a>
                </li>
            </ul>
        </div>

    );
}
export default Botonvar;