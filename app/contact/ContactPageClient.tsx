"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactPageClient() {
  const [state, handleSubmit] = useForm("mwvykoqk");

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            Lucky Arts Team
          </p>

          <h1 className="text-4xl font-bold">Enquiry Sent</h1>

          <p className="mt-4 text-gray-300">
            Thank you. Your contact enquiry has been sent successfully. We will
            get back to you as soon as possible.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
          Lucky Arts Team
        </p>

        <h1 className="text-5xl font-bold">Contact Us</h1>

        <p className="mt-4 max-w-2xl text-gray-300">
          Contact Lucky Arts Team for bookings, collaborations, merchandise
          enquiries and event questions.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Contact Details</h2>

            <div className="mt-6 space-y-4 text-gray-300">
              <p>
                <span className="font-semibold text-white">Business Email:</span>{" "}
                luckyartsteam@gmail.com
              </p>

              <p>
                <span className="font-semibold text-white">Service Area:</span>{" "}
                North East England
              </p>

              <div>
                <p className="font-semibold text-white">Social Links:</p>

                <div className="mt-2 flex flex-wrap gap-3 text-sm">
                  <a
                    href="https://www.facebook.com/LuckyArtsTeam/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-400 hover:text-red-300"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/luckyartsteam/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-400 hover:text-red-300"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@luckyartsteam"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-400 hover:text-red-300"
                  >
                    TikTok
                  </a>
                  <a
                    href="https://www.youtube.com/@luckyartsteam"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-400 hover:text-red-300"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://x.com/luckyartsteam"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-400 hover:text-red-300"
                  >
                    X
                  </a>
                  <a
                    href="https://www.threads.com/@luckyartsteam"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-400 hover:text-red-300"
                  >
                    Threads
                  </a>
                  <a
                    href="https://www.linkedin.com/in/luckyartsteam/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-400 hover:text-red-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Contact Enquiry Form</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="hidden"
                name="_subject"
                value="New Lucky Arts Team contact enquiry"
              />

              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="Full Name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                  placeholder="Enter your email address"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-400"
                />
              </div>

              <div>
                <label
                  htmlFor="eventType"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="Event Type"
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                >
                  <option value="" disabled>
                    Select an event type
                  </option>
                  <option value="Wedding">Wedding</option>
                  <option value="Grand Opening">Grand Opening</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Festival">Festival</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="preferredDate"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Preferred Date
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  name="Preferred Date"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                  placeholder="Tell us about your event or enquiry"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-400"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500 disabled:opacity-60"
              >
                {state.submitting ? "Sending..." : "Send Enquiry"}
              </button>

              <ValidationError
                errors={state.errors}
                className="mt-2 text-sm text-red-400"
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}