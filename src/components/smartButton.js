import React, { useState } from 'react';
import '../styles/SmartButton.css';

const SmartButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const Decreamenter = () => {
    setCount(count - 1);
  };

  

  return (
    <>
      <button className="smart-button" onClick={handleClick}>
        Clicked {count} times
      </button>

      <button className="smart-button" onClick={handleReset}>
        Reset
      </button>

      <button className="smart-button" onClick={Decreamenter}>
        Decrease
      </button>
    </>
     
  );
};

export default SmartButton;