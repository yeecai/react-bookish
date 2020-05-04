import React from "react";
import Proptypes from 'prop-types';
import Todo from './todo';


const Todolist = ({ todos, toggleTodo }) => (
    // why (todos, toggleTodo) here will get todos.map is not a funtion!!!???

    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
)

Todolist.propTypes = {
    todos: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.number.isRequired,
            done: Proptypes.bool.isRequired,
            text: Proptypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: Proptypes.func.isRequired
}

export default Todolist