import WidgetLoader from "@/components/WidgetLoader";

const levels = [
  { code: "A1", name: "Beginner", desc: "Dasar-dasar bahasa Inggris, perkenalan, dan percakapan sederhana", duration: "3 Bulan", price: "Rp 1.200.000", color: "green" },
  { code: "A2", name: "Elementary", desc: "Percakapan sehari-hari, grammar dasar, dan vocabulary", duration: "3 Bulan", price: "Rp 1.400.000", color: "blue" },
  { code: "B1", name: "Intermediate", desc: "Diskusi topik umum, menulis email, dan presentasi", duration: "4 Bulan", price: "Rp 1.800.000", color: "orange" },
  { code: "B2", name: "Upper Intermediate", desc: "Argumentasi, academic writing, dan public speaking", duration: "4 Bulan", price: "Rp 2.200.000", color: "red" },
  { code: "C1", name: "Advanced", desc: "Fluent speaking, TOEFL/IELTS preparation", duration: "5 Bulan", price: "Rp 3.000.000", color: "purple" },
];

const whyUs = [
  { title: "Native & Lokal Tutor", desc: "Belajar dengan pengajar native dan lokal bersertifikat internasional" },
  { title: "Metode Fun Learning", desc: "Belajar sambil bermain, nonton film, dan diskusi seru" },
  { title: "Sertifikat Resmi", desc: "Dapatkan sertifikat di setiap level yang diselesaikan" },
  { title: "Free Trial Class", desc: "Kelas percobaan gratis sebelum memutuskan daftar" },
];

const testimonials = [
  { name: "Rizky A.", text: "Dulu gugup kalau ngomong Inggris, sekarang udah pede. Thanks EnglishPro!", initial: "RA" },
  { name: "Maya S.", text: "TOEFL skor naik dari 450 ke 550 cuma dalam 3 bulan. Mantap!", initial: "MS" },
  { name: "David K.", text: "Metode belajarnya seru, nggak ngebosenin. Recommended banget!", initial: "DK" },
  { name: "Sari W.", text: "Gurunya native, jadi terbiasa denger aksen asli. Worth it!", initial: "SW" },
];

const colorMap: Record<string, string> = {
  green: "from-green-500 to-emerald-400",
  blue: "from-blue-500 to-cyan-400",
  orange: "from-orange-500 to-amber-400",
  red: "from-red-500 to-rose-400",
  purple: "from-purple-500 to-violet-400",
};

export default function KursusBahasaInggris() {
  return (
    <div className="flex flex-col">
      <WidgetLoader src="https://csai.balescepat.com/widget.js?id=fb00a95f-722c-454e-8f28-c35924524a3a" />

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 px-4 py-24 text-white">
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border-[20px] border-white/5" />
        <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full border-[16px] border-white/5" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            🇬🇧 Kursus Bahasa Inggris
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Kuasai{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-amber-200 bg-clip-text text-transparent">
              Bahasa Inggris
            </span>{" "}
            dengan Percaya Diri
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">
            Dari pemula hingga mahir. Metode belajar interaktif dengan native speaker. 
            Siapkan dirimu untuk go international!
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-blue-700 shadow-lg transition-all hover:scale-105 hover:bg-blue-50">
              Daftar Sekarang
            </a>
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10">
              Trial Gratis
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Level Program</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Pilih Level Anda</h2>
            <p className="mt-2 text-zinc-600">Dari pemula hingga mahir, kami punya program yang tepat</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-5">
            {levels.map((l) => (
              <div key={l.code} className="group rounded-2xl border border-zinc-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[l.color]} text-lg font-bold text-white shadow`}>
                  {l.code}
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{l.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">{l.desc}</p>
                <div className="mt-4 border-t border-zinc-100 pt-4">
                  <p className="text-xs text-zinc-400">{l.duration}</p>
                  <p className="text-xl font-bold text-blue-600">{l.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Keunggulan</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Mengapa EnglishPro?</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-semibold text-zinc-900">{w.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Testimoni</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Apa Kata Mereka?</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-xs font-bold text-white">{t.initial}</div>
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">&ldquo;{t.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Siap Mulai Belajar?</h2>
          <p className="mt-3 text-lg text-blue-100">Konsultasi gratis dengan Customer Service AI kami untuk menentukan level yang tepat untuk Anda!</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-blue-700 shadow-lg transition-all hover:scale-105 hover:bg-blue-50">
              Chat via WhatsApp
            </a>
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10">
              Jadwalkan Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
