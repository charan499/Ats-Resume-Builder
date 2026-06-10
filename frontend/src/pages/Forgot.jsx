import { useState } from 'react'

export default function Forgot() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('Enter the email used to create your account and we will send a reset link.')

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(`A reset link has been sent to ${email || 'your email address'}. Please check your inbox.`)
  }

  return (
    <section className="grid flex-1 items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/90">Reset password</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Recover access to your ATS resume dashboard.</h2>
        <p className="mt-4 max-w-xl text-slate-300">A quick recovery flow helps you get back to resume editing, keyword updates, and application tracking without delay.</p>

        <div className="mt-8 rounded-3xl border border-amber-400/20 bg-amber-400/5 p-5 text-sm text-slate-100">
          <p className="font-semibold text-white">What happens next</p>
          <ul className="mt-3 space-y-3">
            <li>• We send a secure reset link to the email on file.</li>
            <li>• You confirm the new password from the email.</li>
            <li>• Your account returns to a secure, ready-to-use state.</li>
          </ul>
        </div>
      </article>

      <article className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/90">Forgot your password?</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Send a reset link</h3>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <label className="block text-sm text-slate-200">
            Email address
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
              placeholder="you@example.com"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:scale-[1.01] hover:shadow-cyan-400/30"
          >
            Send reset link
          </button>
        </form>

        <p className="mt-5 text-sm text-slate-300">{status}</p>
        <p className="mt-6 text-sm text-slate-300">Remembered your password? Return to the login view and sign in instantly.</p>
      </article>
    </section>
  )
}
