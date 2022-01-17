import React, { useState, useEffect } from 'react';
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
    </div>
  );
}

export default App;
