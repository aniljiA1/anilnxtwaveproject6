import { useNavigate } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/pokemon/${pokemon.name}`)}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <h3>{pokemon.name.toUpperCase()}</h3>
    </div>
  );
}
