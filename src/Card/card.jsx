import { useState } from "react";
import "./card.css";

function Card({ name, imageLink, scoreHandler, shuffleHandler, scoreResetHandler, highscoreHandler }) {
  const [wasClicked, setWasClicked] = useState(false);
  const firstLetterUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  const handleScoreFunctions = () => {
    !wasClicked ? handleClick() : handleAlreadyClickedCard()
  }

  const handleAlreadyClickedCard = () => {
    highscoreHandler();
    scoreResetHandler();
    shuffleHandler();
  }

  const handleClick = () => {
    setWasClicked(!wasClicked);
    scoreHandler();
    shuffleHandler();
  };
  return (
    <div className="card-container" onClick={handleScoreFunctions}>
      <div className="picture-container">
        <img src={imageLink} alt={firstLetterUpperCase(name)} />
      </div>
      <h3>{firstLetterUpperCase(name)}</h3>
    </div>
  );
}

export { Card };
