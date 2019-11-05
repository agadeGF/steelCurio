import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from '../../routes';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section>
        <HashRouter>
          <Routes></Routes>
        </HashRouter>
      </section>
    </div>
  );
}

export default App;
