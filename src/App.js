import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const updateTodo = (id) => {
    const updatedList = list.map((todo) =>
      todo.id === id ? { ...todo, todo: editText } : todo
    );
    setList(updatedList);
    setEditId(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => updateTodo(todo.id)}>Save</button>
              </>
            ) : (
              <>
                {todo.todo}
                <button onClick={() => startEdit(todo.id, todo.todo)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
