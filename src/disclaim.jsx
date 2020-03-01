import React from 'react';
import './App.css';
import { Component } from 'react';

class Refresh extends Component {
    constructor(props){
        super(props);
        this.state={
            pageNum: 0
        }
    }

    nxtPg(){
        if(this.state.pageNum+1<2){
            let nxtPage = this.state.pageNum +1;
            this.setState({
                pageNum: nxtPage
            });
        }
    }

    prevPg(){
        if(this.state.pageNum-1>-1){
            let prevPage = this.state.pageNum - 1;
            this.setState({
                pageNum: prevPage
            });
        }
    }

    render(){
        let styles={        
        }

        if(this.state.pageNum == 0){
            
            return (
                <div style={styles} className="refBtn">
                    <p>
                    NYC has Laws to protect your rights as an employee, protect you from workplace discrimination, and help reach pay parity city wide. 
    
    You have rights as a worker regardless of race, color, religion, gender, sexual orientation, gender identity and expression, age, national origin, marital status, citizenship, disability, and veteran status. 
    
    The Commission on Gender Equity affirms the right of all women to be paid fairly for their work, to take time off when they are sick or caring for their children, and to be free of discrimination based on gender identity, pregnancy, or caretaker status.
    
                    </p>
                    <button onClick={()=>this.prevPg()}>Back</button>
                    <button onClick={()=>this.nxtPg()}>Next Page</button>
    
                </div>
            );            
        } else if(this.state.pageNum == 1){
            
            return (
                <div style={styles} className="refBtn">
                    <p>
                        These Laws <b>protect</b> you and make sure you are <b>paid fairly</b> in NYC:
                    </p>
                    <ol>
                        <li>The Law prohibits Salary history inquiries</li>
                        <li>The Law prohibits CareGiver Bias, regardless of Gender</li>
                        <li>The Law allows for paid family leave for workers for all workers in the New York State</li>
                        <li>The law permits breaks and accomodations for expressing breast milk.</li>
                        <li>The Law prohibits wage descrimination</li>
                    </ol>
                    <button onClick={()=>this.prevPg()}>Back</button>
                    <button onClick={()=>this.nxtPg()}>Next Page</button>

                </div>
          );
        }
    }
}

export default Refresh;
