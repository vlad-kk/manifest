import React from 'react';
import { Clock } from '../../../../public/icons/Clock';
import { formatTime } from '@/utils/formatTime';

interface TimerProps {
  isSelected?: boolean;
  className?: string;
  timeLeft: number | null;
}

export const Timer = ({ isSelected, className, timeLeft }: TimerProps) => {
  return (
    <div
      className={
        className
          ? className
          : `absolute w-full hidden md:flex md:top-0 md:left-0 bg-[#252525] border-4 border-b-0 ${isSelected ? 'border-[#00B39B]' : 'border-[#252525]'} text-[#FFCC8F] text-[16px] font-semibold flex justify-center items-center px-2 pt-5 pb-3 rounded-t-[12px] transition-colors duration-300`
      }
    >
      <div className="flex items-center gap-1">
        <Clock />
        <span>SALE ENDS IN {formatTime(timeLeft ?? 0)}</span>
      </div>
    </div>
  );
};
