import HomeImg from '../../public/home.jpg';
import Hero from '@/components/hero';
export default function Home() {
  return (
    <div>
      <Hero title="Car Manufacturing" imgAlt="homeImg" imgData={HomeImg} />
    </div>
  );
}
