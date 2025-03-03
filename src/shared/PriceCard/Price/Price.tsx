import React from 'react';

interface PriceProps {
  oldPrice: string;
  newPrice: string;
  frequency: string;
}

export const Price = ({ newPrice, oldPrice, frequency }: PriceProps) => {
  return (
    <div className="flex flex-col items-end justify-end gap-[2px] mt-2 pr-4">
      <span className="text-gray-500 line-through decoration-[#FF0000] text-[12px]">
        {oldPrice}
      </span>
      <span className="text-[#3B71F7] text-xl font-semibold">{newPrice}</span>
      <span className="text-[#181B29] text-[12px]">{frequency}</span>
    </div>
  );
};
