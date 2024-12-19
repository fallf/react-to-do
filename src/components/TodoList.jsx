import React from "react";
import Todo from "./Todo";

function TodoList({ todos, dispatch }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default TodoList;
