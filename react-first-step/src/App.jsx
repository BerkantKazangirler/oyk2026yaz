import { useEffect, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Çamaşır", done: false },
    { id: 2, text: "Ders çalış", done: true },
    { id: 3, text: "Süt al", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.done).length;
  const notCompletedTodos = todos.filter((todo) => !todo.done).length;

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([
      { id: todos.length + 1, text: newTodo.trim(), done: false },
      ...todos,
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="counter" id="center">
      <h1>Yapılacaklar</h1>
      <hr />
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Yeni görev ekle"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
      <div>
        <p>Toplam Görev: {totalTodos}</p>
        <p>Tamamlanan Görev: {completedTodos}</p>
        <p>Tamamlanmayan Görev: {notCompletedTodos}</p>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
