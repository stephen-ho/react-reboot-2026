import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  function decrementCount() {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
  }

  function increment5() {
    setCount((prev) => prev + 5);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  let message: string;

  if (count < 5) {
    message = "Low";
  } else if (count <= 10) {
    message = "Medium";
  } else {
    message = "High";
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={incrementCount}>+1</button>
      <button onClick={increment5}>+5</button>
      <button onClick={decrementCount} disabled={count === 0}>
        -1
      </button>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
