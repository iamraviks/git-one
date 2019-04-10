import React from 'react'
//test comment for git
const Todos = ({todos,deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) :(
        <p className="center">You have no todo's left</p>
    )
    return(
        <div className="Todos collection">
            {todoList}
        </div>
    )
}
export default Todos