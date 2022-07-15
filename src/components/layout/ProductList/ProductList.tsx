import React, { useContext } from 'react';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { ProductContext } from '../../../contexts/ProductContext/ProductContext';
import { Product } from '../../../contexts/ProductContext/ProductContext.typings';

import ProductListProps from './ProductList.typings';
import ProductItem from '../ProductItem/ProductItem';

const ProductList: React.FC<ProductListProps> = (props) => {

  const { state, dispatch } = useContext(ProductContext);

  const switchSortingType = () => {
    const payload = state.filterPrice === 'asc' ? 'desc' : 'asc';
    dispatch({ type: 'changeFilterPrice', payload });
  };

  return (
    <TableContainer component={ Paper }>
      <Table sx={ { maxWidth: 650 } }>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell
              align='right'
              onClick={ switchSortingType }
              sx={ { cursor: 'pointer' } }
            >
              Price
              { state.filterPrice === 'asc' ? '▲' : '▼' }
            </TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.products.map(product => (
              <ProductItem product={ product } />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;