const MAX_DEX_ID = 488

export function getNewPokemonId(notThisPokemonId?: number): number {
    const newPokemonIdNumber = Math.floor(Math.random() * MAX_DEX_ID) + 1
    
    return newPokemonIdNumber !== notThisPokemonId ?
        newPokemonIdNumber : getNewPokemonId(notThisPokemonId)
}

// Generate two numbers that will be used to fetch pokemons
// to determine which is the roundest
export function getPokemonsToCompare() {
    const firstId = getNewPokemonId()
    const secondId = getNewPokemonId(firstId)
    
    return [firstId, secondId]
}