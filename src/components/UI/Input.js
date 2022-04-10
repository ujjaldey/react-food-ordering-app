import React from 'react';
import classes from './Input.module.css';

const Input = props => {
  return <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    {/* ... = ensures all the key value pairs in the input object we receive on props.input are added as props to <input/> */}
    {/* say if the input object contains {type: 'text'}, then this will make sure the input element will have type="text" attribute */}
    <input {...props.input} />
  </div>;
};

export default Input;