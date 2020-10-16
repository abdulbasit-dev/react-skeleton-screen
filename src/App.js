import React from 'react';
import './App.css';
import Articles from './components/Articles'
import User from './components/User'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>React Skeleton</h1>
      </header>
      <div className="app__content">
        <Articles/>
        <User/>
      </div>
    </div>
  );
}

export default App;
