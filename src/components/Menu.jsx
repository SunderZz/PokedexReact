import { useState, useEffect } from "react";
import "./font.css";

function Menu() {
  const [randomNumber, setRandomNumber] = useState("pikachu");
  const [pokemon, setPokemon] = useState({});
  // useEffect to change the value of randomNumber with a useState
  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 999) + 1;
      setRandomNumber(newRandomNumber);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  // useEffect to use SearchPokemon each time RandomNumber change
  useEffect(() => {
    searchPokemon();
  }, [randomNumber]);
  // Research of the pokemon with a random number
  const searchPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + randomNumber
    );
    const data = await response.json();
    setPokemon(data);
  };
  return (
    <>
      <div>
        {/* Image */}
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      </div>
      {/* Name*/}
      <div style={{ fontSize: "2rem", fontFamily: "Police" }} key={pokemon.id}>
        {pokemon.name}
      </div>
    </>
  );
}

export default Menu;
