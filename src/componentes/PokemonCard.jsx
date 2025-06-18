function PokemonCard({ pokemon, seleccionar }) {
  return (
    <div className="card" onClick={() => seleccionar(pokemon)}>
      <h3>{pokemon.name.toUpperCase()}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}

export default PokemonCard;
