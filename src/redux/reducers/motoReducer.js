// src/redux/slices/xeMaySlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchXeMay, addXeMay, updateXeMay, deleteXeMay } from '../actions/motoActions';

const xeMaySlice = createSlice({
    name: 'xeMay',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchXeMay.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchXeMay.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchXeMay.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addXeMay.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addXeMay.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addXeMay.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateXeMay.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateXeMay.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.items.findIndex((item) => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateXeMay.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteXeMay.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteXeMay.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter((item) => item.id !== action.payload);
            })
            .addCase(deleteXeMay.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const motoReducer = xeMaySlice.reducer;
export default motoReducer;
