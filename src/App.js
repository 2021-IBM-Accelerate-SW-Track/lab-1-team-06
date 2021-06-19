import React from 'react'
import Header from "./component/header"
import './App.css'
import './component/header/header.css'
import ToDoForm from './component/todo/todoform'


function App() { 
  return ( 
    <div className="App">
    <Header/> 
    <ToDoForm/>    
    </div>
);
}

export default App;