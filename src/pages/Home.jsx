import { useEffect, useState } from "react";
import { fetchPokemonList } from "../services/api";
import PokemonCard from "../components/PokemonCard";
import Loader from "../components/Loader";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadPokemon = async () => {
    setLoading(true);
    const data = await fetchPokemonList(offset, 20);
    setPokemon((prev) => [...prev, ...data.results]);
    setOffset((prev) => prev + 20);
    setLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {pokemon.map((p, index) => (
          <PokemonCard key={index} pokemon={p} />
        ))}
      </div>

      {loading && <Loader />}

      <button onClick={loadPokemon}>Load More</button>
    </div>
  );
}
