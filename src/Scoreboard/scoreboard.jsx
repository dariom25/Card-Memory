function Scoreboard({ score = 0, highscore = 0 }) {
  return (
    <div className="scoreboard-container">
      <p className="score">Current score: {score}</p>
      <p className="highscore">Highscore: {highscore}</p>
    </div>
  );
}

export { Scoreboard };
