// UseLayoutEffectDemo.tsx
// Demonstrates useLayoutEffect by changing a box's background color based on its width measured synchronously before painting.

import React, { useLayoutEffect, useRef, useState } from 'react';

const UseLayoutEffectDemo: React.FC = () => {

  // useRef to get reference to the box div element, initially null
  const boxRef = useRef<HTMLDivElement | null>(null);
  // State to store box width, initially 200
  const [boxWidth, setBoxWidth] = useState<number>(200);
  // State to store box background color
  const [bgColor, setBgColor] = useState<string>('green');

  // useLayoutEffect runs synchronously after DOM updates but before painting
  useLayoutEffect(() => {
    if (boxRef.current) {
      // Measure the size of div element
      const { width } = boxRef.current.getBoundingClientRect();

      // Change color based on width
      if (width < 200) {
        setBgColor('red');
      } else if(width < 400 ) {
        setBgColor('yellow');
      } else {
        setBgColor('green')
      }
    }
  }, [boxWidth]); // Runs every time boxWidth changes

  // Handler to change box width using input range
  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoxWidth(Number(event.target.value));
  };

  return (
    <div>
      <h3>useLayoutEffect Demo: Dynamic Box Styling</h3>

      {/* Input slider to change width */}
      <label>
        Change Box Width: 
        <input
          type="range"
          min="100"
          max="600"
          value={boxWidth}
          onChange={handleWidthChange}
        /> {boxWidth}px
      </label>

      {/* The box with dynamic width and background color */}
      <div
        ref={boxRef}
        style={{
          width: `${boxWidth}px`,
          height: '50px',
          backgroundColor: bgColor,
          marginTop: '10px',
          transition: 'background-color 0.3s',
        }}
      >
        This box is {boxWidth}px wide.
      </div>
    </div>
  );
};

export default UseLayoutEffectDemo;
