import React, { Component } from "react";
import styles from "./styles.js";
import PropTypes from 'prop-types';

class ToDoListFooter extends Component {
  render(){
    return (
      <div style={styles.footer}>
        <p>{(this.props.toDoCount > 1 || this.props.toDoCount === 0) ? 'todos':'todo'}</p>
        <button type="button">Clear Completed</button>
      </div>
    );
  }
}

ToDoListFooter.propTypes = {
  toDoCount: PropTypes.number.isRequired
};

export default ToDoListFooter;