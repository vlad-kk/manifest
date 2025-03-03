import React from 'react';
import { config } from '@/shared/Products/config';
import { ProductItem } from '@/shared/Products/ProductItem/ProductItem';

export const Products = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="hidden md:flex w-full justify-start md:justify-center gap-6 flex-wrap md:overflow-visible">
        {config.map(({ name, icon }, i) => (
          <ProductItem key={`${i}-${name}`} name={name} icon={icon} />
        ))}
      </div>

      <div className="md:hidden overflow-hidden relative">
        <div className="flex marquee">
          <div className="flex gap-4 whitespace-nowrap">
            {config.map(({ name, icon }, i) => (
              <ProductItem key={`${i}-${name}`} name={name} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
