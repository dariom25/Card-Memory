import { useState } from "react";
import { Grid } from "./Grid/grid";
import { Scoreboard } from "./Scoreboard/scoreboard";

export default function App() {
  const [score, setScore] = useState(0)
  const [highscore, setHighscore] = useState(0)

  const updateScore = () => {
    setScore(score + 1)
  }

  const resetScore = () => {
    setScore(prevScore => prevScore = 0)
  }

  const updateHighscore = () => {
    setHighscore(prevHighscore => prevHighscore = score)
  }
  
    return (
    <>
      <Scoreboard score={score} highscore={highscore}/>
      <Grid scoreHandler={updateScore} scoreResetHandler={resetScore} highscoreHandler={updateHighscore}/>
    </>
  );
}
