import React from 'react';
import { Check } from '../../../../public/icons/Check';

interface CheckButtonProps {
  title: string;
  isSelected?: boolean;
}

export const CheckButton = ({ title, isSelected }: CheckButtonProps) => {
  return (
    <div className="flex items-center gap-2 pl-4">
      <div
        className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${isSelected ? 'border-[#00B39B]' : 'border-[#22293B]'} ${isSelected ? 'bg-[#00B39B]' : 'bg-transparent'}`}
      >
        {isSelected ? <Check /> : <div className="w-3 h-3 rounded-full" />}
      </div>
      <h2 className="text-[17px] font-semibold">{title}</h2>
    </div>
  );
};
