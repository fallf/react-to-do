import React, { useState } from "react";
import { ACTIONS } from "../reducers/todoReducer";

function Todo({ todo, dispatch }) {
  const [editText, setEditText] = useState(todo.name);

  const handleSave = () => {
    if (editText.trim() === "") return;
    dispatch({
      type: ACTIONS.SAVE_TODO,
      payload: { id: todo.id, newName: editText },
    });
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      {todo.isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() =>
              dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
            }
          />
          <span
            style={{
              textDecoration: todo.complete ? "line-through" : "none",
              marginRight: "10px",
            }}
          >
            {todo.name}
          </span>
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })
            }
          >
            Edit
          </button>
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
            }
            disabled={!todo.complete}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default Todo;
