export default function Products({ products, addToCart }) {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Apple Product Catalog
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative bg-white rounded-xl shadow-lg p-6 text-center mx-auto max-w-xs
          transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              product.vip ? "border-4 border-yellow-400" : ""
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

            <h3 className="text-lg font-semibold">{product.name}</h3>

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
    </div>
  );
}
