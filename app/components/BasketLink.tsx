"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function BasketLink() {
  const { itemCount } = useCart();

  return (
    <Link href="/basket" className="hover:text-white">
      Enquiry Basket ({itemCount})
    </Link>
  );
}