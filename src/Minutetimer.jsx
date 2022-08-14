import React, { Component } from 'react';

class Minutetimer extends Component {
    state={
        hour:0,
        minute:0,
        second:0,
    }
    intervalId=null
    incrementHour=()=>{
        this.setState({hour:this.state.hour+1})
    }
    incrementMinute=()=>{
        this.setState({minute:this.state.minute+1})
        if(this.state.minute===60){
            this.setState({hour:this.state.hour+1})
            this.setState({minute:0})
        } 
    }
    IncrementSecond=()=>{
        this.setState({second: this.state.second+1}) 
       
        if(this.state.second===60){
            this.setState({minute:this.state.minute+1})
            this.setState({second:0})
        }  
           }
    startMinute=()=>{
        if((this.state.hour>0 || this.state.minute>0 || this.state.second>0) && !this.intervalId){
       this.intervalId= setInterval(() => {
            if(this.state.second>0){
                this.setState({second:this.state.second-1})      
            }
            if(this.state.second===0 ){
                this.setState({second:60})
                this.setState({minute:this.state.minute-1})
                if(this.state.minute===0){
                    this.setState({minute:60})
                    this.setState({hour:this.state.hour-1})
                }
            }
           
          
            if( this.state.minute===0 && this.state.hour===0 && this.state.second===0){
               
                this.setState({hour:0})
                this.setState({minute:0})
                this.setState({second:0})
              
                clearInterval(this.intervalId)
                this.intervalId=null
                alert('Timer Stoped')         
            }
            
        }, 10);
    }
    }
    stopMinute=()=>{
        if(this.intervalId){
            clearInterval(this.intervalId)
            this.intervalId=null
        }
    }
    resetMinute=()=>{
        this.setState({second:0})
        this.setState({minute:0})
        this.setState({hour:0})
    }
    render() {
        return (
            <div>
                <h3>{this.state.hour} Hour {this.state.minute} Minute {this.state.second} second Remaining! </h3>
                <button onClick={this.incrementHour}>Increment Hour</button>
                <button onClick={this.incrementMinute}>Increment Minute</button>
                <button onClick={this.IncrementSecond}>Increment Second</button>
                <button onClick={this.startMinute}>Start</button>
                <button onClick={this.stopMinute}>Stop</button>
                <button onClick={this.resetMinute}>Reset</button>
                
            </div>
        );
    }
}

export default Minutetimer;