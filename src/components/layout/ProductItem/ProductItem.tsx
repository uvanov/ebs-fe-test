import React, { useContext } from 'react';

import {
  Button,
  TableCell,
  TableRow,
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { ProductContext } from '../../../contexts/ProductContext/ProductContext';

import { Product } from '../../../contexts/ProductContext/ProductContext.typings';
import { ProductItemProps } from './ProductItem.typings';

const ProductItem: React.FC<ProductItemProps> = (props) => {

  const { state, dispatch } = useContext(ProductContext);

  const doesCartIncludes = (productToFind: Product) => {
    return state.cartProducts.some(product => product.name === productToFind.name);
  };

  const onProductClick = (product: Product) => {
    if (!doesCartIncludes(product)) {
      dispatch({ type: 'addToCart', payload: product });
    } else {
      dispatch({ type: 'removeFromCart', payload: product.id });
    }
  };

  return (
    <TableRow
      key={ props.product.name }
      sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
    >
      <TableCell component='th' scope='row'>
        { props.product.category.name }
      </TableCell>
      <TableCell align='right'>
        { props.product.name }
      </TableCell>
      <TableCell align='right'>
        { props.product.price }
      </TableCell>
      <TableCell align='right'>
        <Button
          variant='text'
          onClick={ () => onProductClick(props.product) }
        >
          <ShoppingCart
            color={ doesCartIncludes(props.product) ? 'warning' : 'primary' }
          />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ProductItem;