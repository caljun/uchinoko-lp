import './index.css'

const IOS_APP_URL = 'https://apps.apple.com/us/app/%E3%82%A6%E3%83%81%E3%81%AE%E5%AD%90/id6756212061?itscg=30200&itsct=apps_box_link&mttnsubad=6756212061'
const OWNER_WEB_URL = 'https://uchinokoweb.vercel.app'

const FEATURES = [
  { emoji: '🐾', title: 'うちの子を登録', desc: '犬の情報・性格診断・健康記録をまとめて管理' },
  { emoji: '📸', title: 'ミッションでポイント', desc: '毎日のお散歩や写真でポイントを獲得しよう' },
  { emoji: '🏆', title: 'ランキングで競う', desc: '努力が順位に反映される。1位を目指せ' },
  { emoji: '👫', title: '友達と繋がる', desc: '招待コードで友達を呼んでお互いにポイントゲット' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ナビ */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <span className="text-2xl">🐾</span>
            <span className="text-base">ウチの子</span>
          </div>
          <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer">
            <img src="/black.svg" alt="Download on the App Store" className="h-9" />
          </a>
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-white pt-16 pb-20 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6">🐾</div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-gray-900">
            愛犬との毎日が、<br /><span className="text-[#FF8F0D]">ゲームになる。</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed">
            ミッションをこなしてポイントを貯めて、ランキング1位を目指そう。<br />
            かわいさじゃなく、努力で勝てる。
          </p>
          <div className="flex flex-row gap-3 justify-center items-center">
            <a
              href={IOS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/black.svg" alt="Download on the App Store" className="h-11" />
            </a>
            <a
              href={OWNER_WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-[#FF8F0D] hover:bg-[#E67D0B] text-white font-bold px-5 rounded-full transition-colors text-sm whitespace-nowrap"
              style={{ height: '44px' }}
            >
              <span>🌐</span> Webで使う
            </a>
          </div>
        </div>
      </section>

      {/* 機能 */}
      <section className="py-16 px-5 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">できること</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-orange-50 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-3">{f.emoji}</div>
              <h3 className="font-bold text-sm text-gray-800 mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-amber-400 py-16 px-5 text-center text-white">
        <div className="max-w-xl mx-auto">
          <div className="text-5xl mb-5">🐶</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">今すぐはじめよう</h2>
          <p className="text-orange-100 text-sm mb-8">無料で使えます。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={IOS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/white.svg" alt="Download on the App Store" className="h-14" />
            </a>
            <a
              href={OWNER_WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm border border-white/40"
            >
              🌐 Webアプリで使う
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-gray-100 px-5 py-8 text-center">
        <div className="flex items-center justify-center gap-2 font-bold text-gray-700 mb-4">
          <span className="text-xl">🐾</span>
          <span className="text-sm">ウチの子</span>
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-xs text-gray-400 mb-4">
          <a href="mailto:calderonjunya0602@gmail.com" className="hover:text-gray-600 transition-colors">お問い合わせ</a>
          <a href="#" className="hover:text-gray-600 transition-colors">利用規約</a>
          <a href="#" className="hover:text-gray-600 transition-colors">プライバシーポリシー</a>
          <a href="#" className="hover:text-gray-600 transition-colors">特定商取引法</a>
        </div>
        <p className="text-xs text-gray-300">© {new Date().getFullYear()} uchinoko Inc.</p>
      </footer>

    </div>
  )
}
