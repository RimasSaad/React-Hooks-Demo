import React, { useState } from 'react';

const UseStateDemo: React.FC = () => {

  // State to store the count value, initially 0.  
  const [count, setCount] = useState<number>(0);

  // Function to increase the count by 1
  const increase = () => {
    setCount(count + 1);
  };

  // Function to decrease the count by 1
  const decrease = () => {
    setCount(count - 1);
  };

  // Function to reset the count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>useState Demo</h3>
      <p>Count: {count}</p>

      {/* Buttons to increase/decrease/reset count */}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseStateDemo;
