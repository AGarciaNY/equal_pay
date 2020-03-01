import React,{Component} from 'react';
import Survay from './Components/survay/survay';
import logo from './logo.svg';
import './App.css';
import HomePage from './homePage';

let sampleData = {
  info:[
    "lenceornverskld vklreon nerdikvno weiorubncverlenceornverskld vklreon nerdikvno weiorubncverlenceornverskld vklreon nerdikvno weiorubncver"
  ],

}

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      done: false
    }
  }

  doneQuest(){
    this.setState({
      done: true
    })
  }
  render(){      
    if(this.state.done){
      return (
        <div className="App">
          <HomePage data="hello world"/>    
        </div>
      );
    } else {
      return (
        <div className="App">
          <Survay done={()=>this.doneQuest()}/>
        </div>
      );
    }
  }
}

export default App;