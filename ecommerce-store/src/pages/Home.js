import React from 'react';

const Home = ({ user }) => (
  <div>
    <h1>Welcome to TARANIS</h1>
    {user ? <p>Welcome, {user}!</p> : <p>Discover our collection of Electric Bikes!</p>}
  </div>
);

export default Home;