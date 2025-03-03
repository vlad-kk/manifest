'use client';

import React, { useCallback, useState } from 'react';
import { PriceCard } from '@/shared/PriceCard/PriceCard';
import { Button } from '@/shared/Button/Button';
import { Product } from '@/interfaces/product';
import { useTimer } from '@/hooks/useTimer';
import { Timer } from '@/shared/PriceCard/CardTimer/Timer';
import { initialTime } from '@/constants/timer';

export const Plan = ({ plans }: { plans: Product[] }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const { timeLeft, isExpiredTimer } = useTimer({
    ids: plans.map((p, i) => ({ id: p.id, time: initialTime + i * 20 }))
  });

  const selectPlan = useCallback((id: string) => {
    setSelectedPlan(id);
  }, []);

  const submit = () => {
    const p = plans.find((p) => p.id === selectedPlan);

    if (p) {
      console.log('id:', p.id);
      console.log('name:', p.name);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center w-[384px] md:w-full mt-7">
      {selectedPlan && !isExpiredTimer[selectedPlan] && (
        <Timer
          timeLeft={timeLeft?.[selectedPlan] || 0}
          className="md:hidden w-full bg-[#252525] text-[#FFCC8F] text-[16px] font-semibold flex justify-center items-center px-2 py-3.5 rounded-[16px]"
        />
      )}

      <div className="flex flex-col-reverse justify-around items-center gap-7 md:flex-row md:gap-2 w-full mt-10 md:mt-0">
        {plans.map((plan) => (
          <PriceCard
            key={plan.id}
            timeLeft={timeLeft?.[plan.id] || 0}
            plan={plan}
            onClick={selectPlan}
            isSelected={selectedPlan === plan.id}
            isExpiredTimer={isExpiredTimer[plan.id]}
          />
        ))}
      </div>

      <Button onClick={submit} title="Get Started" />
    </div>
  );
};
