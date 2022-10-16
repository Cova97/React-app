import React, {useState} from "react";
import Registrar from "./Registrar";

const FormularioLogin = (props) => {
    const[user, setUser] = useState("");
    const[password, setPassword] = useState("");
    const[registrar, cambiarRegistrar] = useState("");

    const onChange = (e) => {
        console.log(e.target.name);
        if(e.target.name === "user"){
            setUser(e.target.value);
        }
        else if(e.target.name === "password"){
            setPassword(e.target.value);
        }
    }

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if(user === "aldo" && password === "123"){
            alert("Bienvenido");
            props.cambiarSecion(true);
        }
        else{
            alert("Usuario o contraseña errorneas");
        }
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <div>
                <label htmlFor="user">Usuario</label>
                <input 
                    type="text" 
                    name="user" 
                    id="user" 
                    value={user}
                    onChange={onChange}
                ></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password} 
                    onChange={onChange}
                ></input>
            </div>
            <button>Iniciar secion</button>
            <button onClick={() => cambiarRegistrar(cambiarRegistrar)}>Registrarse</button>
        </form>
        
    );
}

export default FormularioLogin;
