import React, {useState} from "react";

const FormularioLogin = (props) => {
    const[user, setUser] = useState("");
    const[password, setPassword] = useState("");

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
            alert("Nice");
            props.cambiarSecion(true);
        }
        else{
            alert("Nel");
        }
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <p>Usuario {user}</p>
            <p>password {password}</p>
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
        </form>
    );
}

export default FormularioLogin;
