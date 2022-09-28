import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name = 'Aldo Cova';
const apellido = 'Martinez'
const alumnos = ['Aldo', 'Alfredo', 'Dimas'];
const cuenta = true;
const jsx = (
  <>
    {cuenta === true ? (
      <>
        <h1 className='titulo' style={{color: 'blue'}}>Hola {name}</h1>
        <h1>Apellido: {apellido}</h1>
        <h2>Lista de amigos: </h2>
        <lu>
          {alumnos.map((nombre, i) => {
            return <li key={i}>{nombre}</li>;
          })}
        </lu>
      </>
    ) : (
      <h1>Error</h1>
    )}
  </>
);

root.render(jsx);

/*const compruebaCuenta =  (cuenta) => {
  if(cuenta === true){
    return jsx;
  }
  else{
    return <h2>Error</h2>
  }
}

root.render(compruebaCuenta(cuenta));*/




