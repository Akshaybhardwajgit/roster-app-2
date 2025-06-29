import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProviders } from '../api/mockApi';
import type { Provider } from '../types/roster';

interface Filters {
  service: string;
  type: string;
  centre: string;
  search: string;
}

interface ProvidersState {
  list: Provider[];
  loading: boolean;
  filters: Filters;
}

const initialState: ProvidersState = {
  list: [],
  loading: false,
  filters: { service: '', type: '', centre: '', search: '' }
};

export const loadProviders = createAsyncThunk('providers/load', async () => {
  const providers = await fetchProviders();
  return providers;
});

const slice = createSlice({
  name: 'providers',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Partial<Filters>>) {
      state.filters = { ...state.filters, ...action.payload };
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loadProviders.pending, state => {
        state.loading = true;
      })
      .addCase(loadProviders.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  }
});

export const { setFilters } = slice.actions;
export default slice.reducer;
