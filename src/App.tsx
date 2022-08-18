import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList'

import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if(todo){
      let generated_id = Date.now();
      setTodos([...todos, {id: generated_id, todo, isDone: false}]);
      setTodo(""); 
    }

  };

  const handleDeleteAll = () => {
    setTodos(todos.filter((todo) => todo.id === 0));
  }

  const handleUndoneAll = () => {
    setTodos(
      todos.map((todo) => 
          todo.id !== 0 ? { ...todo, isDone: !todo.isDone}: todo
      )
    )
  }

  // console.log(todos);

  return (
    <div className='App'>
      <h1>To<span>Do</span></h1>
      
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/> 
      
      <div className="options">
        <button onClick={handleDeleteAll} className="delete-all">Delete All Tasks</button>
        <button onClick={handleUndoneAll} className="delete-all">Done / Undone All tasks</button>
      </div>

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
