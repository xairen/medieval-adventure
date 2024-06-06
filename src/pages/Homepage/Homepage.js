import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import background from '../../assets/background.jpeg';
import knight from '../../assets/knight.JPG';
import mage from '../../assets/mage.JPG';
import rogue from '../../assets/ranger.JPG';

function Homepage() {
    return (
      <div className="homepage" style={{ backgroundImage: `url(${background})` }}>
        <div className="header">
          <h1 className="welcome-message">Welcome, Adventurer</h1>
          <p className="choose-path">Choose your path:</p>
        </div>
        <div className="paths">
          <Link to="/details/knight" className="path">
            <img src={knight} alt="Knight" className="character-image" />
            <div className="character-label">Knight</div>
          </Link>
          <Link to="/details/mage" className="path">
            <img src={mage} alt="Mage" className="character-image" />
            <div className="character-label">Mage</div>
          </Link>
          <Link to="/details/rogue" className="path">
            <img src={rogue} alt="Rogue" className="character-image" />
            <div className="character-label">Rogue</div>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Homepage;
