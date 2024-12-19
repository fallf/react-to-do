import { useReducer, useState } from "react";
import Heading from "./components/Heading";
import TodoList from "./components/Todolist";
import { todoReducer, ACTIONS } from "./reducers/todoReducer";
import background from "/image/cutebackground.png";
import "./App.css";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  return (
    <div>
      <Heading />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
