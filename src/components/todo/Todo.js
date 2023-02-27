import './Todo.css';
import {useState} from "react";
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';

const Todo = () => {
    const [getTodos, setTodos] = useState([
        {id: 1, title: 'Eat'},
        {id: 2, title: 'Sleep'},
        {id: 3, title: 'Code'},
    ])
    
    const eventCreateTodo = (todo) =>{
        // SetTodos.push(todo);
        // console.log(Todos);
        setTodos(getTodos.concat(todo))
    }
    

    return (
        <>
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList datatodos={getTodos}/>
           
        </div>
        </>
    )
}


export default Todo;