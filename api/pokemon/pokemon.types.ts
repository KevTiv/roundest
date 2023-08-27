import {NamedAPIResource, PokemonSprites} from "pokenode-ts";

export type GetPokemonByIdResponse = {
    name: string,
    sprites: PokemonSprites,
    species: NamedAPIResource
}