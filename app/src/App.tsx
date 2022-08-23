import React from 'react';
import './App.css';
import i18n from './i18n/config';

function App() {
  const { t } = i18n;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Projeto Hellenzinha & Vitinho 
        </p>
        <h1>{t<string>('oi')}</h1>
      </header>
    </div>
  );
}

export default App;