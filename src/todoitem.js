import React, { Component } from "react";
import PropTypes from 'prop-types';
import './App.css';

class TodoItem extends Component {
  render(){
    const { item, toggleComplete, removeTodo } = this.props;
    return (
        <li>
          {item.todo}
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
};

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoItem;