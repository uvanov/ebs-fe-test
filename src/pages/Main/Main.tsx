import React from 'react';
import { Grid } from '@mui/material';

import Filter from '../../components/layout/Filter/Filter';
import Products from '../../components/layout/Products/Products';

const Main: React.FC = () => {

  return (
    <Grid
      container
      spacing={ 2 }
      sx={{ padding: '20px' }}
    >
      <Grid item xs={ 2 }>
        <Filter />
      </Grid>
      <Grid item xs={ 10 }>
        <Products />
      </Grid>
    </Grid>
  );
};

export default Main;