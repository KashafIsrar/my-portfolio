import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BriefcaseBusiness, Check, Code2, Copy, Mail, Phone, Send, X } from 'lucide-react';
import { InteractiveContainer, RevealSection } from './Motion';

const email = 'kashaf.israr09@gmail.com';
const phone = '+923353605737';

export default function Contact() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(null), 4200);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  async function copyContact(value, label) {
    if (!navigator.clipboard?.writeText) {
      setToast({ type: 'error', message: 'Clipboard access is unavailable in this browser.' });
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setToast({ type: 'success', message: `${label} copied to clipboard.` });
    } catch {
      setToast({ type: 'error', message: `Could not copy ${label.toLowerCase()}. Check browser permissions.` });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name')).trim();
    const replyTo = String(formData.get('email')).trim();
    const message = String(formData.get('message')).trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${replyTo}`);
    window.location.assign(`mailto:${email}?subject=${subject}&body=${body}`);
    setToast({ type: 'success', message: 'Your email draft is ready in your mail app.' });
    event.currentTarget.reset();
  }

  return (
    <RevealSection id="contact" title="Contact" className="mx-auto max-w-7xl scroll-mt-20 border-t border-white/[0.08] px-5 pb-10 pt-24 sm:px-8">
      <div className="grid gap-12 pb-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#09bbc8]">05 / Contact</p>
          <h2 className="max-w-md text-2xl font-semibold tracking-tight text-white sm:text-3xl">Have a good problem to solve?</h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
            I’m open to internship opportunities and collaborations. Reach out directly or send a note.
          </p>

          <div className="mt-8 space-y-3">
            <InteractiveContainer as="div" title="Email contact" className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.02] p-3">
              <Mail size={16} className="shrink-0 text-[#09bbc8]" />
              <a className="min-w-0 flex-1 truncate text-sm text-slate-300 transition hover:text-[#d9fced]" href={`mailto:${email}`}>
                {email}
              </a>
              <button
                type="button"
                onClick={() => copyContact(email, 'Email')}
                aria-label="Copy email address"
                className="rounded-sm p-2 text-slate-500 transition hover:bg-[#d9fced]/5 hover:text-[#09bbc8]"
              >
                <Copy size={15} />
              </button>
            </InteractiveContainer>
            <InteractiveContainer as="div" title="Phone contact" className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.02] p-3">
              <Phone size={16} className="shrink-0 text-[#405ffa]" />
              <a className="min-w-0 flex-1 text-sm text-slate-300 transition hover:text-[#d9fced]" href={`tel:${phone}`}>
                +92 335 360 5737
              </a>
              <button
                type="button"
                onClick={() => copyContact(phone, 'Phone number')}
                aria-label="Copy phone number"
                className="rounded-sm p-2 text-slate-500 transition hover:bg-[#d9fced]/5 hover:text-[#405ffa]"
              >
                <Copy size={15} />
              </button>
            </InteractiveContainer>
          </div>

          <div className="mt-6 flex gap-4">
            <a href="https://github.com/KashafIsrar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 transition hover:text-[#09bbc8]">
              <Code2 size={15} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/kashaf-israr-7688b7319/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 transition hover:text-[#09bbc8]">
              <BriefcaseBusiness size={15} /> LinkedIn
            </a>
          </div>
        </div>

        <InteractiveContainer as="div" title="Contact form" className="surface-card p-5 sm:p-7">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-400">Send a transmission</p>
          <label className="grid gap-2 text-xs text-slate-400">
            Name
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Your name"
              className="rounded-sm border border-[#d9fced]/10 bg-[#04170b]/60 px-3 py-3 text-sm text-[#d9fced] outline-none transition placeholder:text-slate-700 focus:border-[#09bbc8]/50"
            />
          </label>
          <label className="grid gap-2 text-xs text-slate-400">
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@example.com"
              className="rounded-sm border border-[#d9fced]/10 bg-[#04170b]/60 px-3 py-3 text-sm text-[#d9fced] outline-none transition placeholder:text-slate-700 focus:border-[#09bbc8]/50"
            />
          </label>
          <label className="grid gap-2 text-xs text-slate-400">
            Message
            <textarea
              name="message"
              required
              maxLength={4000}
              rows={4}
              placeholder="What would you like to build?"
              className="resize-y rounded-sm border border-[#d9fced]/10 bg-[#04170b]/60 px-3 py-3 text-sm text-[#d9fced] outline-none transition placeholder:text-slate-700 focus:border-[#09bbc8]/50"
            />
          </label>
          <motion.button
            type="submit"
            whileHover={{ y: -2, borderColor: 'rgba(9,187,200,0.65)' }}
            whileTap={{ scale: 0.98 }}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-sm border border-[#09bbc8]/40 bg-[#09bbc8]/[0.08] px-5 py-3 font-mono text-xs uppercase tracking-wider text-[#d9fced] transition hover:bg-[#09bbc8]/[0.14]"
          >
            Prepare email <Send size={14} />
          </motion.button>
          <p className="text-[11px] leading-5 text-slate-600">
            This opens your default email app with the message filled in; nothing is sent to a server.
          </p>
        </form>
        </InteractiveContainer>
      </div>

      <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-6 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-[11px] text-slate-600">
        © {new Date().getFullYear()} Kashaf Israr <span className="text-[#09bbc8]">·</span> Built with intent.
        </p>
        <a href="#" className="font-mono text-[11px] text-slate-600 transition hover:text-[#09bbc8]">Back to top ↑</a>
      </footer>

      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.message}
            initial={{ opacity: 0, x: 24, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 24, y: 8 }}
            role={toast.type === 'error' ? 'alert' : 'status'}
            aria-live={toast.type === 'error' ? 'assertive' : 'polite'}
            className={`fixed bottom-5 left-1/2 z-[70] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-lg border bg-[#080c12]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-auto sm:right-5 sm:translate-x-0 ${
              toast.type === 'error'
                ? 'border-[#405ffa]/40 text-[#d9fced] shadow-[#405ffa]/10'
                : 'border-[#09bbc8]/25 text-[#d9fced] shadow-[#09bbc8]/10'
            }`}
          >
            {toast.type === 'error' ? <X size={16} /> : <Check size={16} />}
            <span className="flex-1 font-mono text-xs">{toast.message}</span>
            <button type="button" aria-label="Dismiss notification" onClick={() => setToast(null)} className="text-current opacity-60 hover:opacity-100">
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </RevealSection>
  );
}
