import React, { Component } from "react";
import styles from "./styles.js";

class ToDoInput extends Component {
  render(){
    return (
        <form style={styles.form}>
          <input style={styles.todoinput} type="text" name="todo" placeholder="Enter a todo" />
          <label>(press enter to add)</label>
        </form>
    );
  }
}

export default ToDoInput;