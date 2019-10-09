import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/Reducer';
import TodoForm from './TodoForm';

import './App.css';
import TodoList from './TodoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('STATE:', state);
  
  return (
    <div className="App">
      <h1>Reducer Todo</h1>
      <TodoForm dispatch={dispatch} state={state}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
