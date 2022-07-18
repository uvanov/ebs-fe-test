import React, { useContext } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, Typography,
} from '@mui/material';
import { ProductContext } from '../../../contexts/ProductContext/ProductContext';

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
              <ProductItem
                key={ product.id }
                product={ product }
              />
            ))
          }
        </TableBody>
      </Table>
      {
        props.products.length === 0 && (
          <Typography
            variant='h6'
            component='p'
          >
            I have no goods in this category :(
          </Typography>
        )
      }
    </TableContainer>
  );
};

export default ProductList;