// UseContextDemo.tsx
// Demonstrates useContext by displaying a colored box and a button to toggle its color.

import React, { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';

const UseContextDemo: React.FC = () => {
  // useContext hook to access color and changeColor function from ColorContext
  const { color, changeColor } = useContext(ColorContext);

  return (
    <div>
      <h3>useContext Demo: Color Context</h3>

      {/* Display the current color value */}
      <p>Current Color: {color}</p>

      {/* Box with background color set to current color */}
      <div
        style={{
          width: '150px',
          height: '150px',
          backgroundColor: color,
          border: '1px solid #333',
          margin: '10px auto',
        }}
      ></div>

      {/* Button to change the color */}
      <button onClick={changeColor}>Toggle Color</button>
    </div>
  );
};

export default UseContextDemo;
