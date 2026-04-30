import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-red-400">
          Lucky Arts Team
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">Page Not Found</h1>

        <p className="mt-4 text-gray-300">
          Sorry, we could not find the page you were looking for.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}