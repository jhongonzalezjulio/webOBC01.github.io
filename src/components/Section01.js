import React from "react";
import layer from '../imagenes/layers.png'
import designer from '../imagenes/uxd.png'
import servidores from '../imagenes/servidores.png'
import programadora from '../imagenes/programadora.png'
import '../styles/Section01.css'
function Section01() {
    return (
        <div className="contenedores">
           
            <div>
            <img className="imagencs" src={programadora} />
            </div>
            <div className="cs">
            <h2 className='tituloabsoluto'>Te preparamos para que te conviertas en </h2>
                <div className="c1">
                    <div className="icon">
                    <h2 className="mencion">FulStack Developer</h2>
                        <img src={layer} className='layerimg' />
                        <span className="textospan">| Git</span>
                        <span className="textospan">| JavaScript</span>
                        <span className="textospan">| Python</span>
                        <span className="textospan">| Angular</span>

                    </div>
                </div> 
                <div className="c2">
                <h2 className="mencion">Front-End Developer</h2>
                    <div className="icon">
                        <img src={designer} className='layerimg' />
                        <span className="textospan">| React</span>
                        <span className="textospan">| HTML y css</span>
                        <span className="textospan">| Angular</span>
                        <span className="textospan">| JavaScript</span>
                    </div>
                </div>
                <div className="c3">
                <h2 className="mencion">Back-End Developer</h2>
                    <div className="icon">
                        <img src={servidores} className='layerimg' />
                        <span className="textospan">| Git</span>
                        <span className="textospan">| Spring</span>
                        <span className="textospan">| Java</span>
                        <span className="textospan">| JUnit</span>
                        <span className="textospan">| Python</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section01;