"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { useCart, type CartItem } from "../context/CartContext";

function formatPrice(value: number) {
  return value.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
}

function parsePrice(price: string) {
  return Number(price.replace(/[^\d.]/g, ""));
}

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  eventType: string;
  eventLocation: string;
  startTime: string;
  notes: string;
};

type SubmittedOrder = {
  formData: FormData;
  items: CartItem[];
  itemCount: number;
  totalPrice: number;
};

export default function CheckoutPageClient() {
  const { items, itemCount, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    eventType: "",
    eventLocation: "",
    startTime: "",
    notes: "",
  });

  const [submittedOrder, setSubmittedOrder] = useState<SubmittedOrder | null>(
    null
  );
  const [pendingOrder, setPendingOrder] = useState<SubmittedOrder | null>(null);

  const [state, handleFormspreeSubmit] = useForm("mnjlevlz");

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { id, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [id]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const snapshot: SubmittedOrder = {
      formData: { ...formData },
      items: items.map((item) => ({ ...item })),
      itemCount,
      totalPrice,
    };

    setPendingOrder(snapshot);

    await handleFormspreeSubmit(event);
  }

  useEffect(() => {
    if (state.succeeded && pendingOrder) {
      setSubmittedOrder(pendingOrder);
      clearCart();

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredDate: "",
        eventType: "",
        eventLocation: "",
        startTime: "",
        notes: "",
      });

      setPendingOrder(null);
    }
  }, [state.succeeded, pendingOrder, clearCart]);

  const orderSummaryForEmail = items
    .map((item) => {
      const subtotal = parsePrice(item.price) * item.quantity;

      return `${item.name}
Quantity: ${item.quantity}
Price: ${item.price}
Subtotal: ${formatPrice(subtotal)}`;
    })
    .join("\n\n");

  const orderTotalsForEmail = `Total Items: ${itemCount}
Total Price: ${formatPrice(totalPrice)}`;

  if (submittedOrder) {
    return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            Lucky Arts Team
          </p>

          <h1 className="text-4xl font-bold">Enquiry Submitted</h1>

          <p className="mt-4 text-gray-300">
            Thank you. Your basket enquiry has been submitted.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h2 className="text-2xl font-semibold">Customer Details</h2>

              <div className="mt-4 space-y-3 text-gray-300">
                <p>
                  <span className="font-semibold text-white">Full Name:</span>{" "}
                  {submittedOrder.formData.fullName}
                </p>
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  {submittedOrder.formData.email}
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  {submittedOrder.formData.phone || "Not provided"}
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Preferred Date:
                  </span>{" "}
                  {submittedOrder.formData.preferredDate || "Not provided"}
                </p>
                <p>
                  <span className="font-semibold text-white">Event Type:</span>{" "}
                  {submittedOrder.formData.eventType || "Not provided"}
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Event Location:
                  </span>{" "}
                  {submittedOrder.formData.eventLocation || "Not provided"}
                </p>
                <p>
                  <span className="font-semibold text-white">Start Time:</span>{" "}
                  {submittedOrder.formData.startTime || "Not provided"}
                </p>
                <p>
                  <span className="font-semibold text-white">Notes:</span>{" "}
                  {submittedOrder.formData.notes || "No extra notes"}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <h2 className="text-2xl font-semibold">Enquiry Summary</h2>

              <div className="mt-4 space-y-4">
                {submittedOrder.items.map((item) => {
                  const subtotal = parsePrice(item.price) * item.quantity;

                  return (
                    <div
                      key={item.slug}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="font-semibold">{item.name}</p>
                      <p className="mt-1 text-sm text-gray-300">
                        Quantity: {item.quantity}
                      </p>
                      <p className="mt-1 text-sm text-gray-300">
                        Price: {item.price}
                      </p>
                      <p className="mt-1 text-sm text-yellow-400">
                        Subtotal: {formatPrice(subtotal)}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-gray-300">
                  <span>Total Items</span>
                  <span>{submittedOrder.itemCount}</span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xl font-bold text-yellow-400">
                  <span>Total Price</span>
                  <span>{formatPrice(submittedOrder.totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-500"
            >
              Back to Shop
            </Link>

            <Link
              href="/"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white hover:text-black"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            Lucky Arts Team Store
          </p>

          <h1 className="text-4xl font-bold">Request Quote</h1>

          <p className="mt-4 text-gray-300">
            Your enquiry basket is empty. Add some products before continuing.
          </p>

          <Link
            href="/shop"
            className="mt-6 inline-block rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-500"
          >
            Go to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
          Lucky Arts Team Store
        </p>

        <h1 className="text-5xl font-bold">Request Quote</h1>

        <p className="mt-4 max-w-2xl text-gray-300">
          Review your enquiry basket and send your quote request.
        </p>

        <div className="mt-4 max-w-3xl rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-200">
          This website currently accepts booking and product enquiries only. No
          online payment is taken at this stage.
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Your Details</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="hidden"
                name="_subject"
                value={`New Lucky Arts Team enquiry from ${
                  formData.fullName || "Website Visitor"
                }`}
              />

              <input
                type="hidden"
                name="Enquiry Summary"
                value={orderSummaryForEmail}
              />

              <input
                type="hidden"
                name="Order Totals"
                value={orderTotalsForEmail}
              />

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="Customer Name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                  placeholder="Enter your email address"
                />
                <ValidationError
                  prefix="Email"
                  field="Email Address"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="Preferred Date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="Event Type"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                >
                  <option value="">Select an event type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Grand Opening">Grand Opening</option>
                  <option value="Festival">Festival</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Private Party">Private Party</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Event Location
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  name="Event Location"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                  placeholder="Enter the venue or location"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Start Time
                </label>
                <input
                  type="time"
                  id="startTime"
                  name="Start Time"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Event / Order Notes
                </label>
                <textarea
                  id="notes"
                  name="Notes"
                  rows={5}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                  placeholder="Add any extra notes about your event or order"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-500 disabled:opacity-60"
              >
                {state.submitting ? "Sending..." : "Submit Enquiry"}
              </button>

              <ValidationError
                errors={state.errors}
                className="mt-2 text-sm text-red-400"
              />
            </form>
          </div>

          <div className="h-fit rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Enquiry Summary</h2>

            <div className="mt-6 space-y-4">
              {items.map((item) => {
                const subtotal = parsePrice(item.price) * item.quantity;

                return (
                  <div
                    key={item.slug}
                    className="rounded-xl border border-white/10 bg-black/30 p-4"
                  >
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-gray-300">
                      Quantity: {item.quantity}
                    </p>
                    <p className="mt-1 text-sm text-gray-300">
                      Price: {item.price}
                    </p>
                    <p className="mt-1 text-sm text-yellow-400">
                      Subtotal: {formatPrice(subtotal)}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between text-gray-300">
                <span>Total Items</span>
                <span>{itemCount}</span>
              </div>

              <div className="mt-3 flex items-center justify-between text-xl font-bold text-yellow-400">
                <span>Total Price</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}