import { Currency } from '@/enums/currency';
import { currency } from '@/constants/currency';

export const formatPrice = (priceInCents: number, c: Currency) => {
  const price = (priceInCents / 100).toFixed(2);

  return `${currency[c]}${price}`;
};
