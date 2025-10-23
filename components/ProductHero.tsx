import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

type CTA = { href: string | URL; label: string };

type ProductHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  image: { src: string; alt: string; priority?: boolean };
  theme?: 'light' | 'dark';
};

export function ProductHero({ eyebrow, title, subtitle, ctaPrimary, ctaSecondary, image, theme = 'light' }: ProductHeroProps) {
  const isDark = theme === 'dark';
  return (
    <div className={(isDark ? 'bg-midnight text-white' : 'bg-white text-ink') + ' rounded-2xl overflow-hidden shadow-soft'}>
      <div className="grid md:grid-cols-2 gap-6 items-center p-8 md:p-12 bg-radial-spot">
        <div>
          {eyebrow && <div className="text-primary font-medium mb-2">{eyebrow}</div>}
          <h1 className="headline mb-3">{title}</h1>
          {subtitle && <p className="subhead mb-6 max-w-xl">{subtitle}</p>}
          <div className="flex items-center gap-3">
            {ctaPrimary && (
              <Link href={String(ctaPrimary.href)} className="cta">
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link href={String(ctaSecondary.href)} className="text-primary font-medium hover:underline">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-[3/2]">
          <Image src={image.src} alt={image.alt} fill priority={image.priority} className="object-contain" />
        </div>
      </div>
    </div>
  );
}
