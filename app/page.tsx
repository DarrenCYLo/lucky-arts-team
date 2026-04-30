import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Lucky Arts Team offers lion dance, qilin dance and dragon dance performances, merchandise and event enquiries in North East England.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.14),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
                Lucky Arts Team
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
                Lion Dance, Qilin Dance and Dragon Dance for unforgettable
                events
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                Traditional Chinese performance with a modern presentation.
                Book Lucky Arts Team for weddings, grand openings, birthdays,
                festivals, community celebrations and business events.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
                >
                  View Services
                </Link>

                <Link
                  href="/gallery"
                  className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  View Gallery
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-bold text-white">3</p>
                  <p className="mt-2 text-sm text-gray-400">
                    Performance styles
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-bold text-white">Events</p>
                  <p className="mt-2 text-sm text-gray-400">
                    Weddings, launches, festivals
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-bold text-white">Store</p>
                  <p className="mt-2 text-sm text-gray-400">
                    Costumes, clothing and equipment
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Quick Booking Snapshot
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-sm text-gray-400">Best for</p>
                  <p className="mt-2 text-lg font-semibold">
                    Weddings, grand openings and cultural events
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-sm text-gray-400">Popular services</p>
                  <p className="mt-2 text-lg font-semibold">
                    Lion Dance · Qilin Dance · Dragon Dance
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-sm text-gray-400">Also available</p>
                  <p className="mt-2 text-lg font-semibold">
                    Merchandise, costumes and martial arts equipment
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-yellow-400">
                  Portfolio highlight
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-300">
                  This project combines business website design, e-commerce
                  ideas, enquiry basket logic, checkout flow and real enquiry email
                  handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Our Performances
            </p>
            <h2 className="mt-3 text-4xl font-bold">Choose the right energy</h2>
            <p className="mt-4 max-w-2xl text-gray-300">
              Each performance brings a different style, meaning and visual
              impact for your event.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-red-500/40 hover:bg-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Lion Dance
              </p>
              <h3 className="mt-4 text-2xl font-bold">Powerful and exciting</h3>
              <p className="mt-4 leading-7 text-gray-300">
                Great for grand openings, weddings, birthdays and celebrations
                where you want strong energy and crowd engagement.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-400/40 hover:bg-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Qilin Dance
              </p>
              <h3 className="mt-4 text-2xl font-bold">Elegant and symbolic</h3>
              <p className="mt-4 leading-7 text-gray-300">
                Ideal for cultural performances and meaningful occasions where
                luck, prosperity and tradition are important.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-400/40 hover:bg-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
  Dragon Dance
</p>
              <h3 className="mt-4 text-2xl font-bold">Big visual impact</h3>
              <p className="mt-4 leading-7 text-gray-300">
                Best for large events, festivals and public performances where
                you want movement, scale and excitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Traditional art with a modern business feel
            </h2>

            <ul className="mt-6 space-y-4 text-gray-300">
              <li>• Clear performance options for different event types</li>
              <li>• Modern website design with booking and enquiry flow</li>
              <li>• Shop section for costumes, clothing and equipment</li>
              <li>• Strong visual branding for social media and web presence</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Explore More
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Browse services, products and event visuals
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href="/services"
                className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-white/30 hover:bg-white/10"
              >
                <p className="text-xl font-semibold">Services</p>
                <p className="mt-2 text-sm text-gray-400">
                  Performance packages and event use cases
                </p>
              </Link>

              <Link
                href="/shop"
                className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-white/30 hover:bg-white/10"
              >
                <p className="text-xl font-semibold">Shop</p>
                <p className="mt-2 text-sm text-gray-400">
                  Costumes, gear and branded clothing
                </p>
              </Link>

              <Link
                href="/gallery"
                className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-white/30 hover:bg-white/10"
              >
                <p className="text-xl font-semibold">Gallery</p>
                <p className="mt-2 text-sm text-gray-400">
                  Real images and visual event inspiration
                </p>
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-white/30 hover:bg-white/10"
              >
                <p className="text-xl font-semibold">Contact</p>
                <p className="mt-2 text-sm text-gray-400">
                  Send an enquiry for your event or order
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
  <div className="mx-auto max-w-6xl px-6 py-20">
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
      Gallery Preview
    </p>

    <h2 className="text-4xl font-bold md:text-5xl">
      See the energy in action
    </h2>

    <p className="mt-4 max-w-2xl text-gray-300">
      Explore real visuals from lion dance, qilin dance and dragon dance
      performances. Visit the full gallery for more event inspiration.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <Link
        href="/gallery"
        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      >
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src="/images/gallery/lion-dance.png"
            alt="Lion dance performance"
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-2xl font-semibold text-red-400">Lion Dance</h3>
          <p className="mt-2 text-sm text-gray-300">
            Powerful movement and strong visual energy for celebrations and
            grand openings.
          </p>
        </div>
      </Link>

      <Link
        href="/gallery"
        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      >
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src="/images/gallery/qilin-dance.png"
            alt="Qilin dance performance"
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-2xl font-semibold text-yellow-400">
            Qilin Dance
          </h3>
          <p className="mt-2 text-sm text-gray-300">
            Symbolic performance style with a unique cultural feel and strong
            visual identity.
          </p>
        </div>
      </Link>

      <Link
        href="/gallery"
        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      >
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src="/images/gallery/dragon-dance.png"
            alt="Dragon dance performance"
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-2xl font-semibold text-blue-400">
  Dragon Dance
</h3>
          <p className="mt-2 text-sm text-gray-300">
            Large-scale performance visuals that add excitement to festivals and
            public events.
          </p>
        </div>
      </Link>
    </div>

    <div className="mt-8">
      <Link
        href="/gallery"
        className="inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
      >
        View Full Gallery
      </Link>
    </div>
  </div>
</section>

      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                  Ready to book?
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Let’s plan your performance or product enquiry
                </h2>
                <p className="mt-4 max-w-2xl text-gray-300">
                  Contact Lucky Arts Team for weddings, grand openings,
                  celebrations, festivals or costume and merchandise enquiries.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
                >
                  Contact Us
                </Link>

                <Link
                  href="/shop"
                  className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  Visit Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
</main>
  );
}