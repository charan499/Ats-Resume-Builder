
import { useState } from 'react'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Forgot from './pages/Forgot.jsx'

function App() {
  const [activePage, setActivePage] = useState('login')

  const pageMap = {
    login: <Login />,
    signup: <SignUp />,
    forgot: <Forgot />,
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#111827_0%,_#020617_45%,_#020617_100%)] text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur-lg sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/90">ATS Resume Builder</p>
              <h1 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">Build, review, and ship standout resumes</h1>
            </div>

            <nav className="flex flex-wrap gap-2">
              {[
                ['login', 'Login'],
                ['signup', 'Sign up'],
                ['forgot', 'Forgot password'],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActivePage(key)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    activePage === key
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-100 shadow-lg shadow-cyan-400/10'
                      : 'border-white/10 bg-slate-900/90 text-slate-200 hover:border-cyan-400/70 hover:bg-slate-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <div className="flex-1 py-6">{pageMap[activePage]}</div>
      </section>
    </main>
  )
}

export default App
