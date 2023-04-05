import React from 'react';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className="Home">
      <h1>React demos</h1>
      <NavLink to="/todolist">To do list</NavLink>
    </div>
  );
};

export default Home;
