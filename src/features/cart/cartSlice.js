import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
 
import axios from 'axios';

const initialState={
    cartItems:[],
    amount:4,
    total:0,
    isLoading:true,
    error:undefined
}

const url = 'https://course-api.com/react-useReducer-cart-project1';

export const getCartItems=createAsyncThunk('cart/getCartItems',async (name,thunkAPI)=>{
    try {
        console.log('fullstate',thunkAPI.getState());
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[];
        }
    },
    extraReducers:{
       [getCartItems.pending]:(state)=>{
           state.isLoading=true
       },
       [getCartItems.fulfilled]:(state,action)=>{
           console.log(action);
           state.isLoading=false
           state.cartItems=action.payload;
       },
       [getCartItems.rejected]:(state,action)=>{
        console.log('rejected action',action);
        console.log('state at rejection',state);
           state.isLoading=false
           state.cartItems=[];
           state.error=action.payload
       },
    }
})

export const cartState=(cartStore)=>cartStore.cart

export default cartSlice.reducer;

export const cartActions=cartSlice.actions;