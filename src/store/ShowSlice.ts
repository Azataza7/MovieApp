import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchSearchShow, fetchShowInfo} from '../Components/Shows/ShowThunks';
import {showResponse, showTemplate} from '../types';

interface showJson extends showTemplate {
  results: [],
  selectedShow: {},
  image: { medium: string };
  rating: { average: number };
  isLoading: boolean;
}

interface initialStateType {
  results: showTemplate[];
  selectedShow: showJson;
}

const initialState: initialStateType = {
  results: [],
  selectedShow: {} as showJson,
};

const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setResult(state, action: PayloadAction<showTemplate[]>) {
      state.results = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchShow.fulfilled, (state: showJson, action) => {
      state.results = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchShowInfo.fulfilled, (state: showJson, action) => {
      state.selectedShow = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchShowInfo.pending, (state: showJson) => {
      state.isLoading = true;
    });
  },
});

export const showReducer = showSlice.reducer;
export const {setResult} = showSlice.actions;
export const selectResult = (state: { shows: initialStateType }) => state.shows.results;
export const selectSelectedShow = (state: { shows: initialStateType }) => state.shows.selectedShow;