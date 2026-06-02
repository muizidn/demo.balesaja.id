const products = [
  { name: "iPhone 16 Pro", price: "Rp 18.999.000", badge: "Terbaru", img: "/images/phone-1.jpg" },
  { name: "Samsung Galaxy S25", price: "Rp 15.499.000", badge: "Populer", img: "/images/phone-2.jpg" },
  { name: "Xiaomi 14 Pro", price: "Rp 10.999.000", badge: "Best Value", img: "/images/phone-3.jpg" },
  { name: "Google Pixel 9", price: "Rp 13.999.000", badge: "Terbaru", img: "/images/phone-4.jpg" },
];

const features = [
  { title: "Garansi Resmi", desc: "Semua produk garansi resmi distributor 1 tahun" },
  { title: "Pengiriman Cepat", desc: "Gratis ongkir Jabodetabek, sampai hari ini juga" },
  { title: "Harga Bersaing", desc: "Harga terbaik, bisa cicil 0% hingga 12 bulan" },
  { title: "AI Siap Bantu", desc: "Customer Service AI kami siap membantu 24/7" },
];

const testimonials = [
  { name: "Ahmad R.", text: "Barang original, pengiriman cepat. Recommended banget!" },
  { name: "Siti N.", text: "Pelayanan ramah, admin fast respon. Besok nyampe." },
  { name: "Budi P.", text: "Harga lebih murah dari tempat lain, garansi resmi." },
];

import Image from "next/image";
import Script from "next/script";

export default function PhoneStore() {
  return (
    <div className="flex flex-col">
      <Script
        src="https://csai.balescepat.com/widget.js?id=eb6effd3-27a0-4667-ac1c-0a821f3514e7"
        strategy="afterInteractive"
      />
      <section className="relative overflow-hidden px-4 py-20 text-white">
        <Image src="/images/phone-hero.jpg" alt="" fill className="absolute inset-0 object-cover" priority />
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-200">Toko HP Terpercaya</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Gadget Terbaru, Harga Terbaik
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-100">
            Dapatkan smartphone impian Anda dengan harga spesial. Customer Service AI siap membantu Anda memilih produk yang tepat.
          </p>
          <a
            href="https://s.id/nK5CC"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-semibold text-blue-700 transition-all hover:bg-blue-50 hover:scale-105"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-center text-3xl font-bold text-zinc-900">Produk Pilihan</h2>
          <p className="mb-12 text-center text-zinc-600">Smartphone terbaru dengan harga spesial untuk Anda</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.name} className="group relative rounded-2xl border border-zinc-200 p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative mb-4 h-32 w-full overflow-hidden rounded-xl">
                  <span className="absolute right-2 top-2 z-10 rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-medium text-white shadow">
                    {p.badge}
                  </span>
                  <Image src={p.img} alt={p.name} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-zinc-900">{p.name}</h3>
                <p className="mt-1 text-lg font-bold text-blue-600">{p.price}</p>
                <button className="mt-3 w-full rounded-xl bg-zinc-900 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
                  Beli Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">Kenapa Belanja di Kami?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl bg-white p-6 text-center shadow-sm">
                <h3 className="font-semibold text-zinc-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">Apa Kata Pelanggan?</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-zinc-200 p-6">
                <p className="text-sm leading-relaxed text-zinc-600">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-zinc-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 px-4 py-16 text-center text-white">
        <h2 className="text-2xl font-bold">Ada Pertanyaan? Tanya AI Kami!</h2>
        <p className="mt-2 text-blue-100">Customer Service AI siap membantu Anda 24/7</p>
        <a
          href="https://s.id/nK5CC"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-semibold text-blue-700 transition-all hover:bg-blue-50"
        >
          Chat via WhatsApp
        </a>
      </section>
    </div>
  );
}
