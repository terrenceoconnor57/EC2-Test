import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';






class App extends Component {
  state = {
    content: 0,
    addText: [null]
  }


  addMoreText = () => {
    this.setState({
      addText: [this.state.addText,'Another']
    })
  }

  addContent = () => {
    this.setState({
      content: this.state.content +1
    })

  }

  subtractContent = () => {
    this.setState({
      content: this.state.content -1
    })
  }

  resetContent = () => {
    this.setState({
      content: 0
    })
  }
  render() {



  return (
    <div className="App">
      <header className="App-header">
        <button onClick = {this.addContent}>Add</button>
        <button onClick = {this.subtractContent}>Subtract</button>
        <button onClick = {this.resetContent}>Reset</button>
        <h1>{this.state.content}</h1>


        <button onClick = {this.addMoreText}>Click for more</button>


      </header>

      {this.state.addText.map((add =>

      <ul key = 'add'>
      <li>{add}</li>

      </ul>
      ))}


    </div>
  );
}
}

export default App;
