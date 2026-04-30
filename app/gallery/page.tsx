import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View Lucky Arts Team lion dance, qilin dance and dragon dance gallery images and performance visuals.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}