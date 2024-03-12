import PerfomanceImg from '../../../public/performance.jpg';
import Hero from '@/components/hero';
import Link from 'next/link';

export default function performancePage() {
  return (
    <div className="flex flex-col gap-2 justify-between items-center">
      {/* <Hero title="High Performance" imgAlt="performanceImg" imgData={PerfomanceImg} /> */}
      <button className="p-2 w-[100px] bg-gray-200 shadow-md rounded-md">
        <Link href="/performance/task"> Task</Link>
      </button>
      <button className="p-2  w-[100px] bg-gray-200 shadow-md rounded-md">
        <Link href="/performance/P001"> P001</Link>
      </button>
    </div>
  );
}
