import Link from 'next/link';
export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container bg-slate-500 relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/">Home</Link>
        <div className="flex  gap-2">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">reliability</Link>
          <Link href="/scale">scale</Link>
        </div>
      </nav>
    </div>
  );
}
