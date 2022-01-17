import React, { useState, useEffect } from 'react';
import HeroList from './components/heroList'
import './App.scss';

const URL = 'http://localhost:3000'
const ORG_ID = '79e7354c-fb81-41f3-b1f4-d977609945a3'
const authorizationToken = btoa(process.env.REACT_APP_AUTHORIZATION_TOKEN)

function App() {

  const [users, setUsers] = useState([])
  const [badges, setBadges] = useState([])

  const fetchUsers = () => {
    const request = fetch(`${URL}/users`)

    request
      .then(response => response.json())
      .then(data => setUsers(data))
  }

  useEffect(fetchUsers, [])
  
  const fetchBadges = () => {

    const request = fetch(
      `/v1/organizations/${ORG_ID}/badge_templates`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Basic ${authorizationToken}`
        },
      }
    )

    request
      .then(response => response.json())
      .then(response => setBadges(response.data))
  }

  useEffect(fetchBadges, [])
  console.log(badges)

  const issueBadge = (user) => {

    const request = fetch(
      `/v1/organizations/${ORG_ID}/badges`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Basic ${authorizationToken}`
        },
        body: JSON.stringify({
          badge_template_id: '40ebaf9c-2d66-46f4-a398-c816e0bb9409',
          issued_at: new Date(),
          recipient_email: user.email
        })
      }
    )

    request
      .then(response => response.json())
      .then(response => console.log(response))
  }

  return (
    <div className="App">
      <header className="App-header">
        Saviors of the Universe
      </header>
      <HeroList users={users} issueBadge={issueBadge} badges={badges}/>
    </div>
  );
}

export default App;
