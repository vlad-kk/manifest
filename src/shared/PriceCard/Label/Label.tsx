import React from 'react';

interface LabelProps {
  title: string;
}

export const Label = ({ title }: LabelProps) => {
  return (
    <div className="absolute z-100 -top-3 left-11 bg-[#00B39B] text-[#fff] text-[12px] leading-[20px] font-semibold py-1 pr-[9px] pl-[10px] rounded-full">
      {title}
    </div>
  );
};
