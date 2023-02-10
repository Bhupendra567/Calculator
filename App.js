import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      Result:0
    }
  }

  calculator=()=>{
    var x = this.fnumbox.value*1
    var y = this.snumbox.value*1
    var n = this.onumbox.value*1
    var z = 0
    switch(n){
      case 1: z = x+y;
      break;
      case 2: z = x-y;
      break;
      case 3: z = x*y;
      break;
      case 4: z = x/y;
      break;
      case 5: z = x%y;
      break;
      default:
    }
    this.setState({Result:z})

  }
  render() {
    return (
      <div class="box">
        <h1>Calculator</h1>
        <hr></hr>
        <input ref={c=>this.fnumbox=c}placeholder="Enter the first number" class = "first"></input><br></br><br></br>
        <input ref={c=>this.snumbox=c} placeholder="Enter the first number" class = "first"></input><br></br><br></br>
        <select ref={c=>this.onumbox=c}>
          <option>Choose the operation (+  ,  -  ,  *  ,  /  ,  %)</option>
          <option value = "1">Adittion</option>
          <option value = "2">Substraction</option>
          <option value = "3">Multiplication</option>
          <option value = "4">Division</option>
          <option value = "5">Modulus</option>
        </select><br></br><br></br>
        <button onClick={this.calculator}>Calculate</button><br></br>
        <hr></hr>
        <b class= "res">{this.state.Result}</b>
      </div>
    )
  }
}
