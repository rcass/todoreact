import React, { Component } from "react";
import styles from "./styles.js";

class ToDoListHeader extends Component {
  render(){
    return (
        <h1 className="header" style={styles.header}>{this.props.title}</h1>
    );
  }
}

ToDoListHeader.defaultProps = {
  title: "So Much To Do!"
};


export default ToDoListHeader;