import React from 'react'
import Header from "./component/header"
import './App.css'
import './component/header/header.css'
import ToDoForm from './component/todo/todoform'

function TaskList({ task, index, completedTask }) //Allows the task, date, time, 
//and buttons to display. Add edit and delete task code to the parameter. 
//Time displays at the same time, so it needs another format or coded differently, 
//so it could display at different times?
{
    return ( 
        <div className = 'task' // Marks task as 'Complete'. 'Edit' and 'Delete' buttons to be edited. 
        > 
        <span style={{ textDecoration: task.isCompleted ? 'line-through' : '' }}> { task.text }
          <br/> 
          { task.time = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()}</span>
          <div>
          <button onClick={() => completedTask(index)} className= 'check'>✓</button> {''}
          <button onClick={() => ''} className= 'edit'>✎</button> 
          <button onClick={() => ''} className= 'delete'>✕</button> 
          </div>
       </div>
     );
 };

function App() { 
  const [tasks, setTasks] = React.useState([
    { text: 'Go grocery shopping' , isCompleted: false}, //Helps display the task list to the form
    { text: 'Feed the pets', isCompleted: false},        //Marks task if task is complete (boolean = true)
    { text: 'Do the laundry', isCompleted: false}
  ]);

    const addTask = text => { //Allows the user to add tasks. 
      //The 'addTask' code needs to be fixed. Jason/team can run and see what it does.
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
    };

    const completedTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
    };

    //Edit task code goes here

    //Delete task code goes here

  return ( 
    <div className="App">
    <Header/> 
    <ToDoForm addTask={addTask} />    
    <div className='task-list'>
        {tasks.map((task, index) => (
           <TaskList // Task properties
             key={index}
             index={index}
             task={task}
             time={task.time}
             completedTask = {completedTask}
             //edit = {edittask} property here
             //deleted task property here
             />
        ))}
    </div>
    </div>
);
}

export default App;