import React from "react";

function ListaPokemones({ pokemones, onClick }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pokemones.map((pokemon) => (
        <div
          key={pokemon.id}
          onClick={() => onClick && onClick(pokemon)}
          style={{
            cursor: "pointer",
            margin: "10px",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            width: "120px",
            textAlign: "center",
            backgroundColor: "#f8f8f8",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            loading="lazy"
            width={100}
            height={100}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/100?text=No+Image";
            }}
          />
          <p style={{ textTransform: "capitalize", marginTop: "5px" }}>
            {pokemon.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ListaPokemones;
