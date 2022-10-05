import React from "react";
import Titulo from "./Titulo";

//-----------Creacion de funcion tipo flecha------------//
const Alumno = () => {
    const apellido = " Cova Martinez";
    const alumnos = ['Aldo', 'Alfredo', 'Dimas'];
    return(
    <>
        <Titulo alumno = "Yoli" matricula = "23524"/>
        <h1>Apellido: {apellido}</h1>
        <h2>Lista de amigos: </h2>
        <lu>
            {alumnos.map((nombre, i) => {
            return <li key={i}>{nombre}</li>;
            })}
        </lu>
    </>
    )
};  

export default Alumno;
  //---------------------------------------------------//