import React from 'react';
import './App.css';
import Jumbotron from './components/jumbotron';
import Users from './components/users';

function App() {
  return (
    <main className="container">
    <Jumbotron />
      <Users />
    </main>
  );
}

export default App;
