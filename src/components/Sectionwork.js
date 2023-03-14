import React from "react";
import '../styles/Sectionwork.css';
import vec1 from '../imagenes/vec1.jpg';
import vec2 from '../imagenes/vec2.jpg';
import vec3 from '../imagenes/vec3.jpg';


function SectionWork() {


  return (

    <div className="work-general">

      <div className="work-conten">

        <div className="vec1">
          <img className="imagenwork1" src={vec1} />
        </div>

        <div className="vec1">
          <img className="imagenwork2" src={vec2} />
        </div>

        <div className="vec1">
          <img className="imagenwork3" src={vec3} />
        </div>

      </div>

    </div>
    
  );
  
}

export default SectionWork;