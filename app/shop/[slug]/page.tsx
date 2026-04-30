import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/products";
import AddToBasketButton from "../../components/AddToBasketButton";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <Link href="/shop" className="text-sm text-red-400 hover:text-red-300">
          ← Back to Shop
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
            <Image
              src={product.image}
              alt={product.alt}
              width={1000}
              height={700}
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>

          <div>
            <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
              {product.category}
            </p>

            <h1 className="mt-4 text-4xl font-bold">{product.name}</h1>

            <p className="mt-4 text-2xl font-bold text-yellow-400">
              {product.price}
            </p>

            <p className="mt-6 text-gray-300">{product.description}</p>

            <div className="mt-8 flex gap-4">
              <AddToBasketButton
                slug={product.slug}
                name={product.name}
                price={product.price}
                image={product.image}
              />

              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white hover:text-black"
              >
                Enquire Now
              </Link>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Product Details</h2>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Category: {product.category}</li>
                <li>• Suitable for performances and events</li>
                <li>• Demo product page for portfolio project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}