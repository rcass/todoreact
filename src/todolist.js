import React, { Component } from "react";
import ToDoItem from "./todoitem";
import styles from "./styles.js";
import PropTypes from 'prop-types';

class ToDoList extends Component {
  render(){

    return (
      <ul style={styles.ul}>
        {this.props.toDoList.map((item, i) => {
            return <ToDoItem key={i} item={item} />;
        })}
      </ul>
    );
  }
}

ToDoList.propTypes = {
  toDoList: PropTypes.array.isRequired
};

export default ToDoList;