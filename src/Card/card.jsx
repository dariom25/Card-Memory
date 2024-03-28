import "./card.css";
import { useSound } from "use-sound";

function Card({
  name,
  imageLink,
  scoreHandler,
  scoreResetHandler,
  highscoreHandler,
  clickStatus,
  toggleClickStatus,
  id,
  resetClickStatus,
  soundPath
}) {
  const [play] = useSound(soundPath);
  
  const firstLetterUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  const handleScoreFunctions = () => {
    clickStatus ? handleAlreadyClickedCard() : handleClick();
  };

  const handleToggleClickStatus = () => {
    play();
    toggleClickStatus(id);
  };

  const handleAlreadyClickedCard = () => {
    highscoreHandler();
    scoreResetHandler();
    resetClickStatus();
  };

  const handleClick = () => {
    handleToggleClickStatus();
    scoreHandler();
  };
  return (
    <div className="card-container" onClick={handleScoreFunctions} id={id}>
      <div className="picture-container">
        <img src={imageLink} alt={firstLetterUpperCase(name)} />
      </div>
      <h2>{firstLetterUpperCase(name)}</h2>
    </div>
  );
}

export { Card };
