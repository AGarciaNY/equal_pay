import React from 'react';
import './App.css';
import { Component } from 'react';
import Info from "./info";

class InfoBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            info : null
        }
    }
    render(){
        let styles={
            margin: "auto",
            marginTop: "100px",
            marginBottom: "50px",
            border: "2px solid",
            width: "80%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
        }
        
        return (
          <div style={styles} className="infoBox">
              <Info text={this.props.info}/>
              <Info text={this.props.info}/>
              <Info text={this.props.info}/>
              <Info text={this.props.info}/>
              <Info text={this.props.info}/>
          </div>
        );
    }
}

export default InfoBox;
