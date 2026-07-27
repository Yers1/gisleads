import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "gisleads — Лиды из 2GIS для веб-студий и фрилансеров",
  description: "Находите малый бизнес без сайта и без WhatsApp/Telegram в 2GIS. Экспорт в CSV за минуты. Только stdlib Python.",
  keywords: ["2GIS", "лиды", "лидогенерация", "веб-студии", "фриланс", "малый бизнес", "CSV", "Python"],
  authors: [{ name: "Yers1" }],
  openGraph: {
    title: "gisleads — Лиды из 2GIS для веб-студий и фрилансеров",
    description: "Находите малый бизнес без сайта и без WhatsApp/Telegram в 2GIS. Экспорт в CSV за минуты.",
    type: "website",
    locale: "ru_RU",
    siteName: "gisleads",
  },
  twitter: {
    card: "summary_large_image",
    title: "gisleads — Лиды из 2GIS",
    description: "Находите малый бизнес без сайта и без WhatsApp/Telegram в 2GIS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}