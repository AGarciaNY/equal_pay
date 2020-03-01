import React from 'react';
import './App.css';
import { Component } from 'react';

class Info extends Component {
    constructor(props){
        super(props)
        this.state = {
            info : null
        }
    }
    render(){
        let styles={
            width: "100%",
            marginTop: "5px",
            display: "flex",
            justifyContent: "center"
        }
        let pStyle = {
            width: "70%",
            padding: "30px",
            backgroundColor: "gray",
            textAlign: "left"
        }
        
        
        return (
            <div style={styles} className="info">
                <p style={pStyle}>{this.props.text}</p>
            </div>
        );
    }
}

export default Info;
