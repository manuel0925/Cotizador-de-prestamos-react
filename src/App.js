import React,{Fragment,useState} from 'react'
import './App.css';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {

  const [cantidad,guardarCantidad] = useState(0);
  const [plazo,guardadPlazo] = useState("");
  const [total,guardadTotal] = useState(0);
  const [cargando,guardadCargando] = useState(false);

  let componente;
  if(cargando){
    componente = <Spinner/>
  }else if (total === 0){
    componente= <Mensaje/>
  }else{
    componente = <Resultado
          total={total}
          plazo={plazo}
          cantidad={cantidad}  
    />
  }
  return (
    <Fragment>
      <Header
        titulo="Cotizador de prestamos"
        descripcion="Utiliza el formulario y obten una contizacion"
      />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardadPlazo={guardadPlazo}
          total={total}
          guardarTotal={guardadTotal}
          guardadCargando={guardadCargando}
        />

        <div className="mensajes">
          {componente}
        </div>

        {/* <p>Total a pagarl: $RD {total}</p> */}
      </div>
    </Fragment>
  );
}

export default App;
