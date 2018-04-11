import React from "react";
import ToDoItem from "./todoitem";
import styles from "./styles.js";
import PropTypes from 'prop-types';

const ToDoList = props => {
    return (
      <ul style={styles.ul}>
        {props.toDoList.map((item) => {
            return <ToDoItem key={item.id} item={item} toggleComplete={props.toggleComplete} removeTodo={props.removeTodo}/>;
        })}
      </ul>
    );
}

ToDoList.propTypes = {
  toDoList: PropTypes.array.isRequired
  // removeTodo: PropTypes.number.isRequired
};

export default ToDoList;