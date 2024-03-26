import "./grid.css";
import { Card } from "../Card/card.jsx";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";

function Grid() {
  const [pokemonInfos, setPokemonInfos] = useState([]);

  useEffect(() => {
    const pokemonNames = [
      "banette",
      "misdreavus",
      "gengar",
      "lampent",
      "mismagius",
      "drifloon",
      "sableye",
      "spiritomb",
      "spectrier",
    ];
    pokemonNames.forEach((pokemon) => {
      if (pokemonInfos.length === 0) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, { mode: "cors" })
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            const {
              cries: { legacy },
              id,
              species: { name },
              sprites: { front_default },
            } = response;
            setPokemonInfos((pokemonList) => [
              ...pokemonList,
              { legacy, id, name, front_default },
            ]);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, [pokemonInfos]);

  return (
    <div className="grid-container">
      {pokemonInfos.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            imageLink={pokemon.front_default}
            shuffleHandler={() => setPokemonInfos(shuffle(pokemonInfos))}
          />
        );
      })}
    </div>
  );
}

export { Grid };
