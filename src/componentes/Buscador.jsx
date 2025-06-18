import React from "react";

function Buscador({ valor, onChange }) {
  const manejarCambio = (evento) => {
    onChange(evento.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar Pokémon..."
      value={valor}
      onChange={manejarCambio}
      style={{
        padding: "10px",
        width: "100%",
        maxWidth: "400px",
        marginBottom: "20px",
        fontSize: "16px",
      }}
    />
  );
}

export default Buscador;
