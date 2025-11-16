import React, { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductCard({ p, onAdd }) {
  return (
    <div className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all bg-white">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">{p.title}</h3>
          {p.badge && <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700">{p.badge}</span>}
        </div>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{p.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">${p.price.toFixed(2)}</span>
          <button onClick={() => onAdd(p)} className="px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

function ProductGrid({ onAdd }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section id="shop" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse text-gray-500">Loading products...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="shop" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured products</h2>
          <p className="text-sm text-gray-600">Free shipping on orders over $50</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} p={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
