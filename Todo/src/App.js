import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import Coords from './components/Coords';

function App() {
  return (
    <>
      <Counter />
      <Coords />
      <TodoList />
    </>
  );
}

export default App;
