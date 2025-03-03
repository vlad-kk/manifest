import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="text-[#fff] text-[16px] leading-[26px] font-semibold py-4 px-26 bg-gradient-to-r from-[#00B39B] to-[#3B71F7] rounded-full cursor-pointer"
    >
      {title}
    </div>
  );
};
