import {useState} from 'react'

function TodoItem({ todo, handleDelete}) {
    const [editmode, setEditmode] = useState(false)
    const [updatedTodoText, setUpdatedTodoText] = useState('')

    return (
        <div>
            {







            }
            <p>{todo.text}</p>
            <button onClick={() => handleDelete(todo.id)}>Delete
            </button>
        </div>
    )
}
export default TodoItem