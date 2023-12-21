import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import axios from 'axios';

const URL = 'http://api.tvmaze.com/shows/';

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

export const fetchShowInfo = createAsyncThunk(
  'show/showName', async (id: number) => {
    try {
      const response = await axios.get(URL + id)
      return response.data
    } catch (e) {
      console.log('Error: ', e)
    }
  }
)