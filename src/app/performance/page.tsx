import PerfomanceImg from '../../../public/performance.jpg';
import Hero from '@/components/hero';

export default function performancePage() {
  return (
    <div>
      <Hero title="High Performance" imgAlt="performanceImg" imgData={PerfomanceImg} />
    </div>
  );
}
