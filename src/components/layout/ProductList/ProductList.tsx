import React from 'react';
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

import ProductListProps from './ProductList.typings';

const ProductList: React.FC<ProductListProps> = (props) => {
  return (
    <TableContainer component={ Paper }>
      <Table sx={ { maxWidth: 650 } }>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell align='right'>Price</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.products.map(product => (
              <TableRow
                key={ product.name }
                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
              >
                <TableCell component='th' scope='row'>
                  { product.category.name }
                </TableCell>
                <TableCell align='right'>
                  { product.name }
                </TableCell>
                <TableCell align='right'>
                  { product.price }
                </TableCell>
                <TableCell align='right'>
                  <Button variant='text'>
                    <ShoppingCart />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;