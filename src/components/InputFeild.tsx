import React from 'react'
import './styles.css'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.SyntheticEvent) => void;
}


function InputFeild({todo, setTodo, handleAdd}: Props) {
  return (
    <form className='Input' onSubmit={handleAdd}>
        <input className='Input-Box' 
        value={todo} 
        onChange = {
            (e) => setTodo(e.target.value)
        }
        type="input" placeholder='Enter a task'/>
        
        <button className='Input-Submite' type='submit'>Add Task</button>
    </form>
  )
}

export default InputFeild