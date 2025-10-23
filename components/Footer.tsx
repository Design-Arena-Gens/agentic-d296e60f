export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200/70 bg-white/80">
      <div className="container-page py-10 text-xs text-neutral-500 space-y-4">
        <p>本网站为演示用途，非苹果官方页面。所有商标归原公司所有。</p>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <div className="font-medium text-neutral-700 mb-2">选购与了解</div>
            <ul className="space-y-1">
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-neutral-700 mb-2">服务</div>
            <ul className="space-y-1">
              <li>Apple Music</li>
              <li>iCloud</li>
              <li>Apple TV+</li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-neutral-700 mb-2">账户</div>
            <ul className="space-y-1">
              <li>管理你的 Apple ID</li>
              <li>Apple Store 账户</li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-neutral-700 mb-2">关于 Apple</div>
            <ul className="space-y-1">
              <li>新闻资讯</li>
              <li>投资者</li>
              <li>职业机会</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-neutral-200/60">© {new Date().getFullYear()} Apple 风格官网示例</div>
      </div>
    </footer>
  );
}
