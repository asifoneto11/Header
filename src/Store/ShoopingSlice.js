import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


export const getLorem = createAsyncThunk(
    "lorem/getData",
    async (arg, { rejectWithValue }) => {

        try {
            const { data } = await axios.get("https://fakestoreapi.com/products");
         
           
            return data;
        } catch (error) {
            rejectWithValue(error.response.data)
        }

    }

)



export const ShoopingSlice = createSlice({
    name: 'counter',
    initialState: {
        data: [],
        isSuccessFull: false,
        message: "",
        loading: false

    },
    reducers: {

    },

    extraReducers: {
        [getLorem.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [getLorem.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.isSuccessFull = true
            state.data = payload
        },
        [getLorem.rejected]: (state, { payload }) => {
            state.loading = false
            state.isSuccessFull = false
            state.message = payload
        }
    }
})

// Action creators are generated for each case reducer function


export default ShoopingSlice.reducer