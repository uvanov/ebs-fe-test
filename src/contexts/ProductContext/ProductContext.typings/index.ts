import { ReactNode } from 'react';

export interface ProductProviderProps {
  children: ReactNode;
}

export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
}

export type CartProduct = Product & { quantity: number }

export interface State {
  filterCategory: '',
  filterPrice: 'asc' | 'desc',
  cartProducts: CartProduct[],
}

export interface Action {
  type: 'changeFilterCategory' | 'changeFilterPrice' | 'addToCart' | 'removeFromCart' | 'changeQuantity',
  payload: any;
}
