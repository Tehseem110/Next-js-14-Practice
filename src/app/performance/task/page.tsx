import Link from 'next/link';

export default function Task() {
  return (
    <div className="relative h-screen">
      Task
      <button>
        <Link href="/performance">Back</Link>
      </button>
    </div>
  );
}
