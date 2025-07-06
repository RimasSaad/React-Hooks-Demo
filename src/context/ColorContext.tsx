// ColorContext.tsx
// Defines a Color Context to provide current color and a function to change it randomly.

import React, { createContext, useState } from 'react';

// Define context type
type ColorContextType = {
  color: string;
  changeColor: () => void; // Function to change the color
};

// Create context 
export const ColorContext = createContext<ColorContextType>({
  color: 'black', // Default color
  changeColor: () => {},
});

// ColorProvider component to share data/functions
export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to hold the current color
  const [color, setColor] = useState<string>('black');

  // Function to toggle color between red and blue
  const changeColor = () => {
    setColor((prev) => (prev === 'red' ? 'blue' : 'red'));
  };

  // Return the Provider component
  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
