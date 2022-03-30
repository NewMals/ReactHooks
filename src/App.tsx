import React from 'react';
import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Characters/>
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
