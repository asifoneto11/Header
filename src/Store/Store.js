import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './ShoopingSlice'
export const store = configureStore({
    reducer: {
        lorem: CounterReducer,
    }
})