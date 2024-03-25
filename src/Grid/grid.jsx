import "./grid.css";
import { Card } from "../Card/card.jsx";
import { useEffect, useState } from "react";

function Grid() {
  const [pokemonInfos, setPokemonInfos] = useState([]);
  const pokemons = pokemonInfos.map((pokemon) => {
    return (
      <Card
        key={pokemon.id}
        name={pokemon.name}
        imageLink={pokemon.front_default}
      />
    );
  });

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
        });
    });
  }, []);

  return <div className="grid-container">{pokemons}</div>;
}

export { Grid };
