import type { Metadata } from "next";
import "../css/globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "悪滅祭描き下ろし小説・ランキング",
  description: "文化祭のために作られた小説とストラックアウトのランキングがあります。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body style={{ backgroundColor: "#e2041b" }}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
