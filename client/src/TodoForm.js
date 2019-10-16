import React, { useState, useReducer } from 'react';


const TodoForm = props => {
const [task, setTask] = useState('')




 
 const changeHandler = event => {
    setTask(event.target.value);
    console.log('TASK:',task);
 }

 const addItem = event => {
  event.preventDefault();
  props.dispatch({type: 'Add_Task', payload: task})
  setTask('')
 }

 

    return (
      <form onSubmit={(event) => {
        addItem(event)
      }}>
      <input 
      type='text'
      value={task}
      name='item'
      placeholder='...add a task'
      onChange={changeHandler}
      
      />
      <button type="submit">Add Todo</button>
      <button onClick={props.clearItems}>Clear Completed</button>

    
      </form>
    )
}
export default TodoForm;