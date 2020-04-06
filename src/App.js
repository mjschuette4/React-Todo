import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from" ./components/TodoForm";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: [],
      item: ''
    }
  }

  addItem = e => {
    e.preventDefault();
    var newItem = {
      task:this.state.item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      item:'',
      items:[...this.state.item, newItem]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
