import { formatLabel, formatPokemonId } from "./App";

export function PokemonDetail({ pokemon }) {
  const STAT_LABELS = {
    hp: "HP",
    attack: "Attack",
    defense: "Defense",
    "special-attack": "Sp. Atk",
    "special-defense": "Sp. Def",
    speed: "Speed",
  };

  function getArtworkUrl(pokemon) {
    return (
      pokemon.sprites?.other?.home?.front_default ||
      pokemon.sprites?.front_default ||
      ""
    );
  }

  const artworkUrl = getArtworkUrl(pokemon);
  const primaryType = pokemon.types[0]?.type.name ?? "normal";

  return (
    <article className="pokemon-detail">
      <div className="detail-hero">
        <div className="detail-artwork" data-type={primaryType}>
          {artworkUrl ? (
            <img src={artworkUrl} alt={formatLabel(pokemon.name)} />
          ) : (
            <p className="artwork-fallback">No artwork available</p>
          )}
        </div>

        <header className="detail-header">
          <p className="detail-id">{formatPokemonId(pokemon.id)}</p>
          <h2>{formatLabel(pokemon.name)}</h2>
          <ul className="type-list">
            {pokemon.types.map((entry) => (
              <li
                key={entry.type.name}
                className="type-badge"
                data-type={entry.type.name}
              >
                {formatLabel(entry.type.name)}
              </li>
            ))}
          </ul>
        </header>
      </div>

      <section className="detail-section">
        <h3>Profile</h3>
        <dl className="profile-grid">
          <div>
            <dt>Height</dt>
            <dd>{pokemon.height / 10} m</dd>
          </div>
          <div>
            <dt>Weight</dt>
            <dd>{pokemon.weight / 10} kg</dd>
          </div>
          <div>
            <dt>Base XP</dt>
            <dd>{pokemon.base_experience ?? "—"}</dd>
          </div>
          <div>
            <dt>Abilities</dt>
            <dd>
              {pokemon.abilities.map((entry, index) => (
                <span key={entry.ability.name}>
                  {index > 0 ? ", " : ""}
                  {formatLabel(entry.ability.name)}
                  {entry.is_hidden ? " (hidden)" : ""}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </section>

      <section className="detail-section">
        <h3>Stats</h3>
        <dl className="stats-list">
          {pokemon.stats.map((entry) => (
            <div key={entry.stat.name} className="stat-row">
              <dt>
                {STAT_LABELS[entry.stat.name] ?? formatLabel(entry.stat.name)}
              </dt>
              <dd>{entry.base_stat}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}
