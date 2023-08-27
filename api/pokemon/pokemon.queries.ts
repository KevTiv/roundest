import {QueryOptions, useQuery, useMutation} from "@tanstack/react-query";
import {pokemonApi} from "./pokemon.api";
import {GetPokemonByIdResponse} from "./pokemon.types";

const pokemonInstance = pokemonApi()

export const useGetPokemonById = (id: number, options?: QueryOptions<GetPokemonByIdResponse, Error>) =>
    useQuery(
        [`getPokemonById ${id}`],
        async ()=> pokemonInstance.getPokemonById(id),
        options
    )

export const useUpdateRoundestLeaderboard = (options?: QueryOptions<GetPokemonByIdResponse, Error>) => useMutation({
    mutationKey: ['useMutateRoundestLeaderboard'],
    mutationFn: async (pokemon: GetPokemonByIdResponse)=> pokemonInstance.updateRoundestLeaderBoard(pokemon),
    ...options
})
