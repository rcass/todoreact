import React, { Component } from "react";
import styles from "./styles.js";

class ToDoItem extends Component {
  render(){
    return (
        <li style={styles.li}>
          <span>{this.props.item}</span>
          <input type="checkbox" style={styles.todoitem} />
          <button type="button">trash</button>
        </li>
    );
  }
}

export default ToDoItem;