// import HomeImg from '../../public/home.jpg';
// import Hero from '@/components/hero';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      {/* <Hero title="Car Manufacturing" imgAlt="homeImg" imgData={HomeImg} /> */}
      <button>
        <Link href="/snippets/new">Create New Code</Link>
      </button>
    </div>
  );
}
