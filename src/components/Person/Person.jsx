import React from 'react';
import classes from './Person.css'


const person = ( props ) => {
  return (
    <div className={classes.Person}>
      <h2 onClick={props.click}>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>)
};

export default person;
