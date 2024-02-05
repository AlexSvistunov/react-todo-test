import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  console.log(inputValue);
  console.log(list);
  return (
    <>

    <Form></Form>
    
      {/* <form
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
      ))} */}
    </>
  );
}

export default App;
