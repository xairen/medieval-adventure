import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Details.css';

function Details() {
  const { path } = useParams();
  const [details, setDetails] = useState({ name: '', age: '', skill: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/loading', { state: { details } });
  };

  return (
    <div className="details">
      <h1>{`Enter your details, ${path.charAt(0).toUpperCase() + path.slice(1)}`}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={details.name} onChange={handleChange} required />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={details.age} onChange={handleChange} required />
        </label>
        <label>
          Skill:
          <input type="text" name="skill" value={details.skill} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Details;
