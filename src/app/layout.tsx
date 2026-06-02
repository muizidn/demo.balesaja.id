import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "balesaja.id - Demo Landing Pages Customer Service AI",
  description: "Demo landing pages untuk Customer Service AI dari balesaja.id",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900">
              balesaja.id
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600">
              <Link href="/" className="hover:text-zinc-900 transition-colors">
                Beranda
              </Link>
              <Link href="/phone-store" className="hover:text-zinc-900 transition-colors">
                Phone Store
              </Link>
              <Link href="/travel-umroh" className="hover:text-zinc-900 transition-colors">
                Travel Umroh
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-zinc-50 py-8">
          <div className="mx-auto max-w-6xl px-4 text-center text-sm text-zinc-500">
            <p>&copy; {new Date().getFullYear()} balesaja.id - Demo Landing Pages Customer Service AI</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
