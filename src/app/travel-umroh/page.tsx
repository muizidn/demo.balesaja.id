const packages = [
  { name: "Paket Hemat", duration: "9 Hari", price: "Rp 24.999.000", badge: "Best Seller", img: "/images/umroh-1.jpg" },
  { name: "Paket Reguler", duration: "12 Hari", price: "Rp 32.999.000", badge: "Populer", img: "/images/umroh-2.jpg" },
  { name: "Paket VIP", duration: "14 Hari", price: "Rp 49.999.000", badge: "Premium", img: "/images/umroh-3.jpg" },
];

const features = [
  { title: "Bimbingan Profesional", desc: "Didampingi pembimbing berpengalaman dan bersertifikat" },
  { title: "Hotel Bintang 5", desc: "Penginapan hotel bintang 5 dekat Masjidil Haram" },
  { title: "Visa & Dokumen", desc: "Urus visa dan dokumen lengkap tanpa ribet" },
  { title: "AI Siap Bantu", desc: "Customer Service AI siap membantu pendaftaran 24/7" },
];

const testimonials = [
  { name: "H. Abdullah", text: "Pelayanan sangat memuaskan, pembimbingnya sabar dan profesional." },
  { name: "Hj. Fatimah", text: "Programnya lengkap, hotel dekat Masjidil Haram. Barakallah." },
  { name: "H. Ahmad F.", text: "Sangat recommended, dari awal sampai akhir dilayani dengan baik." },
];

const itinerary = [
  { day: "Hari 1", desc: "Tiba di Jeddah, transit ke Mekkah" },
  { day: "Hari 2-3", desc: "Umroh & Thawaf Ifadhah" },
  { day: "Hari 4-6", desc: "Ziarah ke Madinah, Raudhah" },
  { day: "Hari 7", desc: "Ziarah sejarah Islam" },
  { day: "Hari 8-9", desc: "Persiapan pulang ke Tanah Air" },
];

import Image from "next/image";
import Script from "next/script";

export default function TravelUmroh() {
  return (
    <div className="flex flex-col">
      <Script
        src="https://csai.balescepat.com/widget.js?id=e7166ede-3718-4ca7-990c-bedf87b49b2b"
        strategy="afterInteractive"
      />
      <section className="relative overflow-hidden px-4 py-20 text-white">
        <Image src="/images/umroh-hero.jpg" alt="" fill className="absolute inset-0 object-cover" priority />
        <div className="absolute inset-0 bg-emerald-900/70" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-200">Biro Perjalanan Umroh</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Wujudkan Impian Umroh Anda
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-emerald-100">
            Kami hadir untuk membantu perjalanan ibadah umroh Anda dengan layanan terbaik, harga transparan, dan bimbingan profesional.
          </p>
          <a
            href="https://s.id/nK5CC"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-semibold text-emerald-700 transition-all hover:bg-emerald-50 hover:scale-105"
          >
            Daftar via WhatsApp
          </a>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-center text-3xl font-bold text-zinc-900">Paket Umroh</h2>
          <p className="mb-12 text-center text-zinc-600">Pilih paket yang sesuai dengan kebutuhan Anda</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className="group relative rounded-2xl border border-zinc-200 p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1">
                <span className="absolute right-3 top-3 z-10 rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-medium text-white">
                  {p.badge}
                </span>
                <div className="relative -mx-6 -mt-6 mb-4 h-40 overflow-hidden rounded-t-2xl">
                  <Image src={p.img} alt={p.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{p.duration}</p>
                <p className="mt-3 text-2xl font-bold text-emerald-600">{p.price}</p>
                <button className="mt-4 w-full rounded-xl bg-zinc-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
                  Daftar Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">Itinerary Perjalanan</h2>
          <div className="mx-auto max-w-2xl">
            {itinerary.map((item) => (
              <div key={item.day} className="flex items-start gap-4 border-l-2 border-emerald-200 pb-8 pl-6 last:pb-0">
                <span className="absolute -ml-[2.15rem] mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white">✓</span>
                <div>
                  <p className="text-sm font-semibold text-emerald-600">{item.day}</p>
                  <p className="text-sm text-zinc-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">Mengapa Memilih Kami?</h2>
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
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">Testimoni Jamaah</h2>
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

      <section className="bg-gradient-to-br from-emerald-700 to-teal-600 px-4 py-16 text-center text-white">
        <h2 className="text-2xl font-bold">Siap Berangkat Umroh?</h2>
        <p className="mt-2 text-emerald-100">Customer Service AI kami siap membantu pendaftaran Anda</p>
        <a
          href="https://s.id/nK5CC"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-semibold text-emerald-700 transition-all hover:bg-emerald-50"
        >
          Chat via WhatsApp
        </a>
      </section>
    </div>
  );
}
