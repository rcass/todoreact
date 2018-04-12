import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoInput extends Component {
  render() {
    const { handleInput, addTodo } = this.props;
    return (
      <div className="add-todo">
        <form onSubmit={event => addTodo(event)}>
          <input type="text" onChange={(event) => handleInput(event)}  />
          <span>(enter to add)</span>
        </form>
      </div>
    );
  }
}

ToDoInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default ToDoInput;