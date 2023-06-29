import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Match.css";

function Match2() {
  const [choice2, setChoice2] = useState("");
  const [pokemonLi2, setPokemonLi2] = useState([]);
  // Validation is used with a onClick Button, each time its used, SearchPokemon() is used

  const validation2 = () => {
    if (choice2) {
      searchPokemon2();
    } else {
      alert("Faites un choix");
    }
  };
  //Target the input

  const textFocus2 = (e) => {
    setChoice2(e.target.value);
  };
  // Define choice2

  useEffect(() => {}, [choice2]);
  // Research of the pokemon with Choice2

  const searchPokemon2 = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + choice2
    );
    const pokemon = await response.json();
    setPokemonLi2([pokemon]);
  };
  return (
    <>
      <div className="input-card-container">
        <input
          type="text"
          value={choice2}
          onChange={textFocus2}
          placeholder="Pokemon's name or ID"
        />
        <button onClick={validation2}>Search</button>
        {pokemonLi2.map((pokemon, index) => (
          <Card key={index} style={{ width: "18rem" }} className="mt-3">
            <Card.Img
              variant="top"
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
            />
            <Card.Body>
              <Card.Title>
                <h1 style={{ fontFamily: "Police", textAlign: "right" }}>
                  {pokemon.name}
                </h1>
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <h5 style={{ fontFamily: "Police", textAlign: "right" }}>
                  Type:
                </h5>
                {pokemon.types.map((type) => (
                  <li key={type.type.name} style={{ textAlign: "right" }}>
                    {type.type.name}
                  </li>
                ))}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 style={{ fontFamily: "Police", textAlign: "right" }}>
                  Abilities:
                </h5>
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name} style={{ textAlign: "right" }}>
                    {ability.ability.name}
                  </li>
                ))}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 style={{ fontFamily: "Police", textAlign: "right" }}>
                  Stats:
                </h5>
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name} style={{ textAlign: "right" }}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Match2;
