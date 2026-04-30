import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Lucky Arts Team performance services including lion dance, qilin dance and dragon dance for weddings, grand openings, festivals and events.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        
        <h1 className="mt-6 text-5xl font-bold">Our Services</h1>

        <p className="mt-4 max-w-2xl text-gray-300">
          Lucky Arts Team provides traditional Chinese performance services for
          weddings, grand openings, business events, festivals, parties and
          cultural celebrations.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-red-400">Lion Dance</h2>
            <p className="mt-3 text-gray-300">
              Powerful lion dance performances for celebrations, openings,
              weddings and community events.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-yellow-400">
              Qilin Dance
            </h2>
            <p className="mt-3 text-gray-300">
              Elegant qilin dance performances that symbolise luck, prosperity
              and cultural tradition.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-blue-400">
              Dragon Dance
            </h2>
            <p className="mt-3 text-gray-300">
              High-energy dragon dance performances for festivals, public shows
              and large events.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}