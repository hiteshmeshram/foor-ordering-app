import {createSlice} from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearItem:(state)=>{
            return {items:[]}
        },
        removeItem:(state)=>{
            state.items.pop()
        }
    }
})

export const {addItem,clearItem,removeItem}=cartSlice.actions;
export default cartSlice.reducer;