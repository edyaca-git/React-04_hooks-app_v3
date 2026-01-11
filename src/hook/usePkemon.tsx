import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  ImageUrl: string;
}

interface Props {
  id: number;
}

export const usePkemon = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonById = async (id: number) => {
    setIsLoading(true);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
      // <-- AQUÍ MANEJAS EL 404
      setPokemon(null);
      setIsLoading(false);

      return;
    }
    const data = await response.json();

    setPokemon({
      id: id,
      name: data.name,
      ImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  return {
    //properties
    isLoading,
    pokemon,

    formatedId: id.toString().padStart(3, "0"),
    //methods
  };
};
