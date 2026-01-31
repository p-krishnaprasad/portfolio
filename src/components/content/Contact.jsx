import { useState } from "react";
import SectionWrapper from "../layout/SectionWrapper";

export default function Contact() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const encode = (data) => new URLSearchParams(data).toString();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      "form-name": "contact",
      name,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode(data),
      });
    } catch (err) {
      // ignore network response
    }

    setSubmitted(true);
  };

  const handleAnother = () => {
    setSubmitted(false);
  };
  return (
    <SectionWrapper id="contact" title="Get in Touch">
      {submitted ? (
        <div className="text-center py-10">
          <h3 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
            Thanks{name ? `, ${name}` : ""} 👋
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            Your message has been successfully sent and is now in my inbox.
          </p>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
            I usually respond within 24 hours.
          </p>

          <button
            type="button"
            onClick={handleAnother}
            className="mt-6 border border-black px-4 py-2 rounded-md text-black hover:bg-indigo-600 hover hover:text-white hover:dark:bg-slate-100 hover:dark:text-black dark:bg-slate-400 transition"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="mt-5 space-y-6 dark:bg-slate-800/50 p-8 rounded-2xl border-2 dark:border-0 border-black"
          >
            {/* Required by Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div>
              <label className="block text-sm font-medium dark:text-slate-400">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-slate-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-slate-400">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell me a bit about your idea or role"
                className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </SectionWrapper>
  );
}
