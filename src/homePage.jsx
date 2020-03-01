import React from 'react';
import './App.css';
import { Component } from 'react';
import InfoBox from './infoBox';
import Nav from './nav';
import Refresh from './refresh';
import Disclaimer from './disclaim';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : this.props.data
        }
    }

    refreshInfo(){
        console.log(this.state);
        this.setState({
            data: "orienvoren oernvoie"
        });
    }

    render(){
        let styles={
            width: "100%",
            
        }
        
        return (
          <div style={styles} className="homePage">
              <Nav/>
              <Disclaimer/>
              <Refresh refreshBtn={()=>this.refreshInfo()}/>
              <InfoBox info={this.state.data}/>
          </div>
        );
    }
}

export default HomePage;
