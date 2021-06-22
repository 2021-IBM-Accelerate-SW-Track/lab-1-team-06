import React, { Component } from "react";
import TodoItems from "./TodoItems"
import "./TodoList.css";


class TodoList extends Component {
    constructor (props) {
        super (props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    addItem (e) {

        var itemArray = this.state.items;
        var date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
        var broken = false;

        if (this._inputElement.value !== "" ) {
            for(var i=0;i<itemArray.length;i++){
                if(itemArray[i].text.toUpperCase()===this._inputElement.value.toUpperCase()){
                    alert('Error, this task already already exists.')
                    broken = true;
                    break;
                }

            }
            if(broken===false){
                itemArray.unshift ({
                    text: this._inputElement.value,
                    date: date,
                    key: Date.now(),
                    complete: false
                });
                
                this.setState ({
                    items: itemArray
                }); 
            }
        }
        
        this._inputElement.value = "";   
        console.log(itemArray);
        e.preventDefault();
    }

    deleteItem (key) {
        var filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key);
        });

        this.setState ({
            items: filteredItems
        });
    }

    updateItem(key){
        var broken = false;
        var items = this.state.items;
        var date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
        var updateVal = prompt('Please enter updated task');
        if(updateVal===''|| updateVal===null){ //if cancel button clicked or prompt left empty
            return;
        }
        for(var i=0;i<items.length;i++){ //check if duplicate
            if(items[i].text.toUpperCase()===updateVal.toUpperCase()){
                alert('Error, this task already already exists.')
                broken = true;
                break;
            }
        }
        if(broken===false){ //if not duplicate
            for(var j=0;j<items.length;j++){
                if(items[j].key===key.key){ //find the key and update its value
                    items[j].text = updateVal;
                    items[j].date = date;
                    break;
                }
            }
            this.setState ({
                items: items
            }); 
        }
    }

    render () {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>

                        <input ref={ (a) => this._inputElement = a }
                        placeholder="enter task" data-testid="new-item-input">
                        </input>
                        <button type="submit" data-testid="new-item-button">add</button>
=======
                        <input ref={ (a) => this._inputElement = a } placeholder="Enter task"/>
                        <button type="submit">Add</button>
 master
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                            delete={this.deleteItem} 
                            update = {this.updateItem}
                            />
            </div>
        );
    }
}

export default TodoList;
