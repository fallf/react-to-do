export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  EDIT_TODO: "edit-todo",
  SAVE_TODO: "save-todo",
};

export function todoReducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        {
          id: Date.now(),
          name: action.payload.name,
          complete: false,
          isEditing: false,
        },
        ...todos,
      ];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    case ACTIONS.EDIT_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isEditing: true } : todo
      );

    case ACTIONS.SAVE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.newName, isEditing: false }
          : todo
      );

    default:
      return todos;
  }
}
