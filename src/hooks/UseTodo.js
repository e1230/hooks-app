const initialState= [

];

import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () =>{
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodo = (initialState) => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos) || []);
    }, [todos])
    
    const handleNewTodo = (todo) => {
        const action = {
            type: "Add todo",
            payload: todo
        }
        dispatch(action);
    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type: "Delete todo",
            payload: id
        });
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: "Toggle todo",
            payload: id
        });
    }
    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;
    return {
        todosCount,
        pendingTodosCount,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    };
};

