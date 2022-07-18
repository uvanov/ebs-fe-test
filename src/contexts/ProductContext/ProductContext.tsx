import React, { createContext, useReducer } from 'react';

import {
  ProductProviderProps,
  Action,
  State,
} from './ProductContext.typings';
import { initialState } from './ProductContext.constants';

export const ProductContext = createContext<{ state: State, dispatch: React.Dispatch<any> }>({
  state: initialState,
  dispatch: () => {}
});

export const ProductContextProvider: React.FC<ProductProviderProps> = (props) => {

  const reducer = (state: State, action: Action) => {
    console.log('Reducer', action);
    if (action.type === 'changeFilterCategory') return { ...state, filterCategory: action.payload };
    if (action.type === 'changeFilterPrice') return { ...state, filterPrice: action.payload };
    if (action.type === 'addToCart') return { ...state, cartProducts: [...state.cartProducts, action.payload] };
    if (action.type === 'removeFromCart') return {
      ...state,
      cartProducts: state.cartProducts.filter(product => product.id !== action.payload)
    };
    if (action.type === 'changeQuantity') return {
      ...state, cartProducts: state.cartProducts.map(product => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: action.payload.quantity };
        }
        return product;
      }),
    };
    throw new Error();
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={ { state, dispatch } }>
      { props.children }
    </ProductContext.Provider>
  );
};
