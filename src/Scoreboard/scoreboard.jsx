function Scoreboard({ score, highscore }) {
  return (
    <div className="scoreboard-container">
      <p className="score">Current score: {score}</p>
      <p className="highscore">Highscore: {highscore}</p>
    </div>
  );
}

export { Scoreboard };
