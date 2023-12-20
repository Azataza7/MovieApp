import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchSearchShow} from '../Components/Shows/ShowThunks';

const initialState = {
  results: [],
  selectedShow: {}
};

interface showJson {
  results: [],
  selectedShow: {}
}

const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setResult(state, action: PayloadAction) {
      state.results = action.payload;
    },
    setSelectedShow(state, action: PayloadAction) {
      state.selectedShow = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchSearchShow.fulfilled, (state: showJson, action: PayloadAction<showJson>) => {
      state.results = action.payload
    })
  }
});

export const showReducer = showSlice.reducer;
export const { setResult, setSelectedShow} = showSlice.actions
export const selectResult = state => state.shows.results
export const selectSelectedShow = state => state.shows.selectedShow