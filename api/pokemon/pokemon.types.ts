import {NamedAPIResource, PokemonSprites} from "pokenode-ts";

export type GetPokemonByIdResponse = {
    id: number,
    pokemonName: string,
    sprites: PokemonSprites,
    species: NamedAPIResource
}
