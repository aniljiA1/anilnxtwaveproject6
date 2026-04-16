import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPokemonDetails } from "../services/api";
import Loader from "../components/Loader";

export default function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchPokemonDetails(name);
      setPokemon(data);
    };
    getDetails();
  }, [name]);

  if (!pokemon) return <Loader />;

  return (
    <div>
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>

      <h3>Types:</h3>
      {pokemon.types.map((t, i) => (
        <span key={i}>{t.type.name} </span>
      ))}
    </div>
  );
}
