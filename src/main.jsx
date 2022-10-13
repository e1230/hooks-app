import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css';
//import { CounterCustomHook } from './01-useState/counterCustomHook'
//import { CounterApp } from './01-useState/counterApp'
//import { FormCustomHook } from './02-useEffect/FormCustomHook'
//import { SimpleForm } from './02-useEffect/simpleForm'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusComponent } from './04-useRef/FocusComponent'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Callback } from './06-memos/Callback'
//import { MemoHook } from './06-memos/MemoHook'
//import { Memorize } from './06-memos/Memorize'
//import { Padre } from './07-tarea-memo/Padre'
//import "./08-useReducer/intro-reducer";
//import { TodoApp } from './08-useReducer/TodoApp';
//import { HooksApp } from './HooksApp'
import { MainApp } from './09-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />

  </BrowserRouter>
)
