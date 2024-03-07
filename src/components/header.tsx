import Link from 'next/link';
export default function Header() {
  return (
    <div className="w-full p-2 flex justify-between">
      <Link href="/">Home</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">reliability</Link>
      <Link href="/scale">scale</Link>
    </div>
  );
}
