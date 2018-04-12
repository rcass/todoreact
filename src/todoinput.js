import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoInput extends Component {
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

TodoInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default TodoInput;