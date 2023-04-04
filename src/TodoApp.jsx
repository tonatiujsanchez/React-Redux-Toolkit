import { useState } from "react"
import { useGetTodoQuery, useGetTodosQuery } from "./store/slices/apis/todosApi"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1)
    // const { data:todos=[], isLoading } = useGetTodosQuery()
    const { data:todo={}, isLoading } = useGetTodoQuery(todoId)

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

            <pre>
                {
                    JSON.stringify( todo )
                }
            </pre>

            {/* <pre>
                {
                    todos.map( todo => (
                        <p key={todo.title}>{ todo.completed ? '✅' : '⬜' } { todo.title }</p>
                    ))
                }
            </pre> */}

            <button 
                onClick={()=> setTodoId( todoId - 1 ) }
                disabled={ isLoading || todoId <= 1 }
            >
                Previus todo
            </button>
            <button 
                onClick={()=> setTodoId( todoId + 1 ) }
                disabled={ isLoading }
            >
                Next todo
            </button>
        </>
    )
}
