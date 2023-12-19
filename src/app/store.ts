import {configureStore} from '@reduxjs/toolkit';
import {showReducer} from '../store/ShowSlice';

export const store = configureStore({
  reducer: {
    shows: showReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;