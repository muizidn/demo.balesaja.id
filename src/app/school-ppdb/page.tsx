import WidgetLoader from "@/components/WidgetLoader";

const steps = [
  { step: "01", title: "Daftar Online", desc: "Isi formulir pendaftaran secara online melalui website kami." },
  { step: "02", title: "Verifikasi Dokumen", desc: "Unggah dokumen persyaratan untuk diverifikasi oleh tim." },
  { step: "03", title: "Tes & Wawancara", desc: "Ikuti tes akademik dan wawancara dengan guru BK." },
  { step: "04", title: "Pengumuman", desc: "Hasil seleksi akan diumumkan melalui website dan email." },
  { step: "05", title: "Daftar Ulang", desc: "Lakukan daftar ulang dan pembayaran biaya pendidikan." },
];

const programs = [
  { name: "IPA", desc: "Ilmu Pengetahuan Alam", students: "8 Kelas", emoji: "🔬" },
  { name: "IPS", desc: "Ilmu Pengetahuan Sosial", students: "6 Kelas", emoji: "🌍" },
  { name: "Bahasa", desc: "Program Bahasa & Sastra", students: "3 Kelas", emoji: "📚" },
  { name: "Agama", desc: "Program Keagamaan Unggulan", students: "4 Kelas", emoji: "🕌" },
];

const facilities = [
  { name: "Lab Komputer", desc: "40 unit PC dengan internet" },
  { name: "Lab Bahasa", desc: "Laboratorium multimedia" },
  { name: "Lab IPA", desc: "Peralatan praktikum lengkap" },
  { name: "Perpustakaan", desc: "10.000+ koleksi buku" },
  { name: "Lapangan Olahraga", desc: "Futsal, basket, voli" },
  { name: "Musholla", desc: "Tempat ibadah yang nyaman" },
  { name: "Kantin Sehat", desc: "Makanan bergizi dan bersih" },
  { name: "Aula Serbaguna", desc: "Kapasitas 500 orang" },
];

const stats = [
  { value: "1.200+", label: "Siswa Aktif" },
  { value: "98%", label: "Lulus UN" },
  { value: "85%", label: "Lolos PTN" },
  { value: "50+", label: "Guru Profesional" },
];

const testimonials = [
  { name: "Ibu Ratna", child: "Orang Tua Siswa", text: "Anak saya betah belajar di sini. Guru-gurunya sabar dan profesional." },
  { name: "Ahmad Fauzi", child: "Alumni 2024", text: "Berkat bimbingan guru, saya lolos SNBT ke UI. Terima kasih!" },
  { name: "Bapak Dedi", child: "Orang Tua Siswa", text: "Prestasi akademik dan non-akademik sangat diperhatikan di sini." },
];

export default function SchoolPPDB() {
  return (
    <div className="flex flex-col">
      <WidgetLoader src="https://csai.balescepat.com/widget.js?id=7c8ea349-f054-4ce2-a30b-00735327b188" />

      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 px-4 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            📖 PPDB Tahun Ajaran 2026/2027
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Selamat Datang di{" "}
            <span className="bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              SMA Bina Bangsa
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-violet-100">
            Bergabunglah dengan keluarga besar SMA Bina Bangsa. Kami mencetak generasi unggul, 
            berprestasi, dan berakhlak mulia. Daftar sekarang melalui PPDB Online!
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://s.id/nK5CC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-violet-700 shadow-lg transition-all hover:scale-105 hover:bg-violet-50"
            >
              Daftar Sekarang
            </a>
            <a
              href="https://s.id/nK5CC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Info Lengkap
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-zinc-100 bg-gradient-to-b from-white to-violet-50 p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <p className="text-4xl font-bold text-violet-600">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">Alur Pendaftaran</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Cara Mendaftar</h2>
            <p className="mt-2 text-zinc-600">Ikuti langkah-langkah berikut untuk mendaftar</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="absolute left-[60%] top-8 hidden h-0.5 w-[80%] bg-gradient-to-r from-violet-300 to-violet-100 lg:block" />
                )}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-lg font-bold text-white shadow-lg">
                  {s.step}
                </div>
                <h3 className="mt-4 font-bold text-zinc-900">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">Program Unggulan</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Jurusan & Program</h2>
            <p className="mt-2 text-zinc-600">Pilih program yang sesuai dengan minat dan bakat Anda</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <div key={p.name} className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-50 text-2xl transition-colors group-hover:bg-violet-100">
                  {p.emoji}
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{p.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-violet-600">
                  <span>👥 {p.students}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">Fasilitas</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Sarana & Prasarana</h2>
            <p className="mt-2 text-zinc-600">Fasilitas lengkap untuk menunjang proses belajar</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f) => (
              <div key={f.name} className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:border-violet-200 hover:shadow-md">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-lg">✓</span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{f.name}</p>
                  <p className="text-xs text-zinc-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">Testimoni</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-violet-400">★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-zinc-600">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.child}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Segera Daftar!</h2>
          <p className="mt-3 text-lg text-violet-100">
            Kuota terbatas! Daftarkan diri Anda sekarang juga. Customer Service AI kami siap membantu proses pendaftaran Anda 24/7.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://s.id/nK5CC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-violet-700 shadow-lg transition-all hover:scale-105 hover:bg-violet-50"
            >
              Hubungi via WhatsApp
            </a>
            <a
              href="https://s.id/nK5CC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Jadwal Kunjungan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
