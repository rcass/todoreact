import React, { Component } from "react";
import styles from "./styles.js";

class ToDoItem extends Component {
  render(){
    const { item, toggleComplete, removeTodo } = this.props;
    return (
        <li style={styles.li}>
          <span>{item.todo}</span>
          <input
            type="checkbox" 
            id={item.id} 
            checked={item.complete}
            onClick={() => toggleComplete(item)}
          />
          <label htmlFor={item.id} />
          <button onClick={() => removeTodo(item)}>
            <i className="fa fa-trash" />
          </button>
        </li>
    );
  }
}

export default ToDoItem;