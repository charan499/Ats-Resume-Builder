import { useState } from 'react'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [status, setStatus] = useState('Create an account to unlock templates and resume analytics.')

  const passwordStrength = form.password.length >= 8 ? 'Strong' : 'Add 8+ characters for a stronger password'

  const handleSubmit = (event) => {
    event.preventDefault()
    if (form.password !== form.confirmPassword) {
      setStatus('Passwords do not match. Please confirm them before continuing.')
      return
    }

    setStatus(`Account ready for ${form.name || 'your new profile'} — your ATS resume workspace is set up.`)
  }

  return (
    <section className="grid flex-1 items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/90">Sign up</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Start your resume journey with a polished first impression.</h2>
        <p className="mt-4 max-w-xl text-slate-300">Create a profile, save resume versions, and track the keywords that matter for every recruiter.</p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-sm text-slate-200">
          <p className="font-semibold text-white">Why teams use this workspace</p>
          <ul className="mt-3 space-y-3">
            <li>• Keep all resumes, notes, and job targets in one dashboard.</li>
            <li>• Compare versions and improve ATS match scores quickly.</li>
            <li>• Share polished resumes with collaborators in a few clicks.</li>
          </ul>
        </div>
      </article>

      <article className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/90">Create account</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Sign up in under a minute</h3>
          </div>
          <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-violet-100">New</span>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <label className="block text-sm text-slate-200">
            Full name
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
              placeholder="Alex Morgan"
              required
            />
          </label>

          <label className="block text-sm text-slate-200">
            Email address
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
              placeholder="alex@example.com"
              required
            />
          </label>

          <label className="block text-sm text-slate-200">
            Password
            <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 transition focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/30">
              <input
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
                className="w-full bg-transparent text-slate-100 outline-none"
                placeholder="Create a secure password"
                required
              />
              <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 hover:text-cyan-100">{showPassword ? 'Hide' : 'Show'}</button>
            </div>
          </label>

          <label className="block text-sm text-slate-200">
            Confirm password
            <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 transition focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/30">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={form.confirmPassword}
                onChange={(event) => setForm((prev) => ({ ...prev, confirmPassword: event.target.value }))}
                className="w-full bg-transparent text-slate-100 outline-none"
                placeholder="Re-enter your password"
                required
              />
              <button type="button" onClick={() => setShowConfirm((prev) => !prev)} className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 hover:text-cyan-100">{showConfirm ? 'Hide' : 'Show'}</button>
            </div>
          </label>

          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-3 text-sm text-slate-200">
            <p className="font-medium text-white">Password strength</p>
            <p className="mt-1 text-slate-300">{passwordStrength}</p>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:scale-[1.01] hover:shadow-cyan-400/30"
          >
            Create account
          </button>
        </form>

        <p className="mt-5 text-sm text-slate-300">{status}</p>
        <p className="mt-6 text-sm text-slate-300">Already have an account? Use the login tab to continue where you left off.</p>
      </article>
    </section>
  )
}
