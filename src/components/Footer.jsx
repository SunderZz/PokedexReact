function WithHeaderStyledExample() {
  //#2a75bb Code red pokemon
  //#fe1b00 Code blue pokémon
  return (
    <footer
      style={{ backgroundColor: "#2a75bb", color: "#fff", padding: "1rem" }}
    >
      <div className="container">
        <p>
          {" "}
          This project uses the PokéApi API for strictly personal and
          non-commercial purposes. I do not claim to own the data provided by
          this API, and I only use it for development and demonstration
          purposes. All information retrieved from this API is used in
          accordance with its terms of use, which can be found on its official
          website.
        </p>{" "}
        <a href="https://pokeapi.co/" style={{ color: "#fe1b00" }}>
          Link to PokéApi
        </a>
      </div>
    </footer>
  );
}

export default WithHeaderStyledExample;
