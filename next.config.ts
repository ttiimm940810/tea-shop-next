import type { NextjsConfig } from "next";

const nextConfig: NextjsConfig = {
  output: 'export', // 💡 加入這一行，讓網站變成純靜態，部署保證不超時！
  images: {
    unoptimized: true, // 靜態導出需要關閉圖片優化
  },
};

export default nextConfig;