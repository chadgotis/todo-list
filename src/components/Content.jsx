import React, { useState } from "react";
import Todo from "./Todo";

const Content = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.length < 5) return;
    setTodos([...todos, { id: Date.now(), text: input, isComplete: false }]);
    setInput("");
  };

  const completeHandler = (id) => {
    //working without setTodo()
    //errors adding setTodo()
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? console.log((todo.isComplete = !todo.isComplete)) : ""
    //   )
    // );

    // const newVal = todos.map((todo) =>
    //   todo.id === id ? { ...todo, isComplete: !todo.isComplete } : null
    // );

    // setTodos([..., { newVal }]);

    let updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isComplete: !todo.isComplete,
          }
        : todo
    );
    setTodos(updatedTodos);
    console.log(todos);
  };

  const removeHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="content">
      <h2>Todo List</h2>
      <form action="submit" className="form">
        <input
          type="text"
          placeholder="Add todos..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <input type="submit" value="Add Todo" onClick={addTodoHandler} />
      </form>
      <div className="todolist">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            removeHandler={removeHandler}
            completeHandler={completeHandler}
            isComplete={todo.isComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
