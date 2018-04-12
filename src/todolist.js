import React from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import './App.css';


const TodoList = props => {
    return (
      <ul>
        {props.todoList.map((item) => {
            return <TodoItem key={item.id} item={item} toggleComplete={props.toggleComplete} removeTodo={props.removeTodo}/>;
        })}
      </ul>
    );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoList;