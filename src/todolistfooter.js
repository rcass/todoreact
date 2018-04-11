import React from "react";
import styles from "./styles.js";
import PropTypes from 'prop-types';

const ToDoListFooter = ({ toDoCount, clearCompleted }) => {
  let text = "";
  switch(toDoCount){
    case 0 : {
      text =  "Nothing to do, seriously, nothing to do!"
      break;
    }
    case 1 : {
      text = "todo";
      break;
    }
    default: {
      text = "Too much to not do?"
    }
  }

  return (
    <div style={styles.footer}>
      <p>{toDoCount} {toDoCount > 1 ? "todos" : text }</p>
      <button
        type="button"
        onClick={clearCompleted}
      >Clear Completed</button>
    </div>
  );
}

ToDoListFooter.propTypes = {
  toDoCount: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired
};

export default ToDoListFooter;