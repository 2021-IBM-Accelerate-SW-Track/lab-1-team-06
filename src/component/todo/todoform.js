import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

 function ToDoForm()  
 {

   return (
      <form> 
         
      <TextField id="outlined-basic" label="Task" variant="filled" //INPUT FIELD AND BUTTON
      data-testid='new-item-input' className="input" type='text'/> 
        
      <Button variant="contained" className='button' type='submit' data-testid='new-item-button'  
      style={{background: '#b30000', color: 'white' }}> 
         Add
      </Button>
        
      </form> //YOU CAN CHANGE THE COLOR OF THE TASKS IF YOU WANT, BUT BACKGROUND COLOR, HEADER, 
      //INPUT AND BUTTON COLOR STAYS, LOL!!! AND DON'T FORGET TO ADJUST THE FORM, SO IT CAN STAY IN PLACE,
      // WHILE MINIMIZED! YOU'RE FREE TO MOVE IT AROUND - RYNISHA
    );
  }

export default ToDoForm;