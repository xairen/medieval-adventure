import React from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css';

function Results() {
  const location = useLocation();
  const { name, age, skill } = location.state.details;

  return (
    <div className="results">
      <h1>Congratulations, Adventurer!</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Skill: {skill}</p>
    </div>
  );
}

export default Results;
