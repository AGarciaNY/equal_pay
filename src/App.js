import React,{Component} from 'react';
import Survay from './Components/survay/survay';
import logo from './logo.svg';
import './App.css';
import HomePage from './homePage';

function App() {
  return (
    <div className="App">
      <Survay/>
      <HomePage/>
    </div>
  );
}

export default App;