import { connect } from 'react-redux'
import { toggleTodo, ShowFilters } from "../store/actions";
import TodoList from "../components/todolist";

const getTodosByFilter = (todos, filter) => {
  switch (filter) {
    case ShowFilters.SHOW_ALL:
      return todos;
    case ShowFilters.SHOW_DONE:
      return todos.filter((t) => t.done);
    case ShowFilters.SHOW_TODO:
      return todos.filter((t) => !t.done);
    default:
      throw new Error("Unknow type of todo" + filter);
  }
};
const mapStateToProps = state => ({
  todos: getTodosByFilter(state.todos, state.getTodosFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);