import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "e1230",
        email: "embeltrans@correo.udistrital.edu.co"
    });

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    };
    //se llama cada vez que se redibuje SimpleForm si no tiene dependencias
    // con [] solo se llama la primera vez
    //
    useEffect(() => { 
        console.log("holi");
    }, []);

    useEffect(() => { //se llama cada vez que se redibuje SimpleForm si no tiene dependencias
        console.log("cambio email");
    }, [formState.email]);

    useEffect(() => { //se llama cada vez que se redibuje SimpleForm si no tiene dependencias
        console.log("cambio username")
    }, [formState.username]);
    
  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input 
        type="text" 
        className="form-control"
        placeholder="Username"
        name="username"
        value={formState.username}
        onChange={onInputChange}
        />

        <input 
        type="email" 
        className="form-control mt-2"
        placeholder="emaurobel1230@hotmail.com"
        name="email"
        value={formState.email}
        onChange={onInputChange}
        />
        {(formState.username === "em1230") && <Message />}      

    </>
  )
}
