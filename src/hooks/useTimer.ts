import { useEffect, useState } from 'react';

export const useTimer = ({ ids }: { ids: { id: string; time: number }[] }) => {
  const storageKey = 'timer';
  const [timeLeft, setTimeLeft] = useState<Record<string, number>>(
    Object.fromEntries(ids.map(({ id }) => [id, 0]))
  );
  const [isExpiredTimer, setIsExpiredTimer] = useState<Record<string, boolean>>(
    Object.fromEntries(ids.map(({ id }) => [id, true]))
  );

  useEffect(() => {
    const initializeTimer = () => {
      const currentTime = Math.floor(Date.now() / 1000);

      ids.forEach(({ id, time }) => {
        const key = `${storageKey}-${id}`;
        const savedEndTime = localStorage.getItem(key);

        if (savedEndTime) {
          const remainingTime = Number(savedEndTime) - currentTime;
          if (remainingTime > 0) {
            setTimeLeft((prev) => ({ ...prev, [id]: remainingTime }));
            setIsExpiredTimer((prev) => ({ ...prev, [id]: false }));
          }
        } else {
          const endTime = currentTime + time;
          localStorage.setItem(key, endTime.toString());
          setTimeLeft((prev) => ({ ...prev, [id]: time }));
          setIsExpiredTimer((prev) => ({ ...prev, [id]: false }));
        }
      });
    };

    initializeTimer();

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const updatedTimeLeft: Record<string, number> = {};
        const currentTime = Math.floor(Date.now() / 1000);

        ids.forEach(({ id }) => {
          const key = `${storageKey}-${id}`;
          const savedEndTime = Number(localStorage.getItem(key) || '0');

          if (savedEndTime) {
            const remainingTime = savedEndTime - currentTime;
            updatedTimeLeft[id] = remainingTime > 0 ? remainingTime : 0;
          }
        });

        return { ...prev, ...updatedTimeLeft };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { timeLeft, isExpiredTimer };
};
