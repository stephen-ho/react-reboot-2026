import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const message = "Hello String";

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  function decrementCount() {
    setCount((prev) => {
      if (prev === 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  }

  return (
    <div>
      <h1>React Reboot 2026</h1>
      <p>{message}</p>
      <h2>{count}</h2>
      <button onClick={incrementCount}>+1</button>
      <button onClick={decrementCount} disabled={count === 0}>
        -1
      </button>
    </div>
  );
}

export default App;
