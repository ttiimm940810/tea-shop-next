export default function Home() {
  const teaList = [
    { 
      name: "特級阿里山烏龍", 
      price: "1,200", 
      description: "滋味甘醇、香氣幽雅且持久，帶有鮮明的冷礦味，喉韻極佳。",
      emoji: "🍃",
      bgClass: "bg-emerald-50"
    },
    { 
      name: "日月潭紅玉紅茶", 
      price: "850", 
      description: "獨特的天然肉桂香與薄荷香，茶湯紅潤如寶石般透亮，世界頂級紅茶。",
      emoji: "☕",
      bgClass: "bg-orange-50"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fdfbf7] text-[#2f4f4f] font-sans">
      <nav className="p-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <h1 className="text-2xl font-bold tracking-widest text-[#1a3030]">🍵 翠峰茶莊</h1>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-green-700 transition">高山烏龍</a>
          <a href="#" className="hover:text-green-700 transition">經典紅茶</a>
          <a href="#" className="hover:text-green-700 transition">品茶故事</a>
        </div>
      </nav>

      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-slate-800">
          品味山林間的 <span className="text-green-800 italic underline decoration-1 underline-offset-8">純粹</span>
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          源自海拔 1800 公尺雲霧繚繞的茶園，每一片茶葉都經過製茶師三十年的經驗淬鍊。
        </p>
        <button className="bg-[#2f4f4f] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-green-900 shadow-xl transition-all hover:-translate-y-1">
          立即探索名茶
        </button>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {teaList.map((item, index) => (
          <div key={index} className="group bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
            <div className={`aspect-video ${item.bgClass} rounded-2xl mb-6 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform`}>
              {item.emoji}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-800">{item.name}</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black text-green-800">NT$ {item.price}</span>
              <button className="bg-[#2f4f4f] text-white px-6 py-2 rounded-xl hover:bg-green-800 transition shadow-md">訂購</button>
            </div>
          </div>
        ))}
      </section>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 mt-12">
        © 2026 翠峰茶莊 - 傳承百年的手感溫度
      </footer>
    </main>
  );
}