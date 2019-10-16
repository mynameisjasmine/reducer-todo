import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/Reducer';
import TodoForm from './TodoForm';

import './App.css';
import TodoList from './TodoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('STATE:', state);

  const toggleTask = id => {
    dispatch({type: 'Toggle_Task', payload: id})
    
  }

  const clearItems = () => {
    
  dispatch({type: 'Clear_Items'})
  }

  
  return (
    <div className="App">
      <h1>Reducer Todo</h1>
      <TodoForm dispatch={dispatch} state={state} clearItems={clearItems}/>
      <TodoList state={state} dispatch={dispatch} toggleTask={toggleTask }/>
    </div>
  );
}

export default App;
