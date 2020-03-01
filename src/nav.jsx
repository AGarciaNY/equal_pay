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
            backgroundColor: "lightBlue",
            width: "100%",
            paddingTop: "20px",
            paddingBottom: "20px",
            marginTop: "-16px",
            color: "#673AB7"
        }
        return (
            <div style={styles}>
                <h1>NYC PAY PARITY NOW</h1>  
            </div>      
        );
    }
}

export default Nav;
