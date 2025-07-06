// calculatorTypes.ts
// Defines types for the calculator useReducer demo

// Define the shape of our state
export type State = {
  number1: number;
  number2: number;
  result: number;
};

// Define possible action types and their payloads
export type Action =
  | { type: 'SET_NUMBER1'; payload: number }
  | { type: 'SET_NUMBER2'; payload: number }
  | { type: 'ADD' }
  | { type: 'SUBTRACT' }
  | { type: 'RESET' };
