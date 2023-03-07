import React from "react";
import '../styles/Sectionwork.css';

function SectionWork() {
    return (

        <div className="word-conten">
            <h1 className="texto-word">Te ayudamos a encontrar trabajo</h1>
            <p className="parra">
                A lo largo de tu formación recibirás asesoramiento para mejorar tu CV y te prepararemos para realizar entrevistas con nuestras empresas colaboradoras.<br></br>
                Esta formación es gratuita para ti y NO se te descontará nada del salario de la oferta de trabajo que consigas.
            </p>
            <div className="botonres">
                <button className="botons">
                    Empieza ya
                </button>
            </div>
        </div>
    );
}

export default SectionWork;