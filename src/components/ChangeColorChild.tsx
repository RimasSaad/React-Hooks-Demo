// ChangeColorChild.tsx
// Memoized child component that displays a colored box and a button to change color.

import React from 'react';

// Define props type for the component
type Props = {
  color: string;
  changeColor: () => void; // Function to change the color of box
};

// Define the child component
const ChangeColorChild: React.FC<Props> = ({ color, changeColor }) => {
  console.log('Child rendered'); // Log to console whenever child renders

  return (
    <div>
      {/* Colored box with the current color as background */}
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          border: '1px solid #333',
          margin: '10px auto',
        }}
      ></div>

      {/* Button to change the color */}
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

// Export the child component wrapped with React.memo
// React.memo prevents re-rendering if props (color, changeColor) didn't change
export default React.memo(ChangeColorChild);
