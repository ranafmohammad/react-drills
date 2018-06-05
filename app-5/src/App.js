import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://i.pinimg.com/originals/77/27/f6/7727f6bad769c9dd82570469a06fc209.jpg"} />
      </div>
    );
  }
}

export default App