import { TouchableWithoutFeedback} from 'react-native';
import { Text } from './Themed';
import { GetPokemonByIdResponse } from '../api/pokemon/pokemon.types';
import { Image } from 'expo-image';
import { useDispatch } from 'react-redux';
import { updatePokemonIds } from '../redux/slices/pokemonSlice';
import Animated, { useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import { useEffect, useState} from "react";
import {useUpdateRoundestLeaderboard} from "../api/pokemon/pokemon.queries";

export type PokemonCardProps = {
  pokemon?: GetPokemonByIdResponse;
};

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const isCardSelected = useSharedValue(true);
  const [isPokemonSelected, setIsPokemonSelected] = useState(false);
  const {mutate: updateLeaderboard} = useUpdateRoundestLeaderboard()
  const dispatch = useDispatch();

  const getNewPokemon = async () => {
    setIsPokemonSelected(true)
    if(pokemon) {
      updateLeaderboard(pokemon)
    }
    setTimeout(()=>dispatch(updatePokemonIds()), 400)
  }

  const animatedContainerStyle = useAnimatedStyle(() => ({
    borderRadius: withTiming(isCardSelected.value? 180 : 6),
  }))

  useEffect(() => {
    isCardSelected.value = isPokemonSelected;
    if(isPokemonSelected){
      setTimeout(()=>setIsPokemonSelected(false), 400)
    }
  },[isCardSelected.value, isPokemonSelected])

  return (
    <TouchableWithoutFeedback
      onPress={getNewPokemon}
    >

      <Animated.View style={animatedContainerStyle} className={"dark:bg-green-800/70 w-full aspect-square flex flex-1 justify-center items-center m-2"}>
        <Image
          className="w-44 h-44"
          source={{ uri: pokemon?.sprites.front_shiny ?? '' }}
        />
        <Text className="text-2xl text-bold -translate-y-2 capitalize">
          {pokemon?.pokemonName}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
