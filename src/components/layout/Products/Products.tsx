import React, { useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { ProductContext } from '../../../contexts/ProductContext/ProductContext';

import { Product } from '../../../contexts/ProductContext/ProductContext.typings';
import ProductList from '../ProductList/ProductList';
import { ascSort, descSort } from './Products.utils';

const Products: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const { state } = useContext(ProductContext);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get<Product[]>('http://localhost:3001/api/products/');
      setProducts(response.data);
    };
    fetch();
  }, []);

  const sortedProducts = useMemo(() => {
    if (state.filterPrice === 'asc') {
      return ascSort(products);
    } else {
      return descSort(products);
    }
  }, [products, state]);

  return (
    <ProductList products={ sortedProducts } />
  );
};

export default Products;