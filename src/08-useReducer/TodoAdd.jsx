import {useForm} from "../hooks/useForm";
export const TodoAdd = ({onNewTodo}) => {
    const {desc, onInputChange, onReset} = useForm({
        desc: ""
    });
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(desc.length <= 1) return;
 
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            desc: desc
        }
        onNewTodo(newTodo);
        onReset();
    };
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" 
            placeholder="Qué hay que hacer?"
            className="form-control"
            name="desc"
            value={desc}
            onChange={onInputChange}/>
        <button type="submit"
            className="btn btn-outline-success mt-1">
            Agregar
        </button>
    </form>
)}
