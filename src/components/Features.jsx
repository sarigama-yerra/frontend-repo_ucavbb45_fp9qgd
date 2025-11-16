import React from 'react'
import { Sparkles, Recycle, Truck, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Curated quality',
    desc: 'Minimalist, premium formulas chosen by experts for daily wear.'
  },
  {
    icon: Truck,
    title: 'Fast shipping',
    desc: 'Dropshipped directly from our partners. Track every step.'
  },
  {
    icon: ShieldCheck,
    title: 'Authenticity guaranteed',
    desc: 'Original products only with hassle-free returns.'
  },
  {
    icon: Recycle,
    title: 'Eco-conscious',
    desc: 'Thoughtful packaging and responsible sourcing.'
  }
]

function Features() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Why beauty lovers choose us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <f.icon className="w-8 h-8 text-purple-600" />
              <h3 className="mt-3 font-semibold text-lg text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
