import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>Addition</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>Substract</button>
      </div>
      <p className="read-the-docs">
        This is a very simple counter app made with React
      </p>
    </>
  );
}

export default App;
