import React from "react";
import Todo from "./ToDo";

function TodoContainer({ todos, deletetodo }) {
  return (
    <div className="container">
      {todos.map((item, index) => {
        return <Todo todo={item} index={index} deletetodo={deletetodo} />;
      })}
    </div>
  );
}

export default TodoContainer;
