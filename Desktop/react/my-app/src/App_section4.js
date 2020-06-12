import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

//import person from './Person/Person';

class App extends Component {
  //something = "some value";

  state = {
    persons: [
      { id:'asfa1', name: 'Nam..',age:28},
      { id:'vasdf1', name: 'Namrta',age:28}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
// const personIndex = this.state.persons[personIndex];
    const person = {
      ...this.state.persons[personIndex]
    }
// const person = Object.assign({}, this.state.persons[personIndex])

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
    //const persons = this.state.persons.slice();
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){ // lecture 55.
        persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person
            click= {() => this.deletePersonHandler(index)} // adden in 58.
              name ={person.name}
              age = {person.age} 
              key = {person.id}
              changed= {(event) => this.nameChangedHandler(event, person.id )}/>
          })}
          {/* <Person  // commented in lecture 57: Outputting Lists
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age}/>
          <Person 
            name = "Namrta" 
            click= {this.swithNameHandler.bind(this, 'Nnnnnn')}
            changed={this.nameChangedHandler}
          age = "28"> My ........</Person> */}

        </div>);
    }

    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <p> This is Working !</p>
        <button 
          style={style}
          onClick = {() => this.swithNameHandler('jjjjjj')}> {/* lecture 47. this can be inefficient */}
          Switch Name </button>
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
