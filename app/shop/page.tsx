import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";
import AddToBasketButton from "../components/AddToBasketButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse Lucky Arts Team merchandise, costumes and martial arts equipment available for enquiry.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            Lucky Arts Team Store
          </p>

          <h1 className="text-5xl font-bold">Shop</h1>

          <p className="mt-4 max-w-2xl text-gray-300">
            Explore merchandise, costumes and martial arts equipment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                  {product.category}
                </span>
                <span className="text-lg font-bold text-yellow-400">
                  {product.price}
                </span>
              </div>

              <Image
                src={product.image}
                alt={product.alt}
                width={800}
                height={500}
                className="mb-4 h-40 w-full rounded-xl object-cover"
              />

              <h2 className="text-2xl font-semibold">{product.name}</h2>

              <p className="mt-3 text-gray-300">{product.description}</p>

              <div className="mt-6 flex gap-3">
                <Link
                  href={`/shop/${product.slug}`}
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-red-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-red-500"
                >
                  View Product
                </Link>

                <div className="flex-1">
                  <AddToBasketButton
                    slug={product.slug}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}