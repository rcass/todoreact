import React, { Component } from "react";
// import { defaultProps } from 'prop-types';
import ReactDOM from "react-dom";
import styles from "./styles";

import ToDoListHeader from './todolistheader';
import ToDoInput from './todoinput';
import ToDoList from './todolist';
import ToDoListFooter from './todolistfooter';

const todos = ["dishes", "study", "walk dog"];



class ToDoListApp extends Component {
  render() {
    return (
      <div style={styles}>
        <ToDoListHeader />
        <ToDoInput />
        <ToDoList toDoList={todos}/>
        <ToDoListFooter toDoCount={todos.length}/>
      </div>
    );
  }
}

ReactDOM.render(<ToDoListApp />, document.getElementById("root"));
