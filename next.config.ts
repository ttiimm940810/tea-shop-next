import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 💡 開啟靜態導出，部署保證不超時！
  images: {
    unoptimized: true, // 靜態導出模式下必須關閉圖片優化功能
  },
};

export default nextConfig;