import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

 const TodoRedux = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if(text.trim()){
      dispatch(addTodo(text));
      setText('')
    }
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input 
      type="text"
      value={text}
      onChange={(event) => setText(event.target.value)}
      />
      <button onclick={handleAddTodo}>Add Todo</button>
      <ul>
        {todo.map((todo) =>
        <li key={todo.id} style={{textDecoration: todo.completed ? 'line-throught' : 'none'}}>
          <span onclick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
          <button onclick={()=> dispatch(removeTodo(todo.id))}>Remove</button>
        </li>)}
      </ul>
    </div>
  );
};
export default TodoRedux;


