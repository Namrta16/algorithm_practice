import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
//import person from './Person/Person';

const app = (props) => {

  //const stateArr = useState({
  const [ personsState, setPersonsState ] = useState({
      persons: [
        {name: 'Nam..',age:28}
      ]
    }
  );
  console.log(personsState);
  const[otherState, setOtherState]= useState('Some other value');
  //state =
const swithNameHandler = () => {
  setPersonsState({ 
    persons: [
      {name: 'kkk', age:29}
    ]
  });
};
  //render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick = {swithNameHandler}> Switch Name </button>
        <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
        <Person name = "Namrta" age = "28"> My ........</Person>
      </div>
    );
  }
//};

export default app;



