import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12 grid md:grid-cols-2 gap-8">
        <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-6 shadow-lg">
          <p className="inline-block text-xs tracking-widest uppercase text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-4">New season</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">Beauty, elevated.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Dropshipped to your door</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg">Discover minimalist fragrances and makeup essentials curated for timeless looks. Fast shipping, easy returns, and 100% authenticity guaranteed.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#shop" className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors">Shop now</a>
            <a href="#why-us" className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold transition-colors bg-white">Why choose us</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/64?img=${i+20}`} alt="avatar" />
              ))}
            </div>
            <span>Trusted by 2k+ beauty lovers</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Hero
