import React from 'react';
import AddTodo from './containers/AddTodo'
import ShowTodolist from './containers/ShowTodolist'
import Footer from './components/footer'

function App() {
  return (
    <div>
    	<AddTodo />
    	<ShowTodolist />
    	<Footer />
    </div>
  );
}

export default App;
