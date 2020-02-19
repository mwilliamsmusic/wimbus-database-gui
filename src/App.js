import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemForm from "./forms/form";

function App() {
  return (
    <div className="App">
      <ItemForm name='Name' location='Location' desc = 'Description' char='Character'/>
    </div>
  );
}

export default App;
