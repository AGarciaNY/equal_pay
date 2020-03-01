import React from 'react';
import './App.css';
import { Component } from 'react';
import Question from './question';
import Nav from './nav';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            home : null
        }
    }
    render(){
        return (
          <div className="homePage">
              <Nav/>
              <Question ques="hello world"/>
          </div>
        );
    }
}

export default HomePage;
