import React from 'react';
import './App.css';
import { Component } from 'react';

class Refresh extends Component {
    render(){
        let styles={        
            display: "flex",
            justifyContent: "center"
        }

        return (
          <div style={styles} className="refBtn">
              <button onClick={()=>this.props.refreshBtn()}> Refresh </button>
          </div>
        );
    }
}

export default Refresh;
