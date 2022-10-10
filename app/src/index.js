import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Alumno from "./comp/Alumno";

const root = ReactDOM.createRoot(document.getElementById('root'));

//------------Main---------------//
const Jsx = () => {
  const [cuenta, cambiarSecion] = useState(true);
  return (
    <>
    {cuenta === true ? (
      <>
        <Alumno/>
        <button onClick={() => cambiarSecion(false)}>Cerrar sesión</button>
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










