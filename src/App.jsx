import React, { useState, useEffect } from "react";
import Buscador from "./componentes/Buscador";
import ListaPokemones from "./componentes/ListaPokemones";
import ModalPokemon from "./componentes/ModalPokemon";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pokemonesFiltrados, setPokemonesFiltrados] = useState([]);
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);
  const [error, setError] = useState("");

  // Carga inicial de pokemones
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => res.json())
      .then((data) => {
        const lista = data.results.map((p, i) => ({
          name: p.name,
          id: i + 1,
        }));
        setPokemones(lista);
        setPokemonesFiltrados(lista);
      })
      .catch(() => setError("Error al cargar la lista de pokemones."));
  }, []);

  // Filtrado según búsqueda
  useEffect(() => {
    if (busqueda === "") {
      setPokemonesFiltrados(pokemones);
      setError("");
    } else {
      const filtrados = pokemones.filter((p) =>
        p.name.toLowerCase().includes(busqueda.toLowerCase())
      );
      if (filtrados.length === 0) {
        setError("No se encontró ningún Pokémon");
      } else {
        setError("");
      }
      setPokemonesFiltrados(filtrados);
    }
  }, [busqueda, pokemones]);

  // Abrir modal con datos del pokemon seleccionado
  const abrirModal = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((res) => res.json())
      .then((data) => setPokemonSeleccionado(data))
      .catch(() => setError("Error al cargar detalles del Pokémon."));
  };

  // Cerrar modal
  const cerrarModal = () => setPokemonSeleccionado(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Catálogo de Pokemones</h1>
      <Buscador valor={busqueda} onChange={setBusqueda} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ListaPokemones pokemones={pokemonesFiltrados} onClick={abrirModal} />
      {pokemonSeleccionado && (
        <ModalPokemon pokemon={pokemonSeleccionado} onCerrar={cerrarModal} />
      )}
    </div>
  );
}

export default App;
