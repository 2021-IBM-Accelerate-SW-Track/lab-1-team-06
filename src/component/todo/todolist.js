import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ToDoForm({ addTask })
{
  const [value, setValue] = React.useState(''); // Don't forget to validate duplicate tasks.

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTask(value);
      setValue('');
    };
  
    return (

        <form onSubmit={handleSubmit}>
 
        <TextField id="outlined-basic" label="Task" variant="filled" input type="text" className="input" 
        value={value} onChange={e => 
        setValue(e.target.value)}/> 
        
        <Button variant="contained" button type='submit' className='button' style={{background: '#b30000', 
        color: 'white'}}>
          Add
        </Button>
        </form> //Add button to be coded, in order to add tasks to the form
    );
} 

export default ToDoForm;