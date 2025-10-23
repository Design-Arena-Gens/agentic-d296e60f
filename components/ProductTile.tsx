import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  subtitle?: string;
  href: string;
  image: { src: string; alt: string };
  dark?: boolean;
};

export function ProductTile({ title, subtitle, href, image, dark }: Props) {
  return (
    <Link href={href} className={(dark ? 'bg-midnight text-white' : 'bg-white text-ink') + ' rounded-2xl overflow-hidden shadow-soft group block'}>
      <div className="p-8">
        <h3 className="text-3xl font-semibold tracking-tight mb-2">{title}</h3>
        {subtitle && <p className="text-neutral-600 group-hover:text-neutral-700 dark:text-neutral-300 mb-6">{subtitle}</p>}
        <div className="relative aspect-[16/9]">
          <Image src={image.src} alt={image.alt} fill className="object-contain" />
        </div>
      </div>
    </Link>
  );
}
