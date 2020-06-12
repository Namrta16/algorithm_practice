import React from 'react';
import Person from './Person.css';
import Radium, {StyleRoot} from 'radium';

const person = (props) => {
    const style = {
        ' @medis(min-width: 500px)': {
                width: '450px'   
        }
    };
    return (
        <StyleRoot>
        <div className="Person">
        <p onClick={props.click}>
            I'm a {props.name} and {props.age} ! {Math.floor(Math.random()* 30)}</p>

        <p>{props.children}</p>
        <input  type="text" 
                onChange={props.changed}
                value={props.name} /> {/* 2 way binnding lecture - 48 */}
        </div>
        </StyleRoot>
    )
    };

export default Radium(person);