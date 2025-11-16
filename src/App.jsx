import React, { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductGrid from './components/ProductGrid'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (p) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === p.id)
      if (exists) {
        return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...p, qty: 1 }]
    })
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold text-xl">Éclat</a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#shop" className="hover:text-gray-900 text-gray-600">Shop</a>
            <a href="#why-us" className="hover:text-gray-900 text-gray-600">Why us</a>
            <a href="/test" className="hover:text-gray-900 text-gray-600">System check</a>
            <div className="px-3 py-1.5 rounded-full bg-gray-900 text-white text-xs">Cart {cart.length > 0 && <span className="ml-1">(${total.toFixed(2)})</span>}</div>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <ProductGrid onAdd={addToCart} />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}

export default App
