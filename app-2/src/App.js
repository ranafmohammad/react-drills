import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruits: [
        'Apple',
        'Orange',
        'Banana',
        'Pineapple',
        'Peach',
        'Mango'

      ]
    }
  }
  render() {
    let fruitsToDisplay = this.state.fruits.map((element, index) => {
      return (
        <h2 key={index} >  {element}</h2>
      )
    })
    return (
      <div className="App">
        {fruitsToDisplay}
      </div>
    );
  }
}

export default App;
