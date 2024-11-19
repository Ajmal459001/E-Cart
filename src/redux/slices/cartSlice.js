import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        // action-name : reducer function
        addToCart:(state,actionByComponent)=>{
            const existingProduct = state.find(item=>item.id==actionByComponent.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]
            }else{
                state.push({...actionByComponent.payload,quantity:1,totalPrice:actionByComponent.payload.price})
            }
        },
        incrementingQuantity : (state,actionByCart)=>{
            const existingProduct = state.find(item=>item.id==actionByCart.payload)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]
            }
        }
    }
})

export const {addToCart,incrementingQuantity} = cartSlice.actions
export default cartSlice.reducer