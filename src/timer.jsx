import React, { Component } from 'react'

 class Timer extends Component {
    state={
        count:0
    }
    intervalId=null
 handlePlus=()=>{
 this.setState({count: this.state.count+1})    
    }
    handleMinus=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }else{
            this.setState({count:this.state.count})
        }
      
    }
    intervalTimer=()=>{
        if(this.state.count>0 && !this.intervalId){
          this.intervalId=  setInterval(() => {
            this.setState({count:this.state.count-1},()=>{
                if(this.state.count===0){
                    alert('Timer Stoped')
                    clearInterval(this.intervalId)
                    this.intervalId=null
                }
            })
            }, 100);
        }
        
    }
    handleStop=()=>{
     if(this.intervalId){
      clearInterval(this.intervalId)
      this.intervalId=null
     }
     }
     handleReset=()=>{
      this.setState({count:0})
     }
  render() {
    return (
      <div className='container'>
        <h2>timer {this.state.count}</h2>
        <button onClick={()=>this.handlePlus()}>+</button>
        <button onClick={()=>{this.handleMinus()}}>-</button>
        <div>
            <button onClick={()=>this.intervalTimer()}>Start</button>
            <button onClick={()=>this.handleStop()}>Stop</button>
            <button onClick={()=>this.handleReset()}>reset</button>
        </div>
      </div>
    )
  }
}
export default Timer