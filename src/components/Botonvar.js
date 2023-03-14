import React from "react";
import linkedin from '../imagenes/linkedin.png';
import twitter from '../imagenes/twitter.png';
import instagram from '../imagenes/instagram.png';
import twitch from '../imagenes/twitch.png';
import facebook from '../imagenes/facebook.png';
import tiktok from '../imagenes/tik-tok.png';
import youtube from '../imagenes/youtube.png';
import '../styles/Botonvar.css';

function Botonvar() {
    return (
        <div className="contenedorpie">
            <div className="contenedorluz">
                <ul className="listaconluz">
                    <li className="listasluz">
                        <a className="linklist" href="#">
                            <img className="imagenred" src={linkedin} />
                        </a>
                    </li>
                    <li className="listasluz">
                        <a className="linklist" href="#">
                            <img className="imagenred" src={twitter} />
                        </a>
                    </li>
                    <li className="listasluz">
                        <a className="linklist" href="#">
                            <img className="imagenred" src={instagram} />
                        </a>

                    </li>
                    <li className="listasluz">
                        <a className="linklist" href="#">
                            <img className="imagenred" src={twitch} />
                        </a>
                    </li>
                    <li className="listasluz">
                        <a className="linklist" href="#">
                            <img className="imagenred" src={facebook} />
                        </a>
                    </li>
                    <li className="listasluz">
                        <a className="linklist" href="#">
                            <img className="imagenred" src={tiktok} />
                        </a>

                    </li>
                    <li className="listasluz">
                        <a className="linklist" href="#">
                            <img className="imagenred" src={youtube} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="politicas">

                <ul className="listaul">

                    <h2 className="textpolitic">Politicas</h2>

                    <li className="elementlist">
                        <a className="linkpiloticas">Politica de cookies</a>
                    </li>

                    <li className="elementlist">
                        <a className="linkpiloticas">Politica de privacidad</a>
                    </li>

                    <li className="elementlist">
                        <a className="linkpiloticas">Términos y condiciones</a>
                    </li>

                </ul>
            </div>

            <div className="explora">

                <ul className="exploraul">

                    <li className="explolist">
                        <a className="linkexplore">Acceso al campus</a>
                    </li>

                    <li className="explolist">
                        <a className="linkexplore">Trabaja de Desarrollador</a>
                    </li>
                </ul>

            </div>

        </div>

    );
}
export default Botonvar;