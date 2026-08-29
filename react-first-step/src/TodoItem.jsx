import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => toggleTodo(todo.id)}
        checked={todo.done}
      />
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Sil</button>
    </li>
  );
};

export default TodoItem;
