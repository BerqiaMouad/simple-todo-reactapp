import React from 'react'
import { Todo } from '../model';
import SoloTodo from './SoloTodo';

import './styles.css'

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div className="todos">
        {
            todos.map( (todo) => (
                <SoloTodo todos={todos} todo={todo} setTodos={setTodos}/>
            ))
        }
    </div>
  )
}

export default TodoList