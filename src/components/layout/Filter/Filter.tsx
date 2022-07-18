import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { ProductContext } from '../../../contexts/ProductContext/ProductContext';
import { Category } from '../../../contexts/ProductContext/ProductContext.typings';

const Filter: React.FC = () => {

  const [categories, setCategories] = useState<Category[]>([]);
  const {
    state,
    dispatch,
  } = useContext(ProductContext);

  const selectedCategory = state.filterCategory;

  const onSelectChange = (event: SelectChangeEvent) => {
    dispatch({ type: 'changeFilterCategory', payload: event.target.value });
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get<Category[]>('http://localhost:3001/api/product/categories/');
      setCategories(response.data);
    };
    fetch();
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel
        shrink={ true }
        id='demo-simple-select-label'
      >
        Filter by category
      </InputLabel>
      <Select
        displayEmpty
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={ selectedCategory }
        label='Age'
        onChange={ onSelectChange }
      >
        <MenuItem
          value={ '' }
        >
          All
        </MenuItem>
        {
          categories?.map(category => (
            <MenuItem
              key={ category.id }
              value={ category.id }
            >
              { category.name }
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

export default Filter;