import React from "react";

const Titulo = ({alumno, matricula}) =>{
    return(
        <>
            <h1 className='titulo' style={{color: 'blue'}}>Hola {alumno} con ID {matricula}</h1>
        </>
    )
};

export default Titulo;