import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

 function ToDoForm({ addTask })  //The Validation code goes in this function 
 //or wherever you want to put it
 {
   const [value, setValue] = React.useState(''); // This creates the Add property for the task

   const handleSubmit = e => {
     e.preventDefault();

     if (!value) return;
     addTask(value);
     setValue('');
   };

   return (
      <form onSubmit={handleSubmit}> 
         
      <TextField id="outlined-basic" label="Task" variant="filled" //Allows the user to type a task
      data-testid='new-item-input' className="input" type='text' value={value} 
      onChange={e => setValue(e.target.value)} /> 
        
      <Button variant="contained" className='button' type='submit' data-testid='new-item-button'  
      style={{background: '#b30000', color: 'white' }}> 
         Add
      </Button>
        
      </form> //The Button allows user to submit to the form
    );
  }

export default ToDoForm;