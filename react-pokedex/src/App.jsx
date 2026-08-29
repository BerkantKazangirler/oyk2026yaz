import { useState, useEffect } from "react";
import "./App.css";
import { PokemonDetail } from "./PokemonDetail";

export function formatLabel(value) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function formatPokemonId(id) {
  return `#${String(id).padStart(3, "0")}`;
}

export function getIdFromUrl(url) {
  const parts = url.replace(/\/$/, "").split("/");
  return parts[parts.length - 1];
}

function App() {
  const [pokemonsList, setPokemonsList] = useState(null);
  const [currentPageApiUrl, setCurrentPageApiUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/",
  );
  const [selectedPokemonApiUrl, setSelectedPokemonApiUrl] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [themeTypes, setThemeTypes] = useState(null);

  useEffect(() => {
    fetch(currentPageApiUrl)
      .then((response) => response.json())
      .then((data) => setPokemonsList(data));
  }, [currentPageApiUrl]);

  useEffect(() => {
    if (selectedPokemonApiUrl === null) return;

    fetch(selectedPokemonApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSelectedPokemon(data);
        const types = data.types.map((entry) => entry.type.name);
        setThemeTypes({
          primary: types[0] ?? "normal",
          secondary: types[1] ?? types[0] ?? "normal",
        });
      });
  }, [selectedPokemonApiUrl]);

  return (
    <div
      className="pokedex"
      data-theme={themeTypes?.primary}
      data-theme-secondary={
        themeTypes && themeTypes.secondary !== themeTypes.primary
          ? themeTypes.secondary
          : undefined
      }
    >
      <header className="pokedex-header">
        <h1>Pokédex</h1>
      </header>

      <div className="pokedex-body">
        <aside className="list-panel">
          {pokemonsList === null ? (
            <p className="panel-status">Loading...</p>
          ) : (
            <>
              <div className="list-toolbar">
                <button
                  type="button"
                  onClick={() => setCurrentPageApiUrl(pokemonsList.previous)}
                  disabled={pokemonsList.previous === null}
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPageApiUrl(pokemonsList.next)}
                  disabled={pokemonsList.next === null}
                >
                  Next
                </button>
              </div>

              <ul className="pokemon-list">
                {pokemonsList.results.map((pokemon) => (
                  <li key={pokemon.name}>
                    <button
                      type="button"
                      className={
                        selectedPokemonApiUrl === pokemon.url
                          ? "is-selected"
                          : ""
                      }
                      onClick={() => {
                        setSelectedPokemonApiUrl(pokemon.url);
                        setSelectedPokemon(null);
                      }}
                    >
                      <span className="list-id">
                        {formatPokemonId(getIdFromUrl(pokemon.url))}
                      </span>
                      <span className="list-name">
                        {formatLabel(pokemon.name)}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>

        <main className="detail-panel">
          {selectedPokemonApiUrl === null ? (
            <p className="panel-status">Select a Pokémon to see its details.</p>
          ) : selectedPokemon === null ? (
            <p className="panel-status">Loading details...</p>
          ) : (
            <PokemonDetail pokemon={selectedPokemon} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
