import { useState } from "react";
import { Grid } from "./Grid/grid";
import { Scoreboard } from "./Scoreboard/scoreboard";
import { Title } from "./Title/title";

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
    if (highscore < score) {setHighscore(prevHighscore => prevHighscore = score)}
  }
  
    return (
    <>
      <Title></Title>
      <Scoreboard score={score} highscore={highscore}/>
      <Grid scoreHandler={updateScore} scoreResetHandler={resetScore} highscoreHandler={updateHighscore}/>
    </>
  );
}
