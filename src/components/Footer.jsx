import React from 'react'

function Footer(){
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-gray-900">Éclat</h4>
          <p className="mt-2 text-sm text-gray-600">Modern beauty, thoughtfully curated and delivered.</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900">Company</h5>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900">Support</h5>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
            <li><a href="#" className="hover:text-gray-900">Returns</a></li>
            <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900">Follow</h5>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-900">TikTok</a></li>
            <li><a href="#" className="hover:text-gray-900">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} Éclat Beauty. All rights reserved.</p>
    </footer>
  )
}

export default Footer
