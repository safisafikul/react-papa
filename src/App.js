import React, {useState} from 'react'


function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>Larning useState!</h1>
      <h1>Welcome to my counter</h1>
      <p>This count is: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
