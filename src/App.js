import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    
    //Base state set
    super();
    this.state = {
      items: [],
      item: ''
    }
  }

  //addItem functionality
  addItem = e => {
    
    //Prevents refresh
    e.preventDefault();    
    //setting the new submitted items to this format
    const newItem = {
      task:this.state.item,
      id: Date.now(),
      completed: false
    };    
    //
    this.setState({
      items:[...this.state.items, newItem],
      item:''
    });
  };

  toggleItem = id => {
    //
    let items =this.state.items.slice();

    //
    items = items.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      return item;
    });
  };

  deleteItems = e => {
    //
    e.preventDefault();
    //
    var items = this.state.items.filter(item => !item.completed);
    //
    this.setState({items});
  };

  changeItem = e => this.setState({ [e.target.name]: e.target.value });

  //renders in app
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          value = {this.state.todo}
          todoChange = {this.changeItem}
          handleAdd = {this.addItem}
          handleClear = {this.deleteItems}
        />
        <TodoList
          handleToggleOn = {this.toggleItem}
          items = {this.state.items}
        />
      </div>
    )
  }
}

export default App;
