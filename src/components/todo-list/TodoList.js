import './Todolist.css';


const TodoList = (props) => {
    return(
        <>
        <ul>
           {
           props.datatodos.map( (Todos) => {
            //Props
            //{id: 1, title: 'Eat}
            return <li key={Todos.id}>{Todos.title}</li>
           })
           }
        </ul>
        </>
    )
}


export default TodoList;