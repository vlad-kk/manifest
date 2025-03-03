import React from 'react';

interface ProductItemProps {
  icon: React.ReactNode;
  name: string;
}

export const ProductItem = ({ icon, name }: ProductItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-4 mb-4">
      {icon}
      <div className="font-['Inter'] font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-center text-[#22293B]">
        {name}
      </div>
    </div>
  );
};
