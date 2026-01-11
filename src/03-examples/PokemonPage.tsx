import { useCounter } from "../hook/useCounter";
import { usePkemon } from "../hook/usePkemon";

export const PokemonPage = () => {
  const { counter, increment, decrement } = useCounter();
  const { pokemon, isLoading, formatedId } = usePkemon({ id: counter });

  if (isLoading) {
    return (
      <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokémon</h1>
        <h3 className="text-xl font-bold text-white">Cargando...</h3>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokémon</h1>
        <h3 className="text-xl font-bold text-white">Pokemon no encontrado</h3>
      </div>
    );
  }

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">
        #{formatedId} {pokemon?.name}
      </h3>
      <img src={pokemon?.ImageUrl} alt={pokemon?.name} />

      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => decrement()}
        >
          Anterior
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => increment()}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
