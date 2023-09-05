import React from 'react'
import './counter.css'
function Counter({increment,count,decrement}) {
  return (
    <div className='counter'>
       
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
