import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
