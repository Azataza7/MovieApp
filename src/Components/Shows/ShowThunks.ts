import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

export const fetchSearchShow = createAsyncThunk(
  'searchShow', async (title: string) => {
    try {
      const response = await axiosApi.get(title)
      return response.data
    } catch (e) {
      console.log('Error' + e)
    }
  }
)