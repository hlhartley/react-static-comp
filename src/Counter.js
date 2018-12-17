import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
      super();
  
      this.state = {
        count: 5
      }
    }
  
    increaseCount = () => {
      const newState = {
        count: this.state.count + 1
      }
      this.setState(newState);
    }

    decreaseCount = () => {
        const newState = {
            count: this.state.count - 1
        }
      this.setState(newState);
    }

 
    render() {
        if (this.state.count < 10) {
            return (
                <section>
                    <h2>Can you count to 10?</h2>
                    <span>{this.state.count}</span>
                    <button onClick={this.increaseCount}>Add 1</button>
                    <button onClick={this.decreaseCount}>Subtract 1</button>
                </section>
            )
        } else {
            return (
                <section>
                    <h2>You counted to 10!</h2>
                    <span>{this.state.count}</span>
                    <button onClick={this.increaseCount}>Add 1</button>
                    <button onClick={this.decreaseCount}>Subtract 1</button>
                </section>  
            )
        }
    }
}
  

  export default Counter;