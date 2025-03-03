'use server';

import { products } from '@/mock/product';
import { Product } from '@/interfaces/product';

export const getPlans = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
