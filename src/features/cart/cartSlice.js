import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data/cartItems";
const initialState={
    cartItems:cartItems,
    amount:4,
    total:0,
    isLoading:true
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[];
        }
    }
})

export const cartState=(cartStore)=>cartStore.cart

export default cartSlice.reducer;

export const cartActions=cartSlice.actions;