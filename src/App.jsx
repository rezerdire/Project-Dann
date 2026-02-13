import { useState } from "react";
import "./App.css";

export default function App() {
  const [cartCount, setCartCount] = useState(1);

  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 70000,
      image:
        "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Apple Product Catalog</h1>
        <div className="space-x-4">
          <button className="hover:underline">Login</button>
          <button className="hover:underline">
            Cart ({cartCount})
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-6 space-y-6 hidden md:block">
          <nav className="space-y-4">
            <p className="hover:text-blue-400 cursor-pointer">Home</p>
            <p className="hover:text-blue-400 cursor-pointer">About</p>
            <p className="hover:text-blue-400 cursor-pointer">Products</p>
            <p className="hover:text-blue-400 cursor-pointer">
              Contact
            </p>
            <p className="hover:text-blue-400 cursor-pointer">
              Cart ({cartCount})
            </p>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-semibold mb-6">
            All Apple Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`relative bg-white rounded-xl shadow-lg p-6 text-center transition hover:shadow-2xl ${
                  product.vip
                    ? "border-4 border-yellow-400"
                    : ""
                }`}
              >
                {product.vip && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                    VIP
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />

                <h3 className="text-lg font-semibold">
                  {product.name}
                </h3>

                <p className="text-gray-700 my-2">
                  ₱{product.price.toLocaleString()}
                </p>

                <button
                  onClick={addToCart}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        © 2026 DannMart | info@DannMart.com
      </footer>
    </div>
  );
}
