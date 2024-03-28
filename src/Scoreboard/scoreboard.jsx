import "./scoreboard.css"

function Scoreboard({ score, highscore }) {
  return (
    <div className="scoreboard-container">
      <h2 className="score">Current score: {score}</h2>
      <h2 className="highscore">Highscore: {highscore}</h2>
    </div>
  );
}

export { Scoreboard };
