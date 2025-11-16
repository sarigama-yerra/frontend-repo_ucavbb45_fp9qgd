import React, { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${baseUrl}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      setStatus(data.status)
      setEmail('')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Join our beauty circle</h3>
        <p className="mt-2 text-gray-600">Get early access to new drops, limited runs, and exclusive offers.</p>
        <form onSubmit={submit} className="mt-6 flex gap-2 max-w-xl mx-auto">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold">Subscribe</button>
        </form>
        {status && (
          <p className="mt-3 text-sm text-gray-700">
            {status === 'loading' && 'Subscribing...'}
            {status === 'subscribed' && 'You are in! Check your inbox.'}
            {status === 'already_subscribed' && 'You are already subscribed.'}
            {status === 'error' && 'Something went wrong. Please try again.'}
          </p>
        )}
      </div>
    </section>
  )
}

export default Newsletter
