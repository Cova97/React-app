import React from "react";

//---------Creacion de funcion tipo flecha---------//
const Titulo = ({alumno, matricula, color}) =>{
    return(
        <>
            <h1 className='titulo' style={{color : color}}>Hola {alumno} con ID {matricula}</h1>
        </>
    )
};
export default Titulo;
//------------------------------------------------//