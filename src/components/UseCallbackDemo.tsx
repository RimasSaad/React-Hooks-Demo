// UseCallbackDemo.tsx
// Demonstrates useCallback by creating a simple calculator that memoizes the calculate function.

import React, { useState, useCallback } from 'react';

const UseCallbackDemo: React.FC = () => {
  // State for the two numbers
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  // State for operator
  const [operator, setOperator] = useState<'+' | '-'>('+');
  // State for result
  const [result, setResult] = useState<number>(0);

  // Memoized calculate function
  const calculate = useCallback(() => {
    if (operator === '+') {
      setResult(number1 + number2);
    } else {
      setResult(number1 - number2);
    }
  }, [number1, number2, operator]); // Dependencies: re-create only if these change

  return (
    <div>
      <h2>useCallback Demo: Calculator</h2>

      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
        placeholder="Number 1"
      />

      <select value={operator} onChange={(e) => setOperator(e.target.value as '+' | '-')}>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>

      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
        placeholder="Number 2"
      />

      <button onClick={calculate}>Calculate</button>

      <p>Result: {result}</p>
    </div>
  );
};

export default UseCallbackDemo;
