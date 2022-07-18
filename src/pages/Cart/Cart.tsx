import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import { ProductContext } from '../../contexts/ProductContext/ProductContext';

import ProductCard from '../../components/layout/ProductCard/ProductCard';

const Cart: React.FC = () => {

  const { state } = useContext(ProductContext);

  return (
    <Grid
      container
      spacing={ 2 }
      sx={ { padding: '20px 50px' } }
    >
      {
        state.cartProducts.length >= 1
          ? state.cartProducts.map(product => (
            <Grid item xs={ 3 }>
              <ProductCard product={ product } />
            </Grid>
          ))
          : <Typography>Empty cart</Typography>
      }
    </Grid>
  );
};

export default Cart;