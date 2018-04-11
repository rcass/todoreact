import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoInput extends Component {
  render() {
    const { handleInput } = this.props;
    return (
      <div className="add-todo">
        <form>
          <input type="text" onChange={(event) => handleInput(event)}/>
          <span>(enter to add)</span>
        </form>
      </div>
    );
  }
}

ToDoInput.propTypes = {
  handleInput: PropTypes.func.isRequired
};

export default ToDoInput;