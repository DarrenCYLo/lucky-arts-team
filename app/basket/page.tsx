import type { Metadata } from "next";
import BasketPageClient from "./BasketPageClient";

export const metadata: Metadata = {
  title: "Enquiry Basket",
  description:
    "Review selected Lucky Arts Team products and services before sending your enquiry request.",
};

export default function BasketPage() {
  return <BasketPageClient />;
}