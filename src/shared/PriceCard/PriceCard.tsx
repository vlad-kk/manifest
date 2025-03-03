'use client';

import React from 'react';
import { Label } from '@/shared/PriceCard/Label/Label';
import { Price } from '@/shared/PriceCard/Price/Price';
import { CheckButton } from '@/shared/PriceCard/CheckButton/CheckButton';
import { Product } from '@/interfaces/product';
import { formatPrice } from '@/utils/formatPrice';
import { Currency } from '@/enums/currency';
import { BestValue } from '@/shared/PriceCard/Label/BestValue/BestValue';
import { Timer } from '@/shared/PriceCard/CardTimer/Timer';

interface PriceCardProps {
  plan: Product;
  isSelected?: boolean;
  onClick: (id: string) => void;
  timeLeft: number;
  isExpiredTimer: boolean;
}

export const PriceCard = ({
  plan,
  onClick,
  isSelected,
  timeLeft,
  isExpiredTimer
}: PriceCardProps) => {
  return (
    <div
      onClick={() => onClick(plan.id)}
      className={`relative w-full max-w-sm rounded-2xl bg-white shadow-lg cursor-pointer ${!isExpiredTimer ? 'md:pt-13' : 'md:pt-0'}`}
    >
      {plan.label && <Label title={plan.label} />}
      {plan.isBestValue && <BestValue title="Best value" />}

      {!isExpiredTimer && <Timer timeLeft={timeLeft} isSelected={isSelected} />}

      <div
        className={`flex justify-between gap-3 border-4 border-t-4 ${!isExpiredTimer ? 'md:border-t-0 md:rounded-t-[0px]' : 'md:border-t-4 md:rounded-t-[16px]'} ${isSelected ? 'border-[#00B39B]' : 'border-[#fff]'} rounded-b-[16px] rounded-t-[16px] border pt-4 md:pt-1 pb-2 transition-colors duration-300`}
      >
        <CheckButton title={plan.name} isSelected={isSelected} />
        <Price
          oldPrice={formatPrice(plan.oldPrice, plan.currency as Currency)}
          newPrice={formatPrice(plan.price, plan.currency as Currency)}
          frequency={plan.regularityText}
        />
      </div>
    </div>
  );
};
