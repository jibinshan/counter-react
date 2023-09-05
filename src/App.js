import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count,setCount] = useState(0)
  const increment = ()=>{
    count === 10 ? setCount(10) : setCount((prev)=>prev+1) 
  }
  const decrement = ()=>{
    count === 0 ? setCount(0) : setCount((prev)=>prev-1) 
  }
  return (
    <div className="App">
     <h1>welcome <br /> click '+' to increment and click '-' to decrement</h1>
     <Counter increment={increment} count={count} decrement={decrement}/>
    </div>
  );
}

export default App;
