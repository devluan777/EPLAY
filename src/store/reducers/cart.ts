import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/home'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    }
  }
})

cartSlice.actions.add

export const { add } = cartSlice.actions

export default cartSlice.reducer