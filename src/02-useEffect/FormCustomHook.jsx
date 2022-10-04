import { useForm } from "../hooks/useForm";

export const FormCustomHook = () => {
    const {formState, onInputChange, onReset} = useForm({
        username: "",
        email: "",
        password: "",
    });
    
  return (
    <>
        <h1>Formulario con hook personalizado</h1>
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

        <input 
        type="password" 
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={formState.password}
        onChange={onInputChange}
        />  

        <button onClick={onReset} className="btn btn-primary mt-3">Borrar</button>

    </>
  )
}
