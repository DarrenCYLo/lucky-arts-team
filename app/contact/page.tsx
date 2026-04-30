import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Lucky Arts Team for bookings, collaborations, merchandise enquiries and event questions in North East England.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}