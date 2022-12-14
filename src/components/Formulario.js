import React, { useState, Fragment } from "react";
import { cacularTotal,test } from "../helper";

const Formulario = (props) => {

  const { cantidad, guardarCantidad, plazo, guardadPlazo,total,guardarTotal,guardadCargando } = props;
  const [error, guardarError] = useState(false);

  const calcularPrestamo = (e) => {
    e.preventDefault();

    if (cantidad === 0 || plazo === "") {
      guardarError(true);
      return
    }

    guardarError(false);

    //habiltar espiner
    guardadCargando(true);

    setTimeout(()=>{
      const total =cacularTotal(cantidad,plazo);

      guardarTotal(total);

      //deshabilitar Spinner

      guardadCargando(false)
      
    },3000)


   
    

  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={(e) => guardarCantidad(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={(e) => guardadPlazo(parseInt(e.target.value))}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {(error)?<p className="error">Todos los capos son obligatorios</p>:""}
      
    </Fragment>
  );
};

export default Formulario;
