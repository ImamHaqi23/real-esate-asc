/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '../store';

const initialState = {
  value: {
    location: '',
    budget: '',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    // Reducer untuk memperbarui lokasi
    updateLocation: (state, action: PayloadAction<string>) => {
      state.value.location = action.payload;
    },
    // Reducer untuk memperbarui budget
    updateBudged: (state, action: PayloadAction<string>) => {
      state.value.budget = action.payload;
    },
  },
});

export const selectFilter = (state: ReduxState) => state.filter.value;
