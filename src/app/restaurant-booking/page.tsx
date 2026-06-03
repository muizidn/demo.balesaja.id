import WidgetLoader from "@/components/WidgetLoader";

const menuItems = [
  { name: "Beef Steak", price: "Rp 89.000", desc: "Grilled beef tenderloin dengan saus mushroom", badge: "Chef's Pick" },
  { name: "Spaghetti Carbonara", price: "Rp 65.000", desc: "Pasta creamy dengan smoked beef dan keju parmesan" },
  { name: "Caesar Salad", price: "Rp 52.000", desc: "Salad segar dengan grilled chicken dan croutons", badge: "Best Seller" },
  { name: "Margherita Pizza", price: "Rp 78.000", desc: "Pizza klasik dengan mozzarella dan basil segar" },
  { name: "Grilled Salmon", price: "Rp 95.000", desc: "Fresh salmon dengan lemon butter sauce" },
  { name: "Chocolate Lava", price: "Rp 45.000", desc: "Dark chocolate cake dengan vanilla ice cream", badge: "Favorite" },
];

const highlights = [
  { icon: "🕐", title: "Buka Setiap Hari", desc: "Senin - Minggu, 10.00 - 22.00" },
  { icon: "📍", title: "Lokasi Strategis", desc: "Jalan Sudirman No. 123, Jakarta Pusat" },
  { icon: "🅿️", title: "Parkir Luas", desc: "Area parkir untuk 50 mobil dan 100 motor" },
  { icon: "🎵", title: "Live Music", desc: "Live akustik setiap Jumat & Sabtu malam" },
];

const reviews = [
  { name: "Rina Wijaya", text: "Makanannya enak semua, pelayanan ramah. Suasananya cozy banget!", rating: 5 },
  { name: "Dimas Hartono", text: "Steak di sini juara! Porsinya besar, harganya masih reasonable.", rating: 5 },
  { name: "Siska Purnama", text: "Cocok buat dinner romantis. Recomended!", rating: 5 },
];

export default function RestaurantBooking() {
  return (
    <div className="flex flex-col">
      <WidgetLoader src="https://csai.balescepat.com/widget.js?id=830b24c1-85ae-407f-b98b-e50de37be24c" />

      <section className="relative overflow-hidden bg-gradient-to-br from-amber-700 via-orange-600 to-rose-600 px-4 py-24 text-white">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/5" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            Fine Dining &bull; Casual &bull; Family
          </span>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Selamat Datang di{" "}
            <span className="text-amber-200">Savory Bites</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-amber-50">
            Nikmati pengalaman kuliner terbaik dengan cita rasa istimewa. 
            Pesan meja sekarang dan biarkan Customer Service AI kami membantu reservasi Anda.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://s.id/nK5CC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-amber-700 shadow-lg transition-all hover:scale-105 hover:bg-amber-50"
            >
              Reservasi Sekarang
            </a>
            <a
              href="https://s.id/nK5CC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/80 hover:bg-white/10"
            >
              Lihat Menu
            </a>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-600">Menu Spesial</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Rekomendasi Chef</h2>
            <p className="mt-2 text-zinc-600">Hidangan pilihan yang wajib Anda coba</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {item.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-amber-500 px-3 py-0.5 text-xs font-medium text-white shadow">
                    {item.badge}
                  </span>
                )}
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-2xl">
                  🍽️
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{item.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-600">{item.price}</span>
                  <button className="rounded-lg bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
                    Pesan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-600">Informasi</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Kenapa Pilih Savory Bites?</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-xl border border-zinc-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md">
                <span className="text-3xl">{h.icon}</span>
                <h3 className="mt-3 font-semibold text-zinc-900">{h.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-600">Jam Operasional</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Kunjungi Kami</h2>
          </div>
          <div className="mx-auto max-w-lg overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-lg">
            <div className="grid grid-cols-2 gap-px bg-amber-200">
              {[
                { day: "Senin - Kamis", time: "10.00 - 22.00" },
                { day: "Jumat & Sabtu", time: "10.00 - 23.00" },
                { day: "Minggu", time: "10.00 - 21.00" },
                { day: "Hari Libur", time: "10.00 - 22.00" },
              ].map((s) => (
                <div key={s.day} className="bg-white p-4 text-center">
                  <p className="text-sm font-semibold text-zinc-900">{s.day}</p>
                  <p className="mt-0.5 text-sm text-amber-600">{s.time}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-600 p-4 text-center">
              <p className="text-sm font-medium text-amber-100">
                📞 Reservasi: (021) 1234-5678
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">Testimoni Pelanggan</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-zinc-600">&ldquo;{r.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                    {r.name.charAt(0)}
                  </div>
                  <p className="text-sm font-semibold text-zinc-900">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-orange-600 to-amber-600 px-4 py-20 text-center text-white">
        <div className="absolute left-1/2 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Pesan Meja Sekarang</h2>
          <p className="mt-3 text-lg text-amber-50">
            Ada pertanyaan tentang menu atau ingin reservasi? Tanyakan saja pada Customer Service AI kami yang siap membantu 24/7!
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://s.id/nK5CC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-amber-700 shadow-lg transition-all hover:scale-105 hover:bg-amber-50"
            >
              Chat via WhatsApp
            </a>
            <a
              href="https://s.id/nK5CC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/80"
            >
              Reservasi Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
