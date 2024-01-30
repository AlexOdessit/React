import React from 'react';
import './App.css';
import { getCards } from './api';
import DataLoader from './components/DataLoader';
import Slider from './components/Slider';

function App(props) {
  return (
    <DataLoader loadData={getCards} render={(data) => <Slider {...data} />} />
  );
}

export default App;
