import React from 'react';
import ReactDOM from 'react-dom/client';
import Alumno from "./comp/Alumno";

const root = ReactDOM.createRoot(document.getElementById('root'));

//------------Variables-----------------//
const cuenta = true;
//-------------------------------------//

//------------Main---------------//
const jsx = (
  <>
    {cuenta === true ? (
      <>
        <Alumno/>
      </>
    ) : (
      <h1>Error</h1>
    )}
  </>
);
//-----------------------------//

//-------------Render JSX------------//
root.render(jsx);
//-----------------------------------//





