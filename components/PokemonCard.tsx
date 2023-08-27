import { Text, TouchableOpacity } from 'react-native';
import { GetPokemonByIdResponse } from '../api/pokemon/pokemon.types';
import { Image } from 'expo-image';
import { useDispatch } from 'react-redux';
import { updatePokemonIds } from '../redux/slices/pokemonSlice';

type PokemonCardProps = {
  pokemon?: GetPokemonByIdResponse;
};

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const dispatch = useDispatch();
  const getNewPokemon = () => dispatch(updatePokemonIds());

  return (
    <TouchableOpacity
      className="bg-blue-300 w-full aspect-square flex flex-1 justify-center items-center m-2 rounded-md"
      onPress={getNewPokemon}
    >
      <Image
        className="w-44 h-44"
        source={{ uri: pokemon?.sprites.front_default ?? '' }}
      />
      <Text className="text-2xl text-bold -translate-y-2 capitalize">
        {pokemon?.name}
      </Text>
    </TouchableOpacity>
  );
}
