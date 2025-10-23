import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-d296e60f.vercel.app'),
  title: {
    default: 'Apple 风格官网示例',
    template: '%s · Apple 风格官网示例'
  },
  description: '受苹果官网启发的中文演示站点，响应式与细腻动效。',
  icons: {
    icon: [
      { url: '/icons/apple-touch-icon.png',sizes: '180x180', rel: 'apple-touch-icon' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ]
  },
  openGraph: {
    title: 'Apple 风格官网示例',
    description: '受苹果官网启发的中文演示站点，响应式与细腻动效。',
    url: 'https://agentic-d296e60f.vercel.app',
    siteName: 'Apple 风格官网示例',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    locale: 'zh_CN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple 风格官网示例',
    description: '受苹果官网启发的中文演示站点，响应式与细腻动效。',
    images: ['/og.jpg']
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="bg-paper text-ink">
      <body>
        {children}
      </body>
    </html>
  );
}
