import './index.css'

const IOS_APP_URL = 'https://apps.apple.com/us/app/%E3%82%A6%E3%83%81%E3%81%AE%E5%AD%90/id6756212061?itscg=30200&itsct=apps_box_link&mttnsubad=6756212061'
const OWNER_WEB_URL = 'https://uchinokoweb.vercel.app'

const RANKING_MOCK = [
  { rank: 1, name: 'ポチ', owner: 'たなかさん', pts: 3840, color: '#FFB800' },
  { rank: 2, name: 'モカ', owner: 'さとうさん', pts: 3210, color: '#C0C0C0' },
  { rank: 3, name: 'ムギ', owner: 'やまださん', pts: 2980, color: '#CD7F32' },
  { rank: 4, name: 'ソラ', owner: 'いとうさん', pts: 2450, color: '#e5e7eb' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* ナビ */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <span className="text-2xl">🐾</span>
            <span className="text-base">ウチの子</span>
          </div>
          <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="/black.svg" alt="Download on the App Store" className="h-9" />
          </a>
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white pt-16 pb-24 px-5">
        {/* 背景ブロブ */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-amber-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* テキスト */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              🎮 愛犬との新しい習慣
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
              愛犬との毎日が、<br />
              <span style={{ background: 'linear-gradient(135deg, #FF8F0D, #FFB800)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                ゲームになる。
              </span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              ミッションをこなしてポイントを貯めて、<br />週間ランキング1位を目指そう。<br />
              かわいさじゃなく、<span className="font-bold text-gray-700">努力で勝てる。</span>
            </p>
            <div className="flex flex-row gap-3 justify-center lg:justify-start items-center">
              <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/black.svg" alt="Download on the App Store" className="h-12" />
              </a>
              <a
                href={OWNER_WEB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-6 rounded-2xl transition-all text-sm hover:scale-105 shadow-lg"
                style={{ height: '48px', background: 'linear-gradient(135deg, #FF8F0D, #FFB800)', boxShadow: '0 4px 20px rgba(255,143,13,0.4)' }}
              >
                🌐 Webで使う
              </a>
            </div>
          </div>

          {/* フェイクスマホモックアップ */}
          <div className="flex-shrink-0 relative">
            {/* 背景光彩 */}
            <div className="absolute inset-0 bg-orange-300 rounded-[40px] blur-2xl opacity-20 scale-110" />
            {/* スマホフレーム */}
            <div className="relative w-64 bg-gray-900 rounded-[40px] shadow-2xl overflow-hidden" style={{ padding: '12px', boxShadow: '0 30px 80px rgba(0,0,0,0.3)' }}>
              {/* スクリーン */}
              <div className="bg-gray-50 rounded-[30px] overflow-hidden" style={{ minHeight: '480px' }}>
                {/* ステータスバー */}
                <div className="bg-white px-5 pt-3 pb-0 flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-800">9:41</span>
                  <div className="w-20 h-4 bg-gray-900 rounded-full" />
                  <div className="flex gap-1 items-center">
                    <div className="w-3 h-2 bg-gray-800 rounded-sm" />
                    <div className="w-2 h-2 bg-gray-800 rounded-full" />
                  </div>
                </div>
                {/* アプリヘッダー */}
                <div className="bg-white px-4 pb-3 pt-2">
                  <p className="text-xs text-gray-400">今週の</p>
                  <p className="text-base font-black text-gray-900">ランキング 🏆</p>
                </div>
                {/* タブ */}
                <div className="bg-white border-b border-gray-100 flex">
                  <div className="flex-1 py-2 text-center text-xs font-bold text-orange-500 border-b-2 border-orange-500">全体</div>
                  <div className="flex-1 py-2 text-center text-xs text-gray-400">友達</div>
                </div>
                {/* ランキングリスト */}
                <div className="px-3 py-3 space-y-2">
                  {RANKING_MOCK.map((item) => (
                    <div key={item.rank} className="bg-white rounded-2xl px-3 py-2.5 flex items-center gap-2.5 shadow-sm">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0" style={{ background: item.rank <= 3 ? item.color : '#f3f4f6', color: item.rank <= 3 ? (item.rank === 1 ? '#7a5800' : item.rank === 2 ? '#555' : '#7a3e00') : '#9ca3af' }}>
                        {item.rank}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-base flex-shrink-0">🐕</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-gray-900 truncate">{item.name}</p>
                        <p className="text-[10px] text-gray-400 truncate">{item.owner}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs font-black text-orange-500">{item.pts.toLocaleString()}</p>
                        <p className="text-[10px] text-gray-400">pt</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* ミッションバナー */}
                <div className="mx-3 rounded-2xl px-3 py-3 flex items-center gap-2" style={{ background: 'linear-gradient(135deg, #FF8F0D22, #FFB80022)', border: '1px solid #FF8F0D33' }}>
                  <span className="text-xl">📸</span>
                  <div>
                    <p className="text-xs font-bold text-orange-700">今日のミッション</p>
                    <p className="text-[10px] text-orange-500">写真を撮って +10pt</p>
                  </div>
                  <div className="ml-auto text-xs font-bold text-orange-500 bg-orange-100 px-2 py-0.5 rounded-full">達成</div>
                </div>
              </div>
            </div>
            {/* フローティングバッジ */}
            <div className="absolute -right-4 top-16 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2">
              <span className="text-lg">🏅</span>
              <div>
                <p className="text-xs font-black text-gray-900">+10pt獲得！</p>
                <p className="text-[10px] text-gray-400">ミッション達成</p>
              </div>
            </div>
            <div className="absolute -left-6 bottom-24 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2">
              <span className="text-lg">🔥</span>
              <div>
                <p className="text-xs font-black text-gray-900">5日連続！</p>
                <p className="text-[10px] text-gray-400">ストリーク中</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 数字ストリップ */}
      <section className="py-12 px-5 border-y border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { num: '毎日', label: 'ミッション更新' },
            { num: '週1回', label: 'ランキングリセット' },
            { num: '無料', label: 'ずっと使える' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-4xl font-black text-orange-500 mb-1">{s.num}</p>
              <p className="text-xs md:text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ベントーグリッド */}
      <section className="py-16 px-5 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">できること</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto">

          {/* 大カード：ミッション */}
          <div className="col-span-2 md:col-span-2 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #FF8F0D, #FFB800)', minHeight: '200px' }}>
            <div className="absolute -right-8 -bottom-8 text-9xl opacity-20 select-none">📸</div>
            <div>
              <span className="text-xs font-bold text-white/70 bg-white/20 px-2 py-1 rounded-full">MISSION</span>
              <h3 className="text-xl md:text-2xl font-black text-white mt-3 mb-2">毎日ミッションで<br />ポイントを貯めよう</h3>
              <p className="text-white/80 text-sm">写真を撮るだけ。毎日こなせば<br />じわじわ順位が上がっていく。</p>
            </div>
          </div>

          {/* 小カード：うちの子 */}
          <div className="rounded-3xl p-5 bg-orange-50 flex flex-col justify-between" style={{ minHeight: '200px' }}>
            <div className="text-4xl mb-4">🐾</div>
            <div>
              <h3 className="font-black text-gray-900 mb-1">うちの子登録</h3>
              <p className="text-xs text-gray-500 leading-relaxed">性格診断・健康記録もまとめて管理</p>
            </div>
          </div>

          {/* 小カード：ランキング */}
          <div className="rounded-3xl p-5 bg-gray-900 flex flex-col justify-between" style={{ minHeight: '180px' }}>
            <div className="text-4xl mb-4">🏆</div>
            <div>
              <h3 className="font-black text-white mb-1">週間ランキング</h3>
              <p className="text-xs text-gray-400 leading-relaxed">努力が順位に出る。毎週リセットで常に逆転のチャンス</p>
            </div>
          </div>

          {/* 大カード：友達 */}
          <div className="col-span-2 md:col-span-2 rounded-3xl p-6 bg-orange-100 flex flex-col justify-between relative overflow-hidden" style={{ minHeight: '180px' }}>
            <div className="absolute -right-6 -top-6 text-8xl opacity-10 select-none">👫</div>
            <div>
              <span className="text-xs font-bold text-orange-600 bg-orange-200 px-2 py-1 rounded-full">REFERRAL</span>
              <h3 className="text-xl font-black text-gray-900 mt-3 mb-2">友達を招待して<br />お互い100ptゲット</h3>
              <p className="text-gray-600 text-sm">招待コードを共有するだけ。友達と一緒にランキングを競おう。</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1a00 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,143,13,0.15) 0%, transparent 70%)' }} />
        <div className="relative max-w-xl mx-auto">
          <div className="text-5xl mb-5">🐶</div>
          <h2 className="text-3xl md:text-4xl font-black mb-3 text-white">今すぐはじめよう</h2>
          <p className="text-gray-400 text-sm mb-10">無料で使えます。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity hover:scale-105">
              <img src="/white.svg" alt="Download on the App Store" className="h-14" />
            </a>
            <a
              href={OWNER_WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all text-sm hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #FF8F0D, #FFB800)', color: '#fff', boxShadow: '0 4px 24px rgba(255,143,13,0.4)' }}
            >
              🌐 Webアプリで使う
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-gray-100 px-5 py-8 text-center bg-white">
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
