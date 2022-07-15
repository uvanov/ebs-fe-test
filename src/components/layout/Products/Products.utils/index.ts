import { Product } from '../../../../contexts/ProductContext/ProductContext.typings';

export const ascSort = (array: Product[]): Product[] => {
  return array.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    }

    if (a.price > b.price) {
      return 1;
    }

    return 0;
  });
};

export const descSort = (array: Product[]): Product[] => {
  return array.sort((a, b) => {
    if (a.price < b.price) {
      return 1;
    }

    if (a.price > b.price) {
      return -1;
    }

    return 0;
  });
};