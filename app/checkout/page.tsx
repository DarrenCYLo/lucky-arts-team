import type { Metadata } from "next";
import CheckoutPageClient from "./CheckoutPageClient";

export const metadata: Metadata = {
  title: "Request Quote",
  description:
    "Send a Lucky Arts Team quote request for performance bookings, costumes and merchandise enquiries.",
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}