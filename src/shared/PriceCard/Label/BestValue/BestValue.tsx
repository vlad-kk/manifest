import React from 'react';

interface BestValueProps {
  title: string;
}

export const BestValue = ({ title }: BestValueProps) => {
  return (
    <div className="absolute z-100 rotate-4 -top-8 left-48 bg-[#FECE1F] text-[#181B29] text-[16px] leading-[30px] font-semibold py-2 px-6 rounded-full items-center">
      <span className="inline-block text-[24px]">🚀</span> {title}
    </div>
  );
};
