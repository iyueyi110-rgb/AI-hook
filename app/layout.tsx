import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Hook Lab | 内容开头生成与比较工具",
  description:
    "面向中文内容创作者的多平台内容开头生成与比较工具，支持批量生成、结果比较、单条改写和最终选择。",
  keywords: ["内容开头", "Hook", "文案", "生成与比较", "小红书", "抖音", "内容创作"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
