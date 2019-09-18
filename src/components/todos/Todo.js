import React from 'react'


const Todo = props => <li>{props.todo.text}<button onClick={()=>props.delete(props.todo.id)}>delete</button></li>



export default Todo;
