import React, { useEffect, useState } from 'react';

const ExampleuseState = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
    setCount(count + 1); 
    };
    const handleDecrement = () => {
    setCount(count - 1); 
    };
    useEffect(()=>{console.log("With Dependencies");},[count]);
    useEffect(()=>{console.log("Without array");});
    useEffect(()=>{console.log("With empty Dependencies");},[]);
    return (
        <div className="layout-container__wrapper">
           <h1>useState Hook Example</h1>
           <p>Count : {count}</p>
           <button onClick={handleIncrement}>Increment</button>
           <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};
export default ExampleuseState ;