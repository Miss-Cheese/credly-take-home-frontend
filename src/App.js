import React, { useState, useEffect } from 'react';
import HeroList from './components/heroList'
import './App.css';

const URL = "http://localhost:3000";

function App() {

  const [users, setUsers] = useState([])

  function fetchUsers() {
    const request = fetch(`${URL}/users`)

    request
      .then(response => response.json())
      .then(data => setUsers(data))
  }

  useEffect(fetchUsers, [])

  return (
    <div className="App">
      <header className="App-header">
        Saviors of the Universe
      </header>
      <HeroList users={users}/>
    </div>
  );
}

export default App;
