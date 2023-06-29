import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./font.css";
import "./search.css";

function Search() {
  const [choice, setChoice] = useState("");
  const [pokemonLi, setPokemonLi] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // Validation is used with a onClick Button, each time its used, SearchPokemon() is used
  const validation = () => {
    if (choice) {
      searchPokemon();
    }
  };
  //Target the input
  const textFocus = (e) => {
    setChoice(e.target.value);
  };
  // Define choice

  useEffect(() => {}, [choice]);
  // Research of the pokemon with Choice

  const searchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + choice);
    if (response.ok) {
      const pokemon = await response.json();
      setPokemonLi([pokemon]);
      setErrorMessage("");
    } else {
      setPokemonLi([]);
      setErrorMessage("No Pokemon found.");
    }
  };

  return (
    <div className="container">
      <h1 style={{ fontFamily: "Police" }}> Find a pokémon</h1>
      <input
        type="text"
        value={choice}
        onChange={textFocus}
        placeholder="Pokemon's name or ID"
      />
      <button onClick={validation}>Search</button>
      {errorMessage && <div>{errorMessage}</div>}
      <div className="cards-container">
        {pokemonLi.map((pokemon) => (
          <Card key={pokemon.id}>
            <Card.Body>
              <h1 className="text-center" style={{ fontFamily: "Police" }}>
                {pokemon.name}
              </h1>
            </Card.Body>
            <hr></hr>
            <Card.Img
              variant="bottom"
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
            />
            <hr></hr>
            <Card.Body>
              <div className="text-center">
                <h5 style={{ fontFamily: "Police" }}>Weight:</h5>
                {pokemon.weight}
                <h5 style={{ fontFamily: "Police" }}>Height:</h5>
                {pokemon.height}
                <h5 style={{ fontFamily: "Police" }}>PokemonID:</h5>
                {pokemon.id}
                <h5 style={{ fontFamily: "Police" }}>Type:</h5>
                {pokemon.types.map((type) => (
                  <li key={type.type.name}>{type.type.name}</li>
                ))}
                <h5 style={{ fontFamily: "Police" }}>Abilities:</h5>
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
                <h5 style={{ fontFamily: "Police" }}>Move:</h5>
                <h5 style={{ fontFamily: "Police" }}>Stats:</h5>

                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </div>
              <Form.Select>
                <option>All the moves avaible</option>
                {pokemon.moves.map((move) => (
                  <option disabled key={move.move.name}>
                    {move.move.name}
                  </option>
                ))}
              </Form.Select>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Search;
