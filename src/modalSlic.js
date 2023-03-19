import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isOpen:false
}

export const  modalSlic = createSlice({
    name:"modal",
    initialState,
    reducers:{
        handleModal:(state)=>{
            state.isOpen = !state.isOpen
        }
        
    }
})
export default modalSlic.reducer
export const {handleModal} = modalSlic.actions





















// import {createSlice} from '@reduxjs/toolkit'

// const initialState ={
//     isOpen:false,
// }
// export const  modalSlice = createSlice({
//     name:"modal",
//     initialState,
//     reducers:{
//         handleModal: (state)=>{
//             state.isOpen=!state.isOpen
//         }

//     }
// })
// export default modalSlice.reducer
// export const {handleModal} =modalSlice.actions