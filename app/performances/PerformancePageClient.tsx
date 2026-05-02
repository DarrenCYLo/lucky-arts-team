"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const performanceImages = [
  {
    title: "Lion Dance",
    description:
      "Powerful lion dance performances for celebrations, openings, weddings and community events.",
    src: "/images/performances/lion-dance.png",
    titleColor: "text-red-400",
  },
  {
    title: "Qilin Dance",
    description:
      "Elegant qilin dance performances that symbolise luck, prosperity and cultural tradition.",
    src: "/images/performances/qilin-dance.png",
    titleColor: "text-yellow-400",
  },
  {
    title: "Dragon Dance",
    description:
      "High-energy dragon dance performances for festivals, public shows and large events.",
    src: "/images/performances/dragon-dance.png",
    titleColor: "text-blue-400",
  },
];

export default function PerformancePageClient() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null ? performanceImages[selectedIndex] : null;

  function openLightbox(index: number) {
    setSelectedIndex(index);
  }

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function showPrevious() {
    if (selectedIndex === null) return;

    const previousIndex =
      selectedIndex === 0
        ? performanceImages.length - 1
        : selectedIndex - 1;

    setSelectedIndex(previousIndex);
  }

  function showNext() {
    if (selectedIndex === null) return;

    const nextIndex =
      selectedIndex === performanceImages.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedIndex(nextIndex);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
          Lucky Arts Team
        </p>

        <h1 className="text-5xl font-bold">Performances</h1>

        <p className="mt-4 max-w-3xl text-gray-300">
          Lucky Arts Team provides traditional Chinese performances for
          weddings, grand openings, business events, festivals, parties and
          cultural celebrations.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {performanceImages.map((image, index) => (
            <button
              key={image.title}
              type="button"
              onClick={() => openLightbox(index)}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition hover:border-white/30 hover:bg-white/10"
            >
              <div className="relative h-72 w-full sm:h-80">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h2 className={`text-2xl font-semibold ${image.titleColor}`}>
                  {image.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {image.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-white">
                  Click to enlarge
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-3 py-4 sm:px-4 sm:py-6"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-5xl rounded-2xl border border-white/10 bg-black p-3 sm:p-5 md:p-6"
          >
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  {selectedImage.title}
                </h2>
                <p className="mt-2 max-w-3xl text-xs leading-5 text-gray-300 sm:text-sm sm:leading-6">
                  {selectedImage.description}
                </p>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-black sm:px-4 sm:text-sm"
              >
                Close
              </button>
            </div>

            <div className="relative">
              <div className="relative mx-auto h-[38vh] w-full sm:h-[52vh] md:h-[65vh] lg:h-[70vh]">
                <div className="group relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    sizes="100vw"
                    className="object-contain transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/75 text-sm font-bold text-white transition hover:bg-white hover:text-black sm:left-3 sm:h-12 sm:w-12 sm:text-base"
                  aria-label="Previous image"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/75 text-sm font-bold text-white transition hover:bg-white hover:text-black sm:right-3 sm:h-12 sm:w-12 sm:text-base"
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
            </div>

            <div className="mt-4 sm:mt-5">
              <p className="mb-3 text-xs font-semibold text-gray-300 sm:text-sm">
                Jump to image
              </p>

              <div className="flex gap-2 overflow-x-auto pb-2 sm:gap-3">
                {performanceImages.map((image, index) => (
                  <button
                    key={image.title}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Open ${image.title}`}
                    className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-xl border transition sm:h-20 sm:w-24 ${
                      selectedIndex === index
                        ? "border-red-500 ring-2 ring-red-500/40"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={showPrevious}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black sm:px-5 sm:py-3"
              >
                ← Previous
              </button>

              <button
                type="button"
                onClick={showNext}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black sm:px-5 sm:py-3"
              >
                Next →
              </button>
            </div>

            <p className="mt-4 text-[11px] leading-5 text-gray-400 sm:text-xs">
              Tip: use your keyboard — Left Arrow, Right Arrow and Escape.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}