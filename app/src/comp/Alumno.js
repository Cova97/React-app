import React from "react";
import Titulo from "./Titulo";

//-----------Creacion de funcion tipo flecha------------//
const Alumno = () => {
    const alumnos = ['Aldo', 'Alfredo', 'Dimas', 'Linares', 'Juan Pa'];
    return(
    <>
        <h1 className="titulo" style={{color:'magenta'}}>BIENVENIDO</h1>
        <Titulo alumno = "Aldo" matricula = "186223" color="blue"/>
        <h2 className="lista" style={{color: 'red'}}>Lista de alumnos:</h2>
        <ul>
            {alumnos.map((nombre, i) => {
            return <Titulo key={i} alumno={nombre} matricula={i} color="purple"/>;
            })}
        </ul>
    </>
    )
};  
export default Alumno;
  //---------------------------------------------------//