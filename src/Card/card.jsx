import { useState } from "react";
import "./card.css";

function Card({ name, imageLink, soundHandler, shuffleHandler }) {
  const [wasClicked, setWasClicked] = useState(false);
  const firstLetterUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };
  const handleClick = () => {
    setWasClicked(!wasClicked);
    shuffleHandler();
  };
  return (
    <div className="card-container" onClick={handleClick}>
      <div className="picture-container">
        <img src={imageLink} alt={firstLetterUpperCase(name)} />
      </div>
      <h3>{firstLetterUpperCase(name)}</h3>
    </div>
  );
}

export { Card };
