import "./grid.css";
import { Card } from "../Card/card.jsx";
import { useEffect } from "react";

function Grid() {
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu", { mode: "cors" }).then(
      function (response) {
        console.log(response.json());
      },
    ),
      [];
  });

  return <Card name={"Pikachu"} />;
}

export { Grid };
