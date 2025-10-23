import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '../components/Nav';
import { ProductHero } from '../components/ProductHero';
import { ProductTile } from '../components/ProductTile';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <Nav />
      <section className="pt-20 md:pt-24">
        <div className="container-page">
          <ProductHero
            eyebrow="新款"
            title="iPhone 体验"
            subtitle="A17 Pro 芯片，强劲性能与持久续航。"
            ctaPrimary={{ href: '#buy', label: '了解更多' }}
            ctaSecondary={{ href: '#compare', label: '购买' }}
            image={{ src: '/hero-iphone.png', alt: 'iPhone 机型展示', priority: true }}
            theme="light"
          />
        </div>
      </section>

      <section className="mt-8 md:mt-16">
        <div className="container-page grid md:grid-cols-2 gap-6">
          <ProductTile
            title="MacBook Pro"
            subtitle="M3 系列芯片，强大专业性能。"
            href="#"
            image={{ src: '/tile-mbp.png', alt: 'MacBook Pro' }}
          />
          <ProductTile
            title="Apple Watch"
            subtitle="强大健康功能，随时守护你。"
            href="#"
            image={{ src: '/tile-watch.png', alt: 'Apple Watch' }}
            dark
          />
        </div>
      </section>

      <section className="mt-8 md:mt-16">
        <div className="container-page grid md:grid-cols-3 gap-6">
          <ProductTile title="iPad" subtitle="强大、多才多艺。" href="#" image={{ src: '/tile-ipad.png', alt: 'iPad' }} />
          <ProductTile title="AirPods" subtitle="妙不可言的聆听体验。" href="#" image={{ src: '/tile-airpods.png', alt: 'AirPods' }} />
          <ProductTile title="配件" subtitle="为你的设备添彩。" href="#" image={{ src: '/tile-accessories.png', alt: '配件' }} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
