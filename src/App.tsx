import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Application } from './app/application';


function App() {  
  React.useEffect(() => {
    new Application(document.querySelector('#diagram') as HTMLElement);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div id="diagram">
          
        </div>
      </header>
    </div>
  );
}

export default App;
