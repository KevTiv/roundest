import {PokemonClient} from "pokenode-ts";
import {GetPokemonByIdResponse} from "./pokemon.types";

export function pokemonApi(){
    const pokemonApi = new PokemonClient()
    
    const getPokemonById = async (id: number):Promise<GetPokemonByIdResponse> => {
        return pokemonApi.getPokemonById(id)
        .then(({name, sprites, species})=>({
            name, sprites, species
        }))
    }
    
    return {
        getPokemonById
    }
}

