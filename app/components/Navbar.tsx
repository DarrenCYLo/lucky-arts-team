"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/performances", label: "Performances" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function isActive(href: string) {
    return pathname === href;
  }

  const mobileLinks = [
    ...links,
    { href: "/basket", label: `Enquiry Basket (${itemCount})` },
  ];

  return (
    <>
      <nav className="hidden items-center gap-6 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition ${
              isActive(link.href)
                ? "text-red-400"
                : "text-white hover:text-red-300"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/basket"
          className={`text-sm font-medium transition ${
            isActive("/basket")
              ? "text-red-400"
              : "text-white hover:text-red-300"
          }`}
        >
          Enquiry Basket ({itemCount})
        </Link>
      </nav>

      <div className="relative md:hidden">
        <button
  type="button"
  aria-label={isOpen ? "Close menu" : "Open menu"}
  aria-expanded={isOpen}
  onClick={() => setIsOpen((current) => !current)}
  className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-red-400/40 hover:bg-white/[0.03]"
>
  <span
    className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
    }`}
  />
  <span
    className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
    }`}
  />
  <span
    className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
    }`}
  />
</button>

        <div
          className={`absolute right-0 top-14 z-50 w-72 max-w-[calc(100vw-1.5rem)] origin-top-right rounded-3xl border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-95 opacity-0"
          }`}
        >
          <div className="mt-1 flex flex-col gap-4">
            {mobileLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
                }}
                className={`block rounded-2xl px-4 py-3.5 text-base font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-2 opacity-0 blur-[2px]"
                } ${
                  isActive(link.href)
                    ? "bg-red-950 text-red-300"
                    : "text-white hover:bg-white/5 hover:text-red-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500"
          />
        )}
      </div>
    </>
  );
}