import { useEffect, useState } from "react";
import "./App.css"

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  

  useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const handleClick = () => {
    if (input.trim() === "") return;

    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  }

  const handleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const handleDelete = (index) => {
    setTodos(
      todos.filter((todo, i) => i !== index)
    )
  }

  

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-bar">
        <input type="text"
          placeholder="What do you want to do"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button className="add" onClick={handleClick}>
          Add
        </button>
      </div>

      <div className="todolist">
        {todos.map((todo, index) => (
          <div className="todo" key={index}>
            <p className={todo.completed ? "completed" : "task"}>{todo.text}</p>

            <button className="complete"
              onClick={() => handleComplete(index)}
            >Complete</button>

            <button className="delete"
            onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

    </div>


  )
}

export default App;