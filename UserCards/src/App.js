import React from 'react';
import './App.css';
import UserList from './components/UserList';
import Timer from './components/Timer';

function App(props) {
  return (
    <>
      <Timer />
      <UserList />
    </>
  );
}

export default App;
