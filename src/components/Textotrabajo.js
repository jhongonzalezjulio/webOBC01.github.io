import React from "react";
import '../styles/Textotrabajo.css';

function Textotrabajo() {

    return(

        <div className="contenedor-de-textos">
        <div className="contparra"><h1 className="texto-work">Te ayudamos a encontrar trabajo</h1>
        <p className="parra">
          A lo largo de tu formación recibirás asesoramiento<br></br>
          para mejorar tu CV y te prepararemos para realizar <br></br> 
          entrevistas con nuestras empresas colaboradoras.<br></br>
          Esta formación es gratuita para ti y NO se te descontará <br></br> 
          nada del salario de la oferta de trabajo que consigas.
        </p>
        </div>
        <div className="botonres">

          <button className="botons">
            Empieza ya
          </button>

        </div>
      </div>
    );
}

export default Textotrabajo;