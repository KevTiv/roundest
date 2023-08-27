import {QueryOptions, useQuery} from "@tanstack/react-query";
import {pokemonApi} from "./pokemon.api";
import {GetPokemonByIdResponse} from "./pokemon.types";

const pokemonInstance = pokemonApi()

export const useGetPokemonById = (id: number, options?: QueryOptions<GetPokemonByIdResponse, Error>) =>
    useQuery(
        [`getPokemonById ${id}`],
        async ()=> pokemonInstance.getPokemonById(id),
        options
    )