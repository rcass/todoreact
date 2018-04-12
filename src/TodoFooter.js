import React from "react";
import PropTypes from 'prop-types';

const TodoFooter = ({ todoCount, clearCompleted }) => {
  let text = "";
  switch(todoCount){
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
    <div className="todo-admin">
      <p>{todoCount} {todoCount > 1 ? "todos" : text }</p>
      <button
        type="button"
        onClick={clearCompleted}
      >Clear Completed</button>
    </div>
  );
}

TodoFooter.propTypes = {
  todoCount: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired
};

export default TodoFooter;