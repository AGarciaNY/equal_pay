import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './homePage';

let sampleData = {
  info:[
    "lenceornverskld vklreon nerdikvno weiorubncverlenceornverskld vklreon nerdikvno weiorubncverlenceornverskld vklreon nerdikvno weiorubncver"
  ],

}

function App() {
  let info = false;
  if(info){
    return (
      <div className="App">
        <HomePage data="hello world"/>    
      </div>
    );
  } else {
    return (
      //switch this out with the questionaire or survey
      <div className="App">
        <HomePage data="ervn"/>    
      </div>
    );
  }
}

export default App;