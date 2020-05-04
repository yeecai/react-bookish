import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, done, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: done ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    done: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo