import Link from 'next/link';

export default function performancePage({ id }: { id: any }) {
  return (
    <div>
      <button>
        <Link href="/performance/task"> Performance id {}</Link>
      </button>
    </div>
  );
}
