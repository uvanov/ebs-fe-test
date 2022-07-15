import { State } from '../ProductContext.typings';

export const initialState = {
  filterCategory: '',
  filterPrice: 'asc' ,
  cartProducts: [],
} as State;