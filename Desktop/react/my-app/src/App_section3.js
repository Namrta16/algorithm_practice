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
    ],
    otherState: 'some other value',
    showPersons: false
  }

  swithNameHandler = (newName) => {
    //console.log('was clicked !');
    // DON'T DO: this.state.persons[0].name = 'Nam...'
    this.setState({ 
      persons: [
        {name: newName, age:29}
      ]
    })
  }
  nameChangedHandler = (event) => {
    //console.log('was clicked !');
    // DON'T DO: this.state.persons[0].name = 'Nam...'
    this.setState({ 
      persons: [
        {name: event.target.value, age:29}
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button 
          style={style}
          onClick = {() => this.swithNameHandler('jjjjjj')}> {/* lecture 47. this can be inefficient */}
          Switch Name </button>
          
          <div>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name = "Namrta" 
          click= {this.swithNameHandler.bind(this, 'Nnnnnn')}
          changed={this.nameChangedHandler}
          age = "28"> My ........</Person>
      </div>
  }
  </div>
    );
  }
}

export default App;
