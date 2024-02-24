/* Core */
import { createAsyncThunk } from '@reduxjs/toolkit';

/* Instruments */
import type { ReduxState, ReduxDispatch } from './store';

import axios from 'axios';

/**
 * ? A utility function to create a typed Async Thunk Actions.
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: ReduxState;
  dispatch: ReduxDispatch;
  rejectValue: string;
}>();

/**
 * Async Thunk Action untuk mengambil data properti dari API.
 * Fungsi ini menggunakan Axios untuk melakukan HTTP GET request ke URL yang diberikan.
 * Setelah mendapatkan respons, data properti diekstrak dari respons dan dikembalikan.
 */
export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async () => {
    const response = await axios.get('https://kobars.id/api/offices/popular');
    return response.data.data;
  }
);

interface Location {
  street: string;
  city: string;
}

interface Facilities {
  bedroom: number;
  bathroom: number;
  parkingArea: number;
}

export interface Property {
  id: number;
  name: string;
  image: string;
  price: number;
  location: Location;
  facilities: Facilities;
}
