import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  function inputOnChangeHandler(e) {
    setInputValue(e.target.value);
  }

  function formSubmitHandler() {
    setList((prev) => [...prev, inputValue]);
    setInputValue('')
  }

  return (
    <>
      <Form
        inputHandler={inputOnChangeHandler}
        formHandler={formSubmitHandler}
        inputValue={inputValue}
      ></Form>
      {list.map((el) => (
        <div key={el}>{el}</div>
      ))}
    </>
  );
}

export default App;

{
  /* <form
        onSubmit={(e) => {
          e.preventDefault();
          setList((prev) => [...prev, inputValue]);
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button>Создать дело</button>
      </form>

      {list.map((item) => (
        <div>{item}</div>
      ))} */
}
