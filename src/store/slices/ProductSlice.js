import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
 reducers:{
  setData:  (state, action)=>{
state.data.push(action.payload)
  },
  addToCart: (state, action) => {
   const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)

   if(itemIndex >= 0){
    state.cartItems[itemIndex].cartQuantity += 1;
   } else{
    const product = {...action.payload, cartQuantity: 1}
    state.cartItems.push(product)
   }
   
    
  
  },
  removeFromCart: (state, action)=>{
 const nextItems = state.cartItems.filter((item)=> item.id !== action.payload.id)
 state.cartItems = nextItems
  },
  decrease: (state, action)=>{
    const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id);
    if(state.cartItems[itemIndex].cartQuantity > 1){
      state.cartItems[itemIndex].cartQuantity -= 1;
    }  if(state.cartItems[itemIndex].cartQuantity === 1){
      const nextItems = state.cartItems.filter((item)=> item.id !== action.payload.id)
 state.cartItems = nextItems
    }

  },
  getTotal: (state, action)=>{
  let {total, quantity} = state.cartItems.reduce((cartTotal, item)=>{
      const {priceNum, cartQuantity} = item;
      const itemTotal = priceNum * cartQuantity
cartTotal.total += itemTotal;
cartTotal.quantity += cartQuantity;
return cartTotal
    }, {
      total: 0,
      quantity: 0
    })
    state.cartTotalQuantity = quantity;
    state.cartTotalAmount = total
  }
  
 }
})

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, decrease, getTotal, setData } = ProductSlice.actions

export default ProductSlice.reducer