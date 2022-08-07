import React, { useState, useEffect } from 'react';
import List from './List.jsx';
import '../styles/Container.css';

function Container() {
  let arr = [];

  let addItem = () =>{
    arr.push()
  }

  let addToList= () => {
  
  };

  return (
    <div className="container">
      <div className="header">To-do app</div>
      <div className="action">
        <input
          className="item_input"
          type="text"
          name="firstname"
          onChange={addToList}
        />
        <button className="add" name="add" onCLick={addItem}></button>
      </div>
      <List />
    </div>
  );
}

export default Container;
