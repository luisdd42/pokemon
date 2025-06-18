import React from "react";

function ModalPokemon({ pokemon, onCerrar }) {
  if (!pokemon) return null;

  return (
    <div
      onClick={onCerrar}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "400px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={150}
          height={150}
        />
        <p>
          <strong>Altura:</strong> {pokemon.height}
        </p>
        <p>
          <strong>Peso:</strong> {pokemon.weight}
        </p>
        <p>
          <strong>Tipos:</strong>{" "}
          {pokemon.types.map((tipo) => tipo.type.name).join(", ")}
        </p>
        <button
          onClick={onCerrar}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ModalPokemon;
