import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import axios from 'axios';
import { showResponse } from '../../types';

const URL = 'http://api.tvmaze.com/shows/';

export const fetchSearchShow = createAsyncThunk(
  'searchShow', async (title: string) => {
    try {
      const response: showResponse = await axiosApi.get(title)
      return response.data
    } catch (e) {
      console.log('Error' + e)
    }
  }
)

export const fetchShowInfo = createAsyncThunk(
  'show/showName', async (id: number) => {
    try {
      const response: showResponse = await axios.get(URL + id)
      return response.data
    } catch (e) {
      console.log('Error: ', e)
    }
  }
)