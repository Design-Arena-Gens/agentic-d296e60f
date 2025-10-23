import Link from 'next/link';

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-paper/70 border-b border-neutral-200/60">
      <div className="container-page h-14 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium">
          <span className="sr-only">首页</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
            <path fill="currentColor" d="M10 1.5c-.6.5-2.9 2.3-3.4 2.8-.5.4-.9.6-1.4.6-.5 0-1-.2-1.4-.5-.5-.4-1.5-1.2-1.8-1.5-.3-.2-.6-.2-.8 0-.2.2-.2.5 0 .8.3.3 1.1 1.3 1.5 1.8.3.4.5.9.5 1.4 0 .5-.2.9-.6 1.4C2.3 8.1.5 10.4 0 11c-.2.2 0 .5.2.6.2.2.4.1.6 0 .6-.5 2.9-2.3 3.4-2.8.5-.4.9-.6 1.4-.6.5 0 1 .2 1.4.5.5.4 1.5 1.2 1.8 1.5.3.2.6.2.8 0 .2-.2.2-.5 0-.8-.3-.3-1.1-1.3-1.5-1.8-.3-.4-.5-.9-.5-1.4 0-.5.2-.9.6-1.4.5-.5 2.3-2.8 2.8-3.4.2-.2.1-.4 0-.6-.1-.2-.4-.3-.6-.1Z" />
          </svg>
          <span className="hidden sm:inline">Apple 风格</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <Link href="#">商店</Link>
          <Link href="#">Mac</Link>
          <Link href="#">iPad</Link>
          <Link href="#">iPhone</Link>
          <Link href="#">Watch</Link>
          <Link href="#">AirPods</Link>
          <Link href="#">配件</Link>
          <Link href="#">技术支持</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="搜索" className="text-neutral-700 hover:text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </button>
          <button aria-label="购物袋" className="text-neutral-700 hover:text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 7h12l-1 12H7L6 7Z"></path>
              <path d="M9 7a3 3 0 1 1 6 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
