import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import HeaderProps from './Header.typings';

import {
  StyledHeader,
  HeaderNavigation,
} from './Header.styles';

const Header: React.FC<HeaderProps> = (props) => (
  <StyledHeader { ...props }>
    <HeaderNavigation>
      <Link to='/'>
        <Button variant='text'>
          Main
        </Button>
      </Link>
      <Link to='/cart'>
        <Button variant='text'>
          <ShoppingCartIcon />
        </Button>
      </Link>
    </HeaderNavigation>
  </StyledHeader>
);

export default Header;