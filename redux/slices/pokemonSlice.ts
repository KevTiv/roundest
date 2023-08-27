import { createSlice } from '@reduxjs/toolkit';
import { getPokemonsToCompare } from '../../utils/randomPokemonIdGenerator';

export interface PokemonSliceState {
  firstPokemonId: number;
  secondPokemonId: number;
}

const initialState: PokemonSliceState = {
  firstPokemonId: 111,
  secondPokemonId: 222,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    updatePokemonIds: (state) => {
      const [firstId, secondId] = getPokemonsToCompare();
      state.firstPokemonId = firstId;
      state.secondPokemonId = secondId;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePokemonIds } = pokemonSlice.actions;

export default pokemonSlice.reducer;
