import { Todo } from '../model'
import './styles.css'

interface Props{
    todos: Todo[];
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}



const SoloTodo = ({todos, todo, setTodos}: Props) => {
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const handleDone = (id:number) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? { ...todo, isDone: !todo.isDone}: todo
            )
        )
    }

    return (
            <div className="task">
                {
                    todo.isDone ? (
                        <s className='text'> {todo.todo} </s>
                    ) : (
                        <span className='text'> {todo.todo} </span>
                    )
                }
                <div className="btns">
                    <button className='btn' onClick={() => handleDelete(todo.id)}>Delete Task</button>
                    <button className='btn' onClick={() => handleDone(todo.id)}>Done</button>
                </div>
            </div>
    )
}

export default SoloTodo