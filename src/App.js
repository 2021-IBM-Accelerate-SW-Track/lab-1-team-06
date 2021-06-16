import React from 'react'
import Header from "./component/header"
import './App.css'
import './component/header/header.css'
import ToDoList from './component/todo/todolist'



function Task ({ task, index, completedTask }) {  //Gather Task list and Time submitted
  return (
    <div className='task'
        style={{textDecoration: task.isDone ? 'line-through' : ''}}
    > 
    {task.text}
    <br/>
    {task.time = new Date().toLocaleDateString() + ' ' + ' ' + new Date().toLocaleTimeString()}
    <div> 
     <button onClick={() => completedTask(index)} className= 'check'>✓</button>
     <button onClick={() => ''} className= 'edit'>↻</button> 
     <button onClick={() => ''} className= 'delete'>✕</button>
    </div>
    </div>
 
   ); //Add Delete and Edit buttons under the 'check' button.
  };

function App() {  //Display the Tasklist
const [tasks, setTasks] = React.useState([ 
  {
       text: 'Go grocery shopping',
       isDone: false
  },

  {
       text: 'Feed the pet',
       isDone: false
  },

  {
       text: 'Do the laundry',
       isDone: false
  }

]);

  const addTask = text => {     //Allows the user to add an task
    const newTasks = [...tasks, {text}];
    setTasks(newTasks);
  };

  const completedTask = index => {   //Allows user to mark task as 'complete'
    const newTasks = [...tasks];
    newTasks[index].isDone = true;
    setTasks(newTasks);
  };

    // Add code for the Deleted Task here.

   // Add Code for the Updated Task Here.

  return ( // Allows user interact with the form
    <div className="App">
    <Header/>
    <ToDoList addTask = {addTask}/> 
      <div className="task-list">
      {tasks.map((task, index) => (
        <Task
        key={index}
        index = {index}
        task = {task}
        time = {task.time}
        completedTask = {completedTask}
       //Add deleted task property here
        />
      ))}
    </div>
    </div>
  );
}

export default App;
