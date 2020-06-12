import React from 'react';
//import Person from './Person.css';
import styled from 'styled-components';

const StyledDiv =  styled.div`
        width: 60%;
        margin: auto;
        border: 1px solid;
        padding: 16px;
        text-align: center;

        @medis(min-width: 500px) {
            width: 450px;
            }
    `

const person = (props) => {
    const style = {
        ' @medis(min-width: 500px)': {
                width: '450px'   
        }
    };
    return (
       // <div className="Person">
       
    <StyledDiv>
        <p onClick={props.click}>
            I'm a {props.name} and {props.age} ! {Math.floor(Math.random()* 30)}</p>

        <p>{props.children}</p>
        <input  type="text" 
                onChange={props.changed}
                value={props.name} /> {/* 2 way binnding lecture - 48 */}
    </StyledDiv>
    )
    };

export default person;