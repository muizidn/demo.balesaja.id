import WidgetLoader from "@/components/WidgetLoader";

const levels = [
  { level: "N5", title: "Pemula", desc: "Hiragana, Katakana, kanji dasar ~100 huruf, percakapan sederhana", duration: "4 Bulan", price: "Rp 1.500.000" },
  { level: "N4", title: "Dasar", desc: "Kanji ~300 huruf, grammar dasar, percakapan sehari-hari", duration: "4 Bulan", price: "Rp 1.800.000" },
  { level: "N3", title: "Menengah", desc: "Kanji ~650 huruf, diskusi topik umum, membaca artikel", duration: "5 Bulan", price: "Rp 2.200.000" },
  { level: "N2", title: "Lanjut", desc: "Kanji ~1000 huruf, berita, business Japanese", duration: "6 Bulan", price: "Rp 2.800.000" },
  { level: "N1", title: "Mahir", desc: "Kanji ~2000 huruf, native-like fluency", duration: "6 Bulan", price: "Rp 3.500.000" },
];

const activities = [
  { emoji: "🖌️", title: "Kaligrafi", desc: "Belajar menulis huruf Jepang dengan indah" },
  { emoji: "🍣", title: "Cooking Class", desc: "Memasak makanan Jepang bersama" },
  { emoji: "🎎", title: "Budaya", desc: "Pengenalan budaya dan tradisi Jepang" },
  { emoji: "🎬", title: "Movie Night", desc: "Nonton film Jepang dengan subtitle" },
];

const instructors = [
  { name: "Tanaka Sensei", desc: "Native speaker dari Tokyo, 10 tahun mengajar" },
  { name: "Yuki Sensei", desc: "Lulusan Nihongo Kyouiku, ahli grammar" },
  { name: "Hasan S.", desc: "Alumni N1, pernah tinggal 5 tahun di Osaka" },
];

const testimonials = [
  { name: "Aulia R.", text: "Berkat Nihongo Academy, saya lolos kerja di perusahaan Jepang. Arigatou!", initial: "AR" },
  { name: "Fajar N.", text: "Dari nol sampai N2 cuma 1 tahun. Sensei-nya sabar banget!", initial: "FN" },
  { name: "Dian P.", text: "Belajarnya seru, ada cooking class dan culture day juga. Recomended!", initial: "DP" },
];

export default function KursusBahasaJepang() {
  return (
    <div className="flex flex-col">
      <WidgetLoader src="https://csai.balescepat.com/widget.js?id=f10e2814-1ecb-4b6e-9723-96c1027a0dd2" />

      <section className="relative bg-zinc-900 px-4 py-24 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-black text-white/5 select-none leading-none">
            日本語
          </div>
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-red-400/30 bg-red-500/10 px-4 py-1 text-sm font-medium text-red-300">
            🇯🇵 Kursus Bahasa Jepang
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Belajar{" "}
            <span className="text-red-400">Bahasa Jepang</span>{" "}
            dari NOL sampai MAHIR
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Kuasai bahasa Jepang dengan metode belajar yang menyenangkan. 
            Dari认 Hiragana hingga N1 — kami bimbing kamu sampai bisa!
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-red-600 hover:scale-105">
              〜 Daftar Sekarang
            </a>
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-8 py-3.5 text-base font-semibold text-zinc-300 transition-all hover:border-zinc-400 hover:text-white">
              Info Program
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-100 bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-red-500">Level JLPT</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Program Belajar</h2>
            <p className="mt-2 text-zinc-500">Dari N5 hingga N1, semua level tersedia</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-5">
            {levels.map((l) => (
              <div key={l.level} className="group rounded-xl border border-zinc-200 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-lg font-bold text-white">
                  {l.level}
                </div>
                <h3 className="font-bold text-zinc-900">{l.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">{l.desc}</p>
                <div className="mt-4 border-t border-zinc-100 pt-3">
                  <p className="text-xs text-zinc-400">{l.duration}</p>
                  <p className="text-lg font-bold text-red-500">{l.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-lg text-center lg:text-left">
              <span className="text-sm font-semibold uppercase tracking-widest text-red-500">Aktivitas</span>
              <h2 className="mt-2 text-3xl font-bold text-zinc-900">Belajar Sambil Berbudaya</h2>
              <p className="mt-2 text-zinc-500">Kami percaya bahasa dan budaya adalah satu kesatuan</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((a) => (
              <div key={a.title} className="group rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-red-200">
                <span className="text-4xl">{a.emoji}</span>
                <h3 className="mt-3 font-bold text-zinc-900">{a.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-red-500">Pengajar</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Sensei Kami</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {instructors.map((ins) => (
              <div key={ins.name} className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-lg font-bold text-white">
                  {ins.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">{ins.name}</h3>
                  <p className="mt-0.5 text-sm text-zinc-500">{ins.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">Testimoni</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">{t.initial}</div>
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">&ldquo;{t.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <p className="mb-2 text-3xl">🎌</p>
          <h2 className="text-3xl font-bold">一緒に勉強しましょう！</h2>
          <p className="mt-3 text-lg text-zinc-400">Ayo belajar bersama! Customer Service AI kami siap membantu dalam Bahasa Indonesia dan Jepang!</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-red-600 hover:scale-105">
              Chat via WhatsApp
            </a>
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-400 hover:text-white">
              Jadwal Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
