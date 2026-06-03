import WidgetLoader from "@/components/WidgetLoader";

const rooms = [
  { name: "Deluxe Room", price: "Rp 850.000", size: "32 m²", capacity: "2 Dewasa", badge: "Populer", features: ["AC", "TV LED 43\"", "WiFi", "Mini Bar", "Bathtub"] },
  { name: "Suite Room", price: "Rp 1.500.000", size: "52 m²", capacity: "3 Dewasa", badge: "Best Value", features: ["AC", "TV LED 55\"", "WiFi", "Living Room", "Bathtub", "Kulkas"] },
  { name: "Presidential Suite", price: "Rp 3.200.000", size: "85 m²", capacity: "4 Dewasa", badge: "Premium", features: ["AC", "TV LED 65\"", "WiFi", "Ruang Tamu", "Jacuzzi", "Dapur Mini", "Butler Service"] },
];

const facilities = [
  { title: "Kolam Renang", desc: "Kolam renang outdoor dengan pemandangan kota", emoji: "🏊" },
  { title: "Gym & Fitness", desc: "Peralatan gym lengkap buka 24 jam", emoji: "💪" },
  { title: "Restaurant", desc: "Fine dining dengan menu internasional", emoji: "🍽️" },
  { title: "Spa & Massage", desc: "Relaxasi tradisional dan modern", emoji: "💆" },
  { title: "Meeting Room", desc: "Ruang meeting kapasitas 50 orang", emoji: "💼" },
  { title: "Laundry", desc: "Layanan laundry dan dry cleaning", emoji: "👔" },
];

const packages = [
  { name: "Romantic Getaway", price: "Rp 1.200.000", desc: "Termasuk dinner candle light + bunga + late check out" },
  { name: "Family Package", price: "Rp 1.800.000", desc: "Termasuk breakfast + extra bed + akses kolam anak" },
  { name: "Business Trip", price: "Rp 1.000.000", desc: "Termasuk akses lounge + meeting room 2 jam + kopi" },
];

const testimonials = [
  { name: "Andi Pratama", text: "Pelayanan luar biasa! Kamarnya bersih dan nyaman. View kotanya amazing!", rating: 5, title: "Wisatawan" },
  { name: "Dewi Sartika", text: "Saya menginap untuk honeymoon, semuanya sempurna. Recommended!", rating: 5, title: "Pengantin Baru" },
  { name: "Bambang S.", text: "Hotel bintang 5 dengan harga terjangkau. Breakfastnya enak banget.", rating: 5, title: "Pebisnis" },
];

export default function HotelBooking() {
  return (
    <div className="flex flex-col">
      <WidgetLoader src="https://csai.balescepat.com/widget.js?id=93e213c7-40a4-4c1b-8003-faa5e773794f" />

      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 px-4 py-24 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5" />
          <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full border border-white/5" />
          <div className="absolute left-1/4 top-1/3 h-px w-1/2 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-sm font-medium text-amber-300 backdrop-blur-sm">
                ✨ Luxury Hotel &bull; Bintang 5
              </span>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Menginap dengan{" "}
                <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  Kenyamanan Terbaik
                </span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-blue-200">
                Nikmati pengalaman menginap mewah dengan pemandangan kota yang menakjubkan. 
                Customer Service AI kami siap membantu reservasi kamar Anda 24/7.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://s.id/nK5CC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 px-8 py-3.5 text-base font-bold text-slate-900 shadow-lg transition-all hover:scale-105"
                >
                  Pesan Kamar
                </a>
                <a
                  href="https://s.id/nK5CC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
                >
                  Cek Ketersediaan
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-amber-400">150+</p>
                  <p className="mt-1 text-sm text-blue-200">Kamar Mewah</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-amber-400">5</p>
                  <p className="mt-1 text-sm text-blue-200">Restoran</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-amber-400">98%</p>
                  <p className="mt-1 text-sm text-blue-200">Kepuasan Tamu</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-amber-400">24/7</p>
                  <p className="mt-1 text-sm text-blue-200">Room Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Tipe Kamar</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Pilihan Kamar Hotel</h2>
            <p className="mt-2 text-zinc-600">Berbagai tipe kamar untuk kebutuhan Anda</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {rooms.map((room) => (
              <div key={room.name} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                {room.badge && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow">
                    {room.badge}
                  </span>
                )}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white">
                  <div className="mb-1 text-3xl">🛏️</div>
                  <h3 className="mt-2 text-xl font-bold">{room.name}</h3>
                  <p className="mt-1 text-sm text-blue-200">{room.size} &bull; {room.capacity}</p>
                  <p className="mt-3 text-3xl font-bold text-amber-300">{room.price}
                    <span className="text-sm font-normal text-blue-200"> /malam</span>
                  </p>
                </div>
                <div className="p-6">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Fasilitas Kamar</h4>
                  <ul className="space-y-2">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-zinc-600">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-600">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Fasilitas</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Fasilitas Hotel</h2>
            <p className="mt-2 text-zinc-600">Nikmati berbagai fasilitas premium selama menginap</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div key={f.title} className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">{f.emoji}</span>
                <div>
                  <h3 className="font-semibold text-zinc-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-600">Paket Spesial</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Paket Menginap</h2>
            <p className="mt-2 text-zinc-600">Hemat lebih banyak dengan paket spesial kami</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className="group rounded-2xl border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6 text-center transition-all hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg">
                <h3 className="text-lg font-bold text-zinc-900">{pkg.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{pkg.desc}</p>
                <p className="mt-4 text-2xl font-bold text-amber-600">{pkg.price}</p>
                <button className="mt-4 w-full rounded-xl bg-zinc-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800">
                  Ambil Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">Kata Tamu</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="mb-2 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-zinc-600">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 border-t border-zinc-100 pt-4">
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Siap untuk Staycation?</h2>
          <p className="mt-3 text-lg text-blue-200">
            Pesan sekarang dan nikmati pengalaman menginap tak terlupakan. Customer Service AI kami siap membantu Anda 24/7!
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://s.id/nK5CC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 px-8 py-3.5 text-base font-bold text-slate-900 shadow-lg transition-all hover:scale-105"
            >
              Hubungi via WhatsApp
            </a>
            <a
              href="https://s.id/nK5CC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Lihat Semua Kamar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
