/* Instruments */
import { filterSlice } from '@/lib/redux/slices/filter';
import { propertiesSlice } from './slices/property';

export const reducer = {
  filter: filterSlice.reducer,
  properties: propertiesSlice.reducer,
};
