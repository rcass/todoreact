import React, { Component } from "react";
import styles from "./styles";

import ToDoListHeader from './todolistheader';
import ToDoInput from './todoinput';
import ToDoList from './todolist';
import ToDoListFooter from './todolistfooter';

class ToDoListApp extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {id: 0, todo: "Learn React", completed: false},
        {id: 1, todo: "Learn Redux", completed: false}
      ]
    };
    this.toggleComplete = this.toggleComplete.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  toggleComplete(item){
    let todos = this.state.todos.map(todo => {
      if(todo.id === item.id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos });
  }

  removeTodo(item){
    let todos = this.state.todos.filter(todo => todo.id !== item.id)
    this.setState({ todos });
  }

  clearCompleted(){
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  }


  render() {
    const { todos } = this.state;
    return (
      <div style={styles}>
        <ToDoListHeader />
        <ToDoInput />
        {(todos.length > 0) ? (
          <ToDoList
            toDoList={todos}
            toggleComplete={this.toggleComplete}
            removeTodo={this.removeTodo} />
        ):(
          "Nothing To Do!"
        )}
        <ToDoListFooter
          toDoCount={todos.length}
          clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
} // ToDoListApp End

export default ToDoListApp;