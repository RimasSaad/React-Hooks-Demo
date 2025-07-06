// UseReducerDemo.tsx
// Demonstrates useReducer by building a simple calculator that adds and subtracts two numbers.

import React, { useReducer } from 'react';
import type { State, Action } from '../types/calculatorTypes';

// Reducer function: decides how to update state based on action
const calculatorReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_NUMBER1':
      return { ...state, number1: action.payload };
    case 'SET_NUMBER2':
      return { ...state, number2: action.payload };
    case 'ADD':
      return { ...state, result: state.number1 + state.number2 };
    case 'SUBTRACT':
      return { ...state, result: state.number1 - state.number2 };
    case 'RESET':
      return { number1: 0, number2: 0, result: 0 };
    default:
      return state;
  }
};

const UseReducerDemo: React.FC = () => {
  // Initialize useReducer with calculatorReducer and initial state
  const [state, dispatch] = useReducer(calculatorReducer, {
    number1: 0,
    number2: 0,
    result: 0,
  });

  return (
    <div>
      <h2>useReducer Demo: Simple Calculator (+, -)</h2>
      {/* Input for number1 */}
      <input
        type="number"
        value={state.number1}
        onChange={(e) => dispatch({ type: 'SET_NUMBER1', payload: Number(e.target.value) })}
        placeholder="Number 1"
      />
      {/* Input for number2 */}
      <input
        type="number"
        value={state.number2}
        onChange={(e) => dispatch({ type: 'SET_NUMBER2', payload: Number(e.target.value) })}
        placeholder="Number 2"
      />
      <br />
      {/* Buttons to perform actions */}
      <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
      <button onClick={() => dispatch({ type: 'SUBTRACT' })}>Subtract</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <p>Result: {state.result}</p>
    </div>
  );
};

export default UseReducerDemo;
