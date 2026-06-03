import WidgetLoader from "@/components/WidgetLoader";

const skills = [
  { title: "Digital Marketing", desc: "SEO, SEM, Social Media Ads, Content Marketing", icon: "📈", color: "from-pink-500 to-rose-500" },
  { title: "Web Development", desc: "HTML, CSS, JavaScript, React, Node.js", icon: "💻", color: "from-blue-500 to-indigo-500" },
  { title: "UI/UX Design", desc: "Figma, Prototyping, Design Thinking, Portfolio", icon: "🎨", color: "from-purple-500 to-violet-500" },
  { title: "Copywriting", desc: "Content Writing, SEO Writing, Sales Copy", icon: "✍️", color: "from-yellow-500 to-amber-500" },
  { title: "Virtual Assistant", desc: "Admin, Scheduling, CRM, Project Management", icon: "📋", color: "from-teal-500 to-cyan-500" },
  { title: "Data Entry", desc: "Excel, Google Sheets, Database, Admin Tools", icon: "📊", color: "from-emerald-500 to-green-500" },
];

const tools = [
  { name: "Zoom / Google Meet", role: "Meeting & Komunikasi" },
  { name: "Slack / Discord", role: "Team Communication" },
  { name: "Trello / Asana", role: "Project Management" },
  { name: "Google Workspace", role: "Dokumen & Spreadsheet" },
  { name: "Canva", role: "Desain Grafis" },
  { name: "Notion", role: "Notes & Database" },
];

const curriculum = [
  { week: "Minggu 1-2", title: "Fundamental Remote Work", items: ["Pengenalan budaya remote work", "Tools & setup workspace", "Manajemen waktu & produktivitas"] },
  { week: "Minggu 3-6", title: "Skill Utama", items: ["Pilih salah satu: Digital Marketing / Web Dev / UI UX / Copywriting", "Praktik langsung dengan mentor", "Weekly project & review"] },
  { week: "Minggu 7-8", title: "Portfolio & Job Ready", items: ["Membangun portfolio profesional", "CV & LinkedIn optimization", "Simulasi interview & job hunting"] },
];

const mentors = [
  { name: "Sarah A.", role: "Remote Marketing Manager", exp: "5 tahun remote di perusahaan US" },
  { name: "Dimas P.", role: "Full Stack Developer", exp: "Freelancer di Upwork & Toptal" },
  { name: "Maya K.", role: "UI/UX Designer", exp: "Remote designer untuk startup Singapore" },
];

const testimonials = [
  { name: "Putra W.", text: "Setelah ikut program ini, saya diterima kerja remote di perusahaan Australia. Gajinya dalam USD!", initial: "PW" },
  { name: "Nadia F.", text: "Dulu karyawan kantoran, sekarang full remote. Work-life balance jauh lebih baik.", initial: "NF" },
  { name: "Irfan T.", text: "Portfolio saya dibimbing langsung mentor. Hasilnya klien dari luar negeri mulai percaya.", initial: "IT" },
];

export default function BelajarKerjaRemote() {
  return (
    <div className="flex flex-col">
      <WidgetLoader src="https://csai.balescepat.com/widget.js?id=27b4aa2b-8c5b-4143-a427-e3a8b6e29685" />

      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-4 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm">
            🌍 Kerja dari Mana Saja
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Persiapan{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Kerja Remote
            </span>{" "}
            untuk Pemula
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Dari nol sampai siap kerja remote — kuasai skill digital, bangun portfolio, 
            dan dapatkan penghasilan dalam Dollar!
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-blue-600 hover:to-cyan-600">
              Daftar Program
            </a>
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-8 py-3.5 text-base font-semibold text-zinc-300 transition-all hover:border-zinc-400 hover:text-white">
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="relative border-b border-zinc-100 bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Program</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Skill yang Akan Kamu Kuasai</h2>
            <p className="mt-2 text-zinc-500">Pilih satu skill unggulan dan kuasai dalam 8 minggu</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className={`absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br ${s.color} opacity-10`} />
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-3 text-lg font-bold text-zinc-900">{s.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{s.desc}</p>
                <button className="mt-4 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800">
                  Lihat Detail →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Kurikulum</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Apa yang Kamu Pelajari?</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {curriculum.map((c) => (
              <div key={c.week} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{c.week}</span>
                <h3 className="mt-1 text-lg font-bold text-zinc-900">{c.title}</h3>
                <ul className="mt-4 space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-600">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Tools</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Tools yang Wajib Kamu Kuasai</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <div key={t.name} className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-xs font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Mentor</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900">Belajar dari Yang Berpengalaman</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {mentors.map((m) => (
              <div key={m.name} className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-xl font-bold text-white shadow">
                  {m.name.charAt(0)}
                </div>
                <h3 className="mt-4 font-bold text-zinc-900">{m.name}</h3>
                <p className="text-sm font-medium text-blue-600">{m.role}</p>
                <p className="mt-1 text-xs text-zinc-500">{m.exp}</p>
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
                <p className="text-sm leading-relaxed text-zinc-600">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-xs font-bold text-white">{t.initial}</div>
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Siap Mulai Karir Remote?</h2>
          <p className="mt-3 text-lg text-zinc-400">Customer Service AI kami siap membantu kamu memilih jalur karir remote yang tepat!</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-blue-600 hover:to-cyan-600">
              Chat via WhatsApp
            </a>
            <a href="https://s.id/nK5CC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-400 hover:text-white">
              Lihat Silabus
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
