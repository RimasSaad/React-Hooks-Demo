// UseCallbackChangeColorDemo.tsx
// Demonstrates useCallback with React.memo child component to avoid unnecessary re-renders.

import React, { useState, useCallback } from 'react';
import ChangeColorChild from './ChangeColorChild'; // Import the child component

// Define the parent component
const UseCallbackChangeColorDemo: React.FC = () => {
  // State for current color, initially red
  const [color, setColor] = useState<string>('red');

  // Additional state to force parent re-renders 
  const [count, setCount] = useState<number>(0);

  console.log('Parent rendered'); // Log to console whenever parent renders

  // Demo usage note:
  // Toggle between using useCallback or not by commenting/uncommenting below.
  // Then click "Re-render Parent" button and check the console:
  // - Without useCallback: Child re-renders every time parent render.
  // - With useCallback: Child only re-renders when color changes.

  // Without useCallback:
  // Every time Parent renders, this function is recreated -> child sees new prop -> re-renders
  // const changeColor = () => {
  //   setColor((prev) => (prev === 'red' ? 'blue' : 'red'));
  // };

  // With useCallback:
  const changeColor = useCallback(() => {
    setColor((prev) => (prev === 'red' ? 'blue' : 'red'));
  }, []); // No dependencies

  return (
    <div>
      <h2>useCallback Demo: Change Color</h2>

      <p>Parent render count: {count}</p>

      {/* Button to force parent re-render */}
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>

      {/* Render the memoized child component */}
      <ChangeColorChild color={color} changeColor={changeColor} />
    </div>
  );
};

export default UseCallbackChangeColorDemo; // Export parent component
