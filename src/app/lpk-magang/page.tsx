import WidgetLoader from "@/components/WidgetLoader";

const programs = [
  { country: "Jepang", flag: "🇯🇵", title: "Magang ke Jepang", duration: "1-3 Tahun", salary: "¥150.000 - ¥200.000", fields: ["Manufacturing", "Food Processing", "Agriculture", "Fishery"], color: "red" },
  { country: "Jerman", flag: "🇩🇪", title: "Ausbildung Jerman", duration: "3 Tahun", salary: "€900 - €1.200", fields: ["Perawat", "Chef", "Teknisi", "Hotel"], color: "yellow" },
  { country: "Korea", flag: "🇰🇷", title: "Magang ke Korea", duration: "1-3 Tahun", salary: "₩2.000.000 - ₩2.800.000", fields: ["Manufacturing", "Welding", "Electronics", "Textile"], color: "blue" },
  { country: "Taiwan", flag: "🇹🇼", title: "Magang ke Taiwan", duration: "2 Tahun", salary: "NT$25.000 - NT$35.000", fields: ["Manufacturing", "Service", "Healthcare", "Fishing"], color: "green" },
];

const steps = [
  { step: 1, title: "Pendaftaran", desc: "Isi formulir dan lengkapi dokumen persyaratan" },
  { step: 2, title: "Tes & Seleksi", desc: "Ikuti tes kemampuan dan wawancara" },
  { step: 3, title: "Pelatihan", desc: "Pelatihan bahasa dan keterampilan selama 3-6 bulan" },
  { step: 4, title: "Keberangkatan", desc: "Berangkat dengan visa resmi dan pendampingan" },
  { step: 5, title: "Monitoring", desc: "Kami pantau selama kamu magang di luar negeri" },
];

const stats = [
  { value: "5.000+", label: "Alumni Diberangkatkan" },
  { value: "4 Negara", label: "Negara Tujuan" },
  { value: "98%", label: "Keberhasilan Penempatan" },
  { value: "15+ Tahun", label: "Pengalaman" },
];

const testimonials = [
  { name: "Andi S.", text: "3 tahun di Jepang, sekarang buka usaha sendiri. Alhamdulillah.", origin: "Jepang - Manufacturing", initial: "AS" },
  { name: "Rina M.", text: "Ausbildung Jerman bener-bener ngubah hidup. Sekarang kerja resmi di sini.", origin: "Jerman - Perawat", initial: "RM" },
  { name: "Budi H.", text: "Magang di Korea, gajinya besar, dapet pengalaman internasional.", origin: "Korea - Welding", initial: "BH" },
];

const colorStyles: Record<string, string> = {
  red: "border-red-200 hover:border-red-400",
  yellow: "border-yellow-200 hover:border-yellow-400",
  blue: "border-blue-200 hover:border-blue-400",
  green: "border-green-200 hover:border-green-400",
};

export default function LpkMagang() {
  return (
    <div className="flex flex-col">
      <WidgetLoader src="https://csai.balescepat.com/widget.js?id=a86b1f32-ba2c-4a7c-84a8-caad8c259adf" />

      <section className="relative bg-zinc-950 px-4 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1 text-sm font-medium text-teal-300">
            LPK &bull; Pelatihan &bull; Penempatan Luar Negeri
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Wujudkan Mimpi{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Bekerja di Luar Negeri
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            LPK resmi dengan pengalaman 15+ tahun. Kami melatih, memberangkatkan, dan memonitor 
            peserta magang ke Jepang, Jerman, Korea, dan Taiwan.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-600 hover:to-cyan-600">
              Daftar Magang
            </a>
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-8 py-3.5 text-base font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-white">
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-100 bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-teal-600">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">Program</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Program Magang Luar Negeri</h2>
            <p className="mt-2 text-zinc-500">Pilih negara tujuan impian Anda</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {programs.map((p) => (
              <div key={p.country} className={`group rounded-2xl border-2 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${colorStyles[p.color]}`}>
                <span className="text-4xl">{p.flag}</span>
                <h3 className="mt-3 text-lg font-bold text-zinc-900">{p.title}</h3>
                <div className="mt-3 space-y-1 text-sm text-zinc-500">
                  <p>⏱ {p.duration}</p>
                  <p>💰 {p.salary}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.fields.map((f) => (
                    <span key={f} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">{f}</span>
                  ))}
                </div>
                <button className="mt-5 w-full rounded-xl bg-zinc-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800">
                  Daftar {p.country}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">Alur</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Proses Keberangkatan</h2>
            <p className="mt-2 text-zinc-500">Kami bimbing dari awal sampai tiba di negara tujuan</p>
          </div>
          <div className="mx-auto max-w-4xl">
            {steps.map((s, i) => (
              <div key={s.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-sm font-bold text-white shadow">
                    {s.step}
                  </div>
                  {i < steps.length - 1 && <div className="mt-1 h-full w-0.5 bg-gradient-to-b from-teal-300 to-teal-100" />}
                </div>
                <div className={`pb-10 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                  <h3 className="font-bold text-zinc-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">Testimoni Alumni</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <p className="text-sm leading-relaxed text-zinc-600">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3 border-t border-zinc-100 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-xs font-bold text-white">{t.initial}</div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.origin}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Siap Bekerja di Luar Negeri?</h2>
          <p className="mt-3 text-lg text-zinc-400">Customer Service AI kami siap menjawab pertanyaan Anda tentang program magang ke luar negeri 24/7!</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-teal-600 hover:to-cyan-600">
              Chat via WhatsApp
            </a>
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-white">
              Jadwal Konsultasi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
