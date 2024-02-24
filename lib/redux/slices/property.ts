import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '../store';
import { fetchProperties } from '../createAppAsyncThunk';

export const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    data: [],
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Menangani aksi asinkron saat mengambil data properti
    builder
      .addCase(fetchProperties.pending, (state) => {
        // Mengatur status menjadi 'loading' saat permintaan sedang berlangsung
        state.status = 'loading';
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        // Menangani ketika permintaan berhasil
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        // Menangani ketika permintaan ditolak atau terjadi kesalahan
        state.status = 'failed';
        state.error = action.error?.message ?? 'Unknown error';
      });
  },
});

export const selectProperties = (state: ReduxState) => state.filter.value;
