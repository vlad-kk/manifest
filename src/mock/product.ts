import { Product } from '@/interfaces/product';

export const products: Product[] = [
  {
    id: 'cabbce0d-a5c5-4590-984b-c6995c81744f',
    name: 'Unlimited 1-month Plan',
    regularity: 'month',
    label: 'Most Popular',
    regularityText: 'Per month',
    oldPrice: 6999,
    price: 3999,
    currency: 'USD',
    trial_period: 7,
    trial_amount: 99,
    isBestValue: false
  },
  {
    id: 'cabbce0d-a5c5-4590-984b-c6995c81744a',
    name: '7-day Access',
    regularity: 'month',
    regularityText: 'Then 29.99 per month',
    label: 'Save 90%',
    oldPrice: 1000,
    price: 100,
    currency: 'USD',
    trial_period: 30,
    trial_amount: 99,
    isBestValue: false
  },
  {
    id: 'cabbce0d-a5c5-4590-984b-c6995c81744b',
    name: 'Unlimited Annual Plan',
    regularity: 'month',
    regularityText: 'Per month',
    label: 'Save 50%',
    oldPrice: 4999,
    price: 2499,
    currency: 'USD',
    trial_period: 7,
    trial_amount: 99,
    isBestValue: true
  }
];
