import Image from 'next/image';
import ScaleImg from '../../../public/scale.jpg';
import Hero from '@/components/hero';

export default function scalePage() {
  return (
    <div>
      <Hero title="Highly Scalable" imgAlt="ScaleImg" imgData={ScaleImg} />
    </div>
  );
}
