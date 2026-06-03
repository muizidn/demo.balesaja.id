import Link from "next/link";
import AiWidgetCleanup from "@/components/AiWidgetCleanup";

const demos = [
  {
    title: "Phone Store",
    href: "/phone-store",
    description: "Landing page toko HP dengan Customer Service AI untuk membantu pelanggan memilih produk dan menjawab pertanyaan.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Travel Umroh",
    href: "/travel-umroh",
    description: "Landing page biro perjalanan umroh dengan Customer Service AI untuk membantu pendaftaran dan informasi paket.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Restaurant Booking",
    href: "/restaurant-booking",
    description: "Landing page restoran dengan Customer Service AI untuk membantu reservasi meja dan menampilkan menu.",
    gradient: "from-amber-600 to-rose-600",
  },
  {
    title: "Hotel Booking",
    href: "/hotel-booking",
    description: "Landing page hotel dengan Customer Service AI untuk membantu pemesanan kamar dan informasi fasilitas.",
    gradient: "from-blue-900 to-indigo-800",
  },
  {
    title: "School PPDB",
    href: "/school-ppdb",
    description: "Landing page PPDB sekolah dengan Customer Service AI untuk membantu pendaftaran siswa baru.",
    gradient: "from-violet-600 to-indigo-700",
  },
  {
    title: "Kursus Bahasa Inggris",
    href: "/kursus-bahasa-inggris",
    description: "Landing page kursus bahasa Inggris dengan Customer Service AI untuk membantu pendaftaran dan placement test.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Kursus Bahasa Jepang",
    href: "/kursus-bahasa-jepang",
    description: "Landing page kursus bahasa Jepang dengan Customer Service AI untuk membantu konsultasi level JLPT.",
    gradient: "from-zinc-800 to-zinc-900",
  },
  {
    title: "LPK Magang Luar Negeri",
    href: "/lpk-magang",
    description: "Landing page LPK magang ke luar negeri dengan Customer Service AI untuk membantu pendaftaran program.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    title: "Belajar Kerja Remote",
    href: "/belajar-kerja-remote",
    description: "Landing page persiapan karir remote dengan Customer Service AI untuk membantu konsultasi skill digital.",
    gradient: "from-zinc-800 to-blue-800",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <AiWidgetCleanup />
      <section className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <div className="mb-4 inline-block rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-medium text-zinc-600">
          Demo Landing Pages
        </div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Landing Pages dengan{" "}
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
            Customer Service AI
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-zinc-600">
          Website ini menampilkan contoh landing page yang terintegrasi dengan Customer Service AI dari{" "}
          <a href="https://balesaja.id" target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-900 underline underline-offset-2">
            balesaja.id
          </a>
          . AI kami siap membantu pelanggan Anda 24/7 melalui chat.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo) => (
          <Link
            key={demo.href}
            href={demo.href}
            className="group flex flex-1 flex-col rounded-2xl border border-zinc-200 p-8 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className={`mb-4 h-3 w-20 rounded-full bg-gradient-to-r ${demo.gradient}`} />
            <h2 className="mb-2 text-2xl font-bold text-zinc-900">{demo.title}</h2>
            <p className="text-sm leading-relaxed text-zinc-600">{demo.description}</p>
            <span className="mt-4 text-sm font-medium text-zinc-900 group-hover:underline">
              Lihat Demo &rarr;
            </span>
          </Link>
        ))}
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-zinc-900">Tentang balesaja.id</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            balesaja.id menyediakan solusi Customer Service AI yang dapat diintegrasikan dengan berbagai platform.
            Mulai dari toko online, biro perjalanan, hingga layanan profesional lainnya.
          </p>
        </div>
      </section>
    </div>
  );
}
