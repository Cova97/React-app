import React, {useState} from "react";

const Registrar = (props) => {
    const [Cuser, setCuser] = useState("");
    const [Cpassword, setCpassword] = useState("");
    const [CCpassword, setCCpassword] = useState("");

    const onChange = (e) => {
        console.log(e.target.name);
        if(e.target.name === "Cuser"){
            setCuser(e.target.value);
        }
        else if(e.target.name === "Cpassword"){
            setCpassword(e.target.value);
        }
        else if(e.target.name === "CCpassword"){
            setCCpassword(e.target.value);
        }
    }

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if(Cpassword === CCpassword){
            alert("Gracias por registrarse");
            props.cambiarCrear(true);
        }
        else{
            alert("Las contraseñas no coinciden");
        }
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <p>user {Cuser}</p>
            <p>password {Cpassword}</p>
            <p>Confirmar {CCpassword}</p>
            <div>
                <label htmlFor="Cuser">Usuario</label>
                <input 
                    type="text" 
                    name="Cuser" 
                    id="Cuser" 
                    value={Cuser} 
                    onChange={onChange}>
                </input>
            </div>
            <div>
                <label htmlFor="Cpassword">Nueva Contraseña</label>
                <input 
                    type="password" 
                    name="Cpassword" 
                    id="Cpassword" 
                    value={Cpassword} 
                    onChange={onChange}>
                </input>
            </div>
            <div>
                <label htmlFor="CCpassword">Confirmar Contraseña</label>
                <input 
                    type="password" 
                    name="CCpassword" 
                    id="CCpassword" 
                    value={CCpassword} 
                    onChange={onChange}>
                </input>
            </div>
            <button>Crear Cuenta</button>
        </form>
    );
}

export default Registrar;