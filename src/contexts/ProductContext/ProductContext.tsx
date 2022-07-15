import React, { createContext, useReducer } from 'react';

import {
  ProductProviderProps,
  Action,
  State,
} from './ProductContext.typings';
import { initialState } from './ProductContext.constants';

export const ProductContext = createContext({});

export const ProductContextProvider: React.FC<ProductProviderProps> = (props) => {

  const reducer = (state: State, action: Action) => {
    if (action.type === 'changeFilterCategory') return { ...state, filterCategory: action.payload };
    if (action.type === 'changeFilterPrice') return { ...state, filterPrice: action.payload };
    if (action.type === 'addToCard') return { ...state, cartProducts: [...state.cartProducts, action.payload] };
    if (action.type === 'removeFromCard') return {
      ...state,
      cartProducts: state.cartProducts.filter(product => product.name !== action.payload),
    };
    if (action.type === 'changeQuantity') return {
      ...state, cartProducts: state.cartProducts.map(product => {
        if (product.name === action.payload.name) {
          return { ...product, quantity: action.payload.quantity };
        }
        return product;
      }),
    };
    throw new Error();
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      { props.children }
    </ProductContext.Provider>
  );
};
