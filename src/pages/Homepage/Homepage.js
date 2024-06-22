import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import background from '../../assets/backgroun-medival.jpeg';
import knight from '../../assets/knight.JPG';
import mage from '../../assets/mage.JPG';
import rogue from '../../assets/ranger.JPG';
import paladin from '../../assets/paladin.JPG';
import barbarian from '../../assets/barbarian.JPG';
import hunter from '../../assets/hunter.JPG';
import monk from '../../assets/monk.JPG';

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
        <Link to="/details/paladin" className="path">
          <img src={paladin} alt="Paladin" className="character-image" />
          <div className="character-label">Paladin</div>
        </Link>
        <Link to="/details/barbarian" className="path">
          <img src={barbarian} alt="Barbarian" className="character-image" />
          <div className="character-label">Barbarian</div>
        </Link>
        <Link to="/details/hunter" className="path">
          <img src={hunter} alt="Hunter" className="character-image" />
          <div className="character-label">Hunter</div>
        </Link>
        <Link to="/details/monk" className="path">
          <img src={monk} alt="Monk" className="character-image" />
          <div className="character-label">Monk</div>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
