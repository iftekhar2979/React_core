import React, { Component } from 'react'

 class States extends Component {
    state={
        count:0,
        counter:0,
        all:0,
      
    }
    
  render() {
    return (
        <>
        <div>
      <h2>Deposite 500 : {this.state.count}</h2>
      <button onClick={()=>{this.setState(prev=>{return {count:prev.count+=500}})}}>add</button>
      <h2>Deposite 1000 : {this.state.counter}</h2>
      <button onClick={()=>{this.setState(prev=>{return {counter: prev.counter+=1000}})}}> Add five</button>
      <h3>Total : {this.state.all}</h3>
      <button onClick={()=>{this.setState(prev=>{return {all:this.state.count+this.state.counter+prev.all}})}}>Total Balance</button>
      <button onClick={()=>{this.setState(prev=>{return {all:prev.all-1000}})}}>Withdraw 1000</button>
            </div>
        </>
     
    )
  }
}
export default States