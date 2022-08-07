import React, { useState, useEffect } from 'react';
import '../styles/Container.css';

function Container() {
  const [count, setCount] = useState({
    name: 'Ola',
    age: 2,
  });

  useEffect(() => {
    setInterval(increment, 1000);
  }, []);

  let increment = () => {
    setCount((...previousState) => {
      return { ...previousState, age: count.age + 1 };
    });
  };

  return (
    <div className="container">
      <div className="header">To-do app</div>
      <div className="action">
        <input className="item_input" type="text" name="firstname" />
        <button className="add" name="add"></button>
      </div>
    </div>
  );
}

export default Container;
