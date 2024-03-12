import PerfomanceImg from '../../../public/performance.jpg';
import Hero from '@/components/hero';
import Link from 'next/link';

export default function performancePage() {
  return (
    <div>
      <Hero title="High Performance" imgAlt="performanceImg" imgData={PerfomanceImg} />
      <button>
        <Link href="/performace/task"> Task</Link>
      </button>
    </div>
  );
}
