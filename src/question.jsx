import React from 'react';
import './App.css';
import { Component } from 'react';

class Question extends Component {
    constructor(props){
        super(props)
        this.state = {
            question : null
        }
    }
    render(){
        return (
          <div className="question">
              <p>{this.props.ques}</p>
          </div>
        );
    }
}

export default Question;
