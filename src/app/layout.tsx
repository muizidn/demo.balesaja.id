import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
  metadataBase: new URL("https://demo.balesaja.id"),
  title: "balesaja.id - Demo Landing Pages Customer Service AI",
  description: "Demo landing pages untuk Customer Service AI dari balesaja.id",
  openGraph: {
    title: "balesaja.id - Demo Landing Pages Customer Service AI",
    description: "Demo landing pages untuk Customer Service AI dari balesaja.id",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
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
            <Link href="/" className="flex gap-4 items-center font-bold">
              <span>demo.balesaja.id</span>
            </Link>

            <div className="flex gap-2 items-center">
              <Link href="https://balesaja.id" className="text-xl font-bold tracking-tight text-blue-600 flex gap-2 items-center">
              <Image
                src="/logo.jpeg"
                alt="balesaja.id"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
              Balesaja.id
            </Link>
            <a
              href="https://s.id/nK5CC"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Konsultasi
            </a>
            </div>
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
