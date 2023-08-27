import {Loader} from "./Loader";
import {PokemonCard} from "./PokemonCard";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useGetPokemonById} from "../api/pokemon/pokemon.queries";


export function PokemonChoicesPalette(){
    const { firstPokemonId, secondPokemonId } = useSelector(
        (state: RootState) => state.pokemonSlice,
    );

    const {
        data: firstPokemon,
        error: firstPokemonError,
    } = useGetPokemonById(firstPokemonId);
    const {
        data: secondPokemon,
        error: secondPokemonError,
    } = useGetPokemonById(secondPokemonId);

    if (firstPokemonError || secondPokemonError) {
        throw new Error('Oops, something went wrong!');
    }

    return(
        <>
            <PokemonCard pokemon={firstPokemon} />
            <PokemonCard pokemon={secondPokemon} />
        </>
    )
}
