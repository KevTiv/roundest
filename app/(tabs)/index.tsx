import { Text, View } from '../../components/Themed';
import { useGetPokemonById } from '../../api/pokemon/pokemon.queries';
import { PokemonCard } from '../../components/PokemonCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Loader } from '../../components/Loader';

export default function TabOneScreen() {
  const { firstPokemonId, secondPokemonId } = useSelector(
    (state: RootState) => state.pokemonSlice,
  );

  const {
    data: firstPokemon,
    isLoading: isFirstPokemonLoading,
    error: firstPokemonError,
  } = useGetPokemonById(firstPokemonId);
  const {
    data: secondPokemon,
    isLoading: isSecondPokemonLoading,
    error: secondPokemonError,
  } = useGetPokemonById(secondPokemonId);

  if (firstPokemonError || secondPokemonError) {
    throw new Error('Oops, something went wrong!');
  }

  return (
    <View className="w-full flex-1 flex justify-center items-center">
      <Text className="text-xl font-medium capitalize">Which is roundest?</Text>
      {isFirstPokemonLoading || isSecondPokemonLoading ? (
        <Loader />
      ) : (
        <>
          <PokemonCard pokemon={firstPokemon} />
          <PokemonCard pokemon={secondPokemon} />
        </>
      )}
    </View>
  );
}
