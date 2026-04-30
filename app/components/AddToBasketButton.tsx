"use client";

import { useCart } from "../context/CartContext";

type AddToBasketButtonProps = {
  slug: string;
  name: string;
  price: string;
  image: string;
};

export default function AddToBasketButton({
  slug,
  name,
  price,
  image,
}: AddToBasketButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() =>
        addItem({
          slug,
          name,
          price,
          image,
        })
      }
      className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/20 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-black"
    >
      Add to Enquiry Basket
    </button>
  );
}