import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
//import person from './Person/Person';

class App extends Component {
  //something = "some value";

  state = {
    persons: [
      {name: 'Nam..',age:28}
    ]
  }

  swithNameHandler = () => {
    //console.log('was clicked !');
    // DON'T DO: this.state.persons[0].name = 'Nam...'
    this.setState({ 
      persons: [
        {name: 'kkk', age:29}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick = {this.swithNameHandler}> Switch Name </button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = "Namrta" age = "28"> My ........</Person>
      </div>
    );
  }
}

export default App;
