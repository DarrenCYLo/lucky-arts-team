import type { Metadata } from "next";
import PerformancePageClient from "./PerformancePageClient";

export const metadata: Metadata = {
  title: "Performances",
  description:
    "Explore Lucky Arts Team lion dance, qilin dance and dragon dance performances for weddings, festivals, grand openings and cultural events.",
};

export default function PerformancesPage() {
  return <PerformancePageClient />;
}