export interface Product {
  id: string;
  name: string;
  label?: string;
  regularity: 'month' | 'year';
  regularityText: string;
  oldPrice: number;
  price: number;
  currency: 'USD';
  trial_period: number;
  trial_amount: number;
  isBestValue: boolean;
}
