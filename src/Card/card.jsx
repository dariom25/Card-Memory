import "./card.css";

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
}) {
  const firstLetterUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  const handleScoreFunctions = () => {
    clickStatus ? handleAlreadyClickedCard() : handleClick();
  };

  const handleToggleClickStatus = () => {
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
      <h3>{firstLetterUpperCase(name)}</h3>
    </div>
  );
}

export { Card };
