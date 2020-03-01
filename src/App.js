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
      done: false,
      data: null
    }
  }

  doneQuest(){
    this.setState({
      done: true
    })
  }

  getData(newData){
    this.setState({
      data:newData
    })
  }
  render(){      
    if(this.state.done){
      return (
        <div className="App">
          <HomePage data={this.state.data}/>    
        </div>
      );
    } else {
      return (
        <div className="App">
          <Survay getD={(nwdata)=>this.getData(nwdata)} done={()=>this.doneQuest()}/>
        </div>
      );
    }
  }
}

export default App;