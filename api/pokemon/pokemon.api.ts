import {PokemonClient} from "pokenode-ts";
import {GetPokemonByIdResponse} from "./pokemon.types";
import {supabase} from "../../supabase/supabase";

export function pokemonApi(){
    // const prisma = new PrismaClient()
    const pokemonApi = new PokemonClient()

    const getPokemonById = async (id: number):Promise<GetPokemonByIdResponse> => {
        return pokemonApi.getPokemonById(id)
        .then(({id, name, sprites, species})=>({
            id, pokemonName: name, sprites, species
        }))
    }
    const updateRoundestLeaderBoard = async (pokemon: GetPokemonByIdResponse) => {
        console.log(pokemon)
        const {data: selectedPokemon, error: selectedPokemonError} = await supabase.from("RoundestLeaderBoard").select("*").eq("pokemonId", pokemon.id)

        if(selectedPokemonError){
            console.error(selectedPokemonError)
            throw new Error("Oops, something went wrong!")
        }

        if(selectedPokemon === undefined){
           return supabase
               .from('RoundestLeaderBoard').insert({
                   id: pokemon.id,
                   pokemonName: pokemon.pokemonName,
                   score: 1
               })
        }else{
          return supabase.from("RoundestLeaderBoard").update({
             ...pokemon,
              score: selectedPokemon?.[0]?.score ?? 1 + 1
        })
    }}

    return {
        getPokemonById,
        updateRoundestLeaderBoard
    }
}

