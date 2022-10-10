import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Alumno from "./comp/Alumno";

const root = ReactDOM.createRoot(document.getElementById('root'));

//------------Main---------------//
const Jsx = () => {
  const [cuenta, cambiarSecion] = useState(true);
  const [cont, cambiarValor] = useState(0);
  return (
    <>
    {cuenta === true ? (
      <>
        <Alumno/>
        <button onClick={() => cambiarSecion(false)}>Cerrar sesión</button>
        <button onClick={() => cambiarValor(cont + 1)}>Contar 1</button>
        <button onClick={() => cambiarValor(cont - 1)}>Restar 1</button>
        <button onClick={() => cambiarValor(cont * 2)}>Multiplicar 2</button>
        <button onClick={() => cambiarValor(cont === 0)}>Resetar</button>
        <h2>{cont}</h2>
      </>
    ) : (
      <>
        <h1>Error</h1>
        <button onClick={() => cambiarSecion(true)}>Iniciar sesión</button>
      </>
    )}
  </>
  )
};
//-----------------------------//

//-------------Render JSX------------//
root.render(<Jsx/>);
//-----------------------------------//






