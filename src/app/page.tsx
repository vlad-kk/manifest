import { Products } from '@/shared/Products/Products';
import { Plan } from '@/shared/Plan/Plan';
import type { Metadata } from 'next';
import { getPlans } from '@/actions/plans';

export const metadata: Metadata = {
  title: 'Manifest',
  description: 'Manifest test'
};

const Home = async () => {
  const plans = await getPlans();

  return (
    <>
      <Products />

      <Plan plans={plans} />
    </>
  );
};

export default Home;
