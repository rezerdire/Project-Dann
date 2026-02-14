export default function Cart() {
  // Sample cart items for UI only
  const cartItems = [
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
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Shopping Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-700">
                ₱{item.price.toLocaleString()} x {item.quantity}
              </p>
              <p className="text-gray-900 font-semibold">
                Total: ₱{(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">
              Remove
            </button>
          </div>
        ))}

        {/* Total Summary */}
        <div className="mt-6 flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl font-semibold">Total Price: ₱228500</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
