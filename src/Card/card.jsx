import { useState } from "react";
import "./card.css";

function Card({ name, imageLink, soundHandler }) {
  const [wasClicked, setWasClicked] = useState(false)
  
  const handleClick = () => {
    setWasClicked(!wasClicked)
    soundHandler()
  }
    return (
    <div className="card-container" onClick={handleClick}>
      <div className="picture-container">
        <img src={imageLink} alt={name} />
      </div>
      <h3>{name}</h3>
    </div>
  );
}

export { Card };
