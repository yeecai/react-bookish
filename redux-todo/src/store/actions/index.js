let nextTodoId = 2
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
export const setShowFilter = filter => ({
  type: 'SET_SHOW_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});
export const ShowFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_DONE: "SHOW_DONE",
  SHOW_TODO: "SHOW_TODO",
};
