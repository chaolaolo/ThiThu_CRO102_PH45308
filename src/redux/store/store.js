// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import motoReducer from '../reducers/motoReducer';

const store = configureStore({
    reducer: {
        xeMay: motoReducer,
    },
});

export default store;
