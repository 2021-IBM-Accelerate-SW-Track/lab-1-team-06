
import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./todolist.css"

function ToDoForm({ addTask })
{
  const [value, setValue] = React.useState(''); // Don't forget to validate duplicate tasks.

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTask(value);
      setValue('');
    };

    const handleDelete = e => {

    }
  
    return (

        <form className="the-List" onSubmit={handleSubmit}>
         
       
          <TextField id="outlined-basic" label="Task" variant="filled" data-testid="input" className="input" 
          value={value} onChange={e => 
          setValue(e.target.value)}/> 
          
          <Button type="submit" variant="contained" className='button' data-testid="button" style={{background: '#b30000', 
          color: 'white'}}>
            Add
          </Button>
          <button type="submit" className= 'delete'>✕</button>
        </form> //Add button to be coded, in order to add tasks to the form
        
    );
} 

export default ToDoForm;