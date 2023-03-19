import{ configureStore } from '@reduxjs/toolkit'
import modalSlic from './modalSlic'
import competitorSlice from './competitorSlice'
export const Store =configureStore({
    reducer:{
        modal:modalSlic,
        competitor:competitorSlice,
    }
})





























// import {configureStore} from '@reduxjs/toolkit'
// import modalSlic from './modalSlic'

// export const Store = configureStore({
//     reducer:{
//         modal:modalSlic
//     }
// })