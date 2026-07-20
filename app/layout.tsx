import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const notoEthiopic = Noto_Sans_Ethiopic({
  variable: "--font-noto-ethiopic",
  subsets: ["ethiopic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0F8A5F",
};

export const metadata: Metadata = {
  title: "Mosque Donation | በአንድነት የአላህን ቤት እንገንባ",
  description:
    "Support the construction of our mosque. Donate via CBE bank transfer. ለመስጂዱ ግንባታ በሰደቃ ጃሪያ ይሳተፉ።",
  keywords: ["mosque donation", "masjid", "sadaqah jariyah", "CBE donation", "Ethiopia mosque"],
  authors: [{ name: "Abdela Adem" }],
  openGraph: {
    title: "Mosque Donation | በአንድነት የአላህን ቤት እንገንባ",
    description: "Support mosque construction — donate easily via CBE account.",
    type: "website",
    locale: "am_ET",
    siteName: "Mosque Donation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosque Donation | Sadaqah Jariyah",
    description: "Support mosque construction — donate easily via CBE account.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="am" dir="ltr">
      <body
        className={`${notoSans.variable} ${notoEthiopic.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
