import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      filterString: "",
      fruits:[
        'Apple',
        'Banana',
        'Peach',
        'Pineapple',
        'Mango',
        'plum'
      ]
    }
  }
  handlechange( filter ) {
    this.setState({ filterString: filter})
  }
  render() {
    let fruitsToDisplay = this.state.fruits.filter( (fruit, index) => {
      return fruit.includes(this.state.filterString);
    }).map( (fruit, index)=> {
      return <h2 key={index}>{fruit}</h2>
    })
    return (
      <div className="App">
        <input onChange={ (e) => this.handlechange( e.target.value )} type="text"/>
        {fruitsToDisplay}
      </div>
    );
  }
}

export default App;
