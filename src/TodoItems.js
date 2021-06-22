import React, { Component } from "react";
import FlipMove from "react-flip-move";
import Checkbox from '@material-ui/core/Checkbox';

class TodoItems extends Component {
    constructor (props) {
        super (props);

        this.state= {
            checked:false
        }

        this.createTasks = this.createTasks.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    updateItem(key){
        this.props.update(key);
    }

    deleteItem(key) {
        if(window.confirm("Are you sure you want to delete this task?")){
            console.log('Task was deleted.');
            this.props.delete(key);
        }
        else {
            console.log('Task was not deleted.');
          }
    }

    handleChange (){
        this.setState({
            checked:true
        })
    }
    

    createTasks (item) {
        return <li key={item.key}>
                    <Checkbox
                        checked={this.checked}
                        onChange={this.handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    {item.text} - {item.date}  
                    <button onClick={() => this.updateItem(item)}>Update</button> 
                    <button onClick={() => this.deleteItem(item.key)}>Delete</button>
                </li>
    }
    
    render () {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                {listItems}
                </FlipMove>
            </ul>
        );
    }
};


export default TodoItems;
