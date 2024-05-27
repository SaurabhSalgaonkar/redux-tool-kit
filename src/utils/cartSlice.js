import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        data: [],
    },
    reducers: {
       addItem: (state, action) => {
            console.log(current(state), action);
            state.cart.push(action.payload);
       } 
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(fetchData.pending, () => {
                console.log('pending');
            })
    }
});

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async() => {
        const apiData = await fetch('https://run.mocky.io/v3/60503943-2ae1-4b61-8c1a-ff88ec903f56');
        const resp = await apiData.json();
        console.log(resp);
        return resp;
    }
);

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;