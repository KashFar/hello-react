import React, { Component } from 'react';
import './App.css';

function Text (props) {
  return <span style = {{color: props.color}}>  {props.name} </span>;
}

// just a span tag that makes text passed into it to a certain color
class App extends Component {
  render() {
    return (
      <h1>
        Hello, <Text name = "Kash" color= "green" />
        </h1>
    );
  }
}

export default App;
