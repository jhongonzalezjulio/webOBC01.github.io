import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlockExample() {
  return (
    <div className="d-grid gap-2">
      <Button className='boton1' variant="primary" size="xs">
        Ir al campus
      </Button>
      <Button className='boton2' variant="outline-info" size="xs">
        Empieza ya
      </Button>
    </div>
  );
}

export default BlockExample;