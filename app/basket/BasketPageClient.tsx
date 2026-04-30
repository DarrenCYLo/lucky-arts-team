"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

function formatPrice(value: number) {
  return value.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
}

function parsePrice(price: string) {
  return Number(price.replace(/[^\d.]/g, ""));
}

export default function BasketPageClient() {
  const {
    items,
    itemCount,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  } = useCart();

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
          Lucky Arts Team Store
        </p>

        <h1 className="text-5xl font-bold">Your Enquiry Basket</h1>

        <p className="mt-4 text-gray-300">
          {itemCount} item{itemCount === 1 ? "" : "s"} in your enquiry basket.
        </p>

        <div className="mt-4 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-200">
          This website currently accepts booking and product enquiries only. No
          online payment is taken at this stage.
        </div>

        {items.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-lg text-gray-300">
              Your enquiry basket is empty.
            </p>

            <Link
              href="/shop"
              className="mt-6 inline-block rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-500"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              {items.map((item) => {
                const subtotal = parsePrice(item.price) * item.quantity;

                return (
                  <div
                    key={item.slug}
                    className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-[160px_1fr_auto] md:items-center"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="h-32 w-full rounded-xl object-cover"
                    />

                    <div>
                      <h2 className="text-2xl font-semibold">{item.name}</h2>
                      <p className="mt-2 text-gray-300">Price: {item.price}</p>
                      <p className="mt-1 text-gray-300">
                        Subtotal: {formatPrice(subtotal)}
                      </p>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-gray-300">Quantity:</span>

                        <button
                          onClick={() => decreaseQuantity(item.slug)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-lg font-bold text-white hover:bg-white hover:text-black"
                        >
                          -
                        </button>

                        <span className="min-w-[24px] text-center text-white">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.slug)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-lg font-bold text-white hover:bg-white hover:text-black"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.slug)}
                      className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="h-fit rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold">Enquiry Summary</h2>

              <div className="mt-6 flex items-center justify-between text-gray-300">
                <span>Total Items</span>
                <span>{itemCount}</span>
              </div>

              <div className="mt-3 flex items-center justify-between text-xl font-bold text-yellow-400">
                <span>Total Price</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={clearCart}
                  className="rounded-full border border-red-500 px-6 py-3 font-semibold text-red-400 hover:bg-red-500 hover:text-white"
                >
                  Clear Enquiry Basket
                </button>

                <Link
                  href="/checkout"
                  className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-500"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}