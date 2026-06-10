import { useState } from 'react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const [status, setStatus] = useState('Use any email to preview the flow.')

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(`Welcome back, ${form.email || 'candidate'}! Your dashboard is ready to use.`)
  }

  return (
    <section className="grid flex-1 items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/90">Login</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Sign in to continue building resumes that beat the ATS.</h2>
        <p className="mt-4 max-w-xl text-slate-300">Track resume versions, tailor keywords, and keep every job application in one place.</p>

        <div className="mt-8 space-y-4 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-sm text-slate-100">
          {[
            'Resume score insights in one click',
            'Tailored keywords for each job description',
            'Fast template switching for every role',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_0_4px_rgba(103,232,249,0.12)]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/90">Welcome back</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Login to your workspace</h3>
          </div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-100">Secure</span>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <label className="block text-sm text-slate-200">
            Email address
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
              placeholder="you@example.com"
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
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 hover:text-cyan-100"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </label>

          <div className="flex items-center justify-between gap-3 text-sm text-slate-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-slate-950 text-cyan-400 focus:ring-cyan-400" />
              Remember me
            </label>
            <button type="button" className="text-cyan-200 hover:text-cyan-100">Forgot password?</button>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:scale-[1.01] hover:shadow-cyan-400/30"
          >
            Sign in
          </button>
        </form>

        <p className="mt-5 text-sm text-slate-300">{status}</p>
        <p className="mt-6 text-sm text-slate-300">Need a fresh account? Use the “Sign up” tab to create one in seconds.</p>
      </article>
    </section>
  )
}
