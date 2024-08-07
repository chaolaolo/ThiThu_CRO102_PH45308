// src/redux/actions/xeMayActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_URL = 'https://66b32cb57fba54a5b7ebc352.mockapi.io/XeMay';

export const fetchXeMay = createAsyncThunk('xeMay/fetchXeMay', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addXeMay = createAsyncThunk('xeMay/addXeMay', async (newXeMay) => {
    console.log(newXeMay);

    const response = await axios.post(API_URL, newXeMay);
    return response.data;
});

export const updateXeMay = createAsyncThunk('xeMay/updateXeMay', async (updatedXeMay) => {
    const response = await axios.put(`${API_URL}/${updatedXeMay.id}`, updatedXeMay);
    return response.data;
});

export const deleteXeMay = createAsyncThunk('xeMay/deleteXeMay', async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});
