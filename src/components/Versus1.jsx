import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Match.css";

function Match1() {
  const [choice1, setChoice1] = useState("");
  const [pokemonLi1, setPokemonLi1] = useState([]);
  // Validation is used with a onClick Button, each time its used, SearchPokemon() is used

  const validation1 = () => {
    if (choice1) {
      searchPokemon1();
    } else {
      alert("Faites un choix");
    }
  };
  //Target the input

  const textFocus1 = (e) => {
    setChoice1(e.target.value);
  };
  // Define choice1
  useEffect(() => {}, [choice1]);
  // Research of the pokemon with Choice2

  const searchPokemon1 = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + choice1
    );
    const pokemon = await response.json();
    setPokemonLi1([pokemon]);
  };
  return (
    <>
      <div className="input-card-container">
        <input
          type="text"
          value={choice1}
          onChange={textFocus1}
          placeholder="Pokemon's name or ID"
        />
        <button onClick={validation1}>Search</button>
        {pokemonLi1.map((pokemon, index) => (
          <Card key={index} style={{ width: "18rem" }} className="mt-3">
            <Card.Img
              variant="top"
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
            />
            <Card.Body>
              <Card.Title>
                <h1 style={{ fontFamily: "Police", textAlign: "left" }}>
                  {pokemon.name}
                </h1>
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <h5 style={{ fontFamily: "Police", textAlign: "left" }}>
                  Type:
                </h5>
                {pokemon.types.map((type) => (
                  <li key={type.type.name} style={{ textAlign: "left" }}>
                    {type.type.name}
                  </li>
                ))}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 style={{ fontFamily: "Police", textAlign: "left" }}>
                  Abilities:
                </h5>
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name} style={{ textAlign: "left" }}>
                    {ability.ability.name}
                  </li>
                ))}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 style={{ fontFamily: "Police", textAlign: "left" }}>
                  Stats:
                </h5>
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name} style={{ textAlign: "left" }}>
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

export default Match1;
