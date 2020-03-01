import React from 'react';
import './App.css';
import { Component } from 'react';

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            home : null
        }
    }
    render(){
        let styles = {
            float: "left",
            backgroundColor: "lightBlue",
            width: "100vw",
        }
        return (
          <div style={styles} className="navbar">
              <h1>Website</h1>          
          </div>
        );
    }
}

export default Nav;
