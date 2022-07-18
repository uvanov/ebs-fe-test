import React, { useContext, useMemo } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProductContext } from '../../../contexts/ProductContext/ProductContext';

import { ProductCardProps } from './ProductCard.typings';
import { Product } from '../../../contexts/ProductContext/ProductContext.typings';

const ProductCard: React.FC<ProductCardProps> = (props) => {

  const { state, dispatch } = useContext(ProductContext);

  const productQuantity = useMemo(() => {
    // @ts-ignore
    return state.cartProducts.find(product => product.id === props.product.id).quantity;
  }, [state.cartProducts]);

  const removeProduct = (product: Product) => dispatch({ type: 'removeFromCart', payload: product.id });
  const incrementProduct = (product: Product) => dispatch({ type: 'changeQuantity', payload: { id: product.id, quantity: productQuantity + 1 } });
  const decrementProduct = (product: Product) => {
    if(productQuantity === 1){
      removeProduct(product)
    } else {
      dispatch({ type: 'changeQuantity', payload: { id: product.id, quantity: productQuantity - 1 } });
    }
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h5' component='div'>
          { props.product.name }
        </Typography>
        <Typography sx={ { mb: 1.5 } } color='text.secondary'>
          { props.product.category.name }
        </Typography>
        <Typography sx={ { fontSize: 14 } } color='text.secondary' gutterBottom>
          Price: { props.product.price }
        </Typography>
      </CardContent>
      <CardActions>
        <Stack
          sx={ { width: '100%' } }
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <ButtonGroup>
            <Button
              onClick={ () => decrementProduct(props.product) }
              variant='contained'
              size='small'
            >
              -
            </Button>
            <Paper>
              <Typography variant='h5' sx={ { padding: '0 10px' } }>
                { productQuantity }
              </Typography>
            </Paper>
            <Button
              onClick={ () => incrementProduct(props.product) }
              variant='contained'
              size='small'
            >
              +
            </Button>
          </ButtonGroup>
          <Button
            onClick={ () => removeProduct(props.product) }
            color='error'
          >
            <DeleteIcon />
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProductCard;