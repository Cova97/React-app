import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Alumno from "./comp/Alumno";
import FormularioLogin from './comp/Formulario';

const root = ReactDOM.createRoot(document.getElementById('root'));

//------------Main---------------//
const Jsx = () => {
  const [cuenta, cambiarSecion] = useState(false);
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
        <h1>Inicia sesión</h1>
        <FormularioLogin cambiarSecion={cambiarSecion}/>
        
      </>
    )}
  </>
  )
};
//-----------------------------//

//-------------Render JSX------------//
root.render(<Jsx/>);
//-----------------------------------//






