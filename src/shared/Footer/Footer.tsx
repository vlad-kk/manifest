import React from 'react';

export const Footer = () => {
  return (
    <footer className="font-['Inter'] font-normal text-[12px] leading-[20px] tracking-[0.1px] text-center text-[#747E97]">
      <span>
        Automatic renewal of $29.99 per month.
        <br />
        You may cancel by{' '}
        <span className="underline decoration-solid underline-offset-auto decoration-auto">
          support@justdone.ai
        </span>
        . Our goal is customer satisfaction
      </span>
    </footer>
  );
};
