import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'asfa1', name: 'Nam..',age:28},
      { id:'vasdf1', name: 'Namrta',age:28}
    ],
    otherState: 'some other value',}
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }

person.name = event.target.value;
const persons = [...this.state.persons];

persons[personIndex] = person;
    this.setState({ 
      persons: [
        {name: event.target.value, age:29}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor: 'lightGreen',
        color : 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons){ // lecture 55.
        persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person
            click= {() => this.deletePersonHandler(index)} // added in 58.
              name ={person.name}
              age = {person.age} 
              key = {person.id}
              changed= {(event) => this.nameChangedHandler(event, person.id )}/>
          })}
        </div>);
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'lightRed',
          color : 'black'
        }
    }

    //let classes = ["red", "bold"].join(' '); //"red, bold"
    const classes = [];
if(this.state.length <= 2){ // lecture6 8.
  classes.push('red'); //classes = ['red']
}
if(this.state.length <= 1){
  classes.push('bold'); //classes = ['red', 'bold']
}
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <p className={classes}> This is Working !</p>
          <p className={classes.join(' ')}> This is Working !</p>
        <button 
          style={style}
          onClick = {this.togglePersonsHandler}> {/* lecture 54 */}
          Toggle Name </button>
        {persons}
      </div>
    );
  }
}
export default App;
