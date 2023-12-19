import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {}
});

export const showReducer = showSlice.reducer;
