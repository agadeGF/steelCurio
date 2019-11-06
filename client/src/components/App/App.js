import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from '../../routes';
import * as homeScreen from '../../homeScreen';
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

      <footer>
        {
          homeScreen.canInstall
            ? <button onClick={homeScreen.promptInstallation} className="App__install-button">Install me</button>
            : null
        }
      </footer>
    </div>
  );
}

export default App;
