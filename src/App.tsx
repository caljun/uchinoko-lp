import './index.css'

const IOS_APP_URL = 'https://apps.apple.com/us/app/%E3%82%A6%E3%83%81%E3%81%AE%E5%AD%90/id6756212061?itscg=30200&itsct=apps_box_link&mttnsubad=6756212061'
const STORE_WEB_URL = 'https://uchinokotempo.vercel.app'
const OWNER_WEB_URL = 'https://uchinokoweb.vercel.app'

const FEATURES_OWNER = [
  { emoji: '🐾', title: 'ウチの子登録', desc: '犬の情報・性格・健康記録をまとめて管理' },
  { emoji: '📅', title: 'かんたん予約', desc: 'トリミング・ホテル・しつけをアプリから予約' },
  { emoji: '🛍️', title: 'ショッピング', desc: 'ペット用品をまとめて購入・決済' },
  { emoji: '❤️', title: 'お気に入り', desc: '気に入ったお店や商品をブックマーク' },
]

const FEATURES_SHOP = [
  { emoji: '📋', title: '予約カレンダー', desc: 'リアルタイムで予約状況を一元管理' },
  { emoji: '📦', title: '商品・サービス管理', desc: '価格・在庫・公開設定をかんたん更新' },
  { emoji: '💳', title: 'Stripe決済連携', desc: '安全なオンライン決済をすぐに導入' },
  { emoji: '🗂️', title: 'カルテ管理', desc: 'お客様の犬の情報・来店履歴を記録' },
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
          <a
            href={IOS_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/black.svg" alt="Download on the App Store" className="h-9" />
          </a>
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-white pt-16 pb-20 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6">🐾</div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-gray-900">
            <span className="text-[#FF8F0D]">愛犬の全て</span>は、ここで。
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed">
            予約・ショッピング・健康管理をひとつに。<br />
            飼い主もお店も、もっとかんたんに。
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

      {/* 飼い主向け */}
      <section className="py-16 px-5 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#FF8F0D] bg-orange-50 px-3 py-1 rounded-full">飼い主さん向け</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-gray-900">ウチの子のすべてを、ここで。</h2>
          <p className="text-gray-500 text-sm mt-2">iOSアプリ・Webアプリどちらでも使えます</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES_OWNER.map(f => (
            <div key={f.title} className="bg-orange-50 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-3">{f.emoji}</div>
              <h3 className="font-bold text-sm text-gray-800 mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 区切り */}
      <div className="border-t border-gray-100 max-w-5xl mx-auto" />

      {/* 店舗向け */}
      <section className="py-16 px-5 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">店舗オーナー向け</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-gray-900">お店の運営を、もっとスマートに。</h2>
          <p className="text-gray-500 text-sm mt-2">ブラウザだけで完結する店舗管理ツール</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES_SHOP.map(f => (
            <div key={f.title} className="bg-indigo-50 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-3">{f.emoji}</div>
              <h3 className="font-bold text-sm text-gray-800 mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href={STORE_WEB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-indigo-300 text-indigo-600 hover:bg-indigo-50 font-bold px-7 py-3 rounded-full transition-colors text-sm"
          >
            店舗管理ツールを見る →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-amber-400 py-16 px-5 text-center text-white">
        <div className="max-w-xl mx-auto">
          <div className="text-5xl mb-5">🐶</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">今すぐはじめよう</h2>
          <p className="text-orange-100 text-sm mb-8">飼い主も、お店も、無料で使えます。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
              🌐 Webアプリ（飼い主）
            </a>
            <a
              href={STORE_WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm border border-white/40"
            >
              🏪 店舗管理ツール
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
