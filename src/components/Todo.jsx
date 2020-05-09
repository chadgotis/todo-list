import React from "react";

function Todo({ text, removeHandler, id, completeHandler, isComplete }) {
  return (
    <div className="todo">
      <p
        style={
          isComplete
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {text}
      </p>
      <button onClick={() => removeHandler(id)}>Del</button>
      <button onClick={() => completeHandler(id)}>Complete</button>
    </div>
  );
}

export default Todo;
