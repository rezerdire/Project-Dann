import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Products from "./Products";
import "./App.css";
import Contact from "./Contact";
import Cart from "./Cart";
import Login  from "./login";
export default function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 70000,
      image:
        "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c",
      vip: true,
    },
    {
      id: 2,
      name: "MacBook Pro 16",
      price: 150000,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 15000,
      image:
        "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Apple Product</h1>

        <div className="flex space-x-3">
          <Link to="/login" className="block hover:text-blue-400">Login</Link>
          <Link to="/cart" className="block hover:text-blue-400">Cart</Link>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-6 space-y-6 hidden md:block">
          <nav className="space-y-4">
            <Link to="/" className="block hover:text-blue-400">Home</Link>
            <Link to="/about" className="block hover:text-blue-400">About</Link>
            <Link to="/products" className="block hover:text-blue-400">Products</Link>
            <Link to="/contact" className="block hover:text-blue-400">Contact</Link>
            <Link to="/cart" className="block hover:text-blue-400">Cart</Link>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6">Featured Apple Products</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className={`relative bg-white rounded-xl shadow-lg p-6 text-center mx-auto max-w-xs
                          transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                            product.vip ? "border-4 border-yellow-400" : ""
                          }`}
                      >
                        {/* VIP Badge */}
                        {product.vip && (
                          <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                            VIP
                          </span>
                        )}

                        {/* Product Image */}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />

                        {/* Product Name */}
                        <h3 className="text-lg font-semibold">{product.name}</h3>

                        {/* Product Price */}
                        <p className="text-gray-700 my-2">₱{product.price.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />

            {/* About Route */}
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products products={products} />} />
            <Route path="/cart" element={<Cart products={products} />} />
          </Routes>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        © 2026 DannMart | info@DannMart.com
      </footer>
    </div>
  );
}
