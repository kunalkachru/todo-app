import "./App.css";
import { useState } from "react";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  //state hook for input box
  const [inputValue, setInputVal] = useState("");
  const [todoarray, setToDoarray] = useState([]);

  function WriteToDo(e) {
    //console.log(e.target.value);
    setInputVal(e.target.value);
  }

  function AddToDo() {
    if (inputValue != "") {
      setToDoarray((prevtodoarr) => [...prevtodoarr, inputValue]);
      setInputVal("");
    }
  }
  //console.log(todoarray);

  function DeleteToDo(todoIndex) {
    const modToDoArray = todoarray.filter((prevTodo, prevTodosIndex) => prevTodosIndex != todoIndex);
    setToDoarray(modToDoArray);

    // setToDoarray((prevTodos) =>
    //   prevTodos.filter((_prevTodo, prevTodosIndex) => {
    //     return prevTodosIndex != todoIndex;
    //   })
    // );
  }

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputVal={inputValue}
        writetodo={WriteToDo}
        addtodo={AddToDo}
      />
      <TodoContainer todos={todoarray} deletetodo={DeleteToDo} />
    </main>
  );
}

export default App;
