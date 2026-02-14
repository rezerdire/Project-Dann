export default function About() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        About DannMart
      </h2>

      <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            DannMart is a premium online store focused on delivering Apple 
            products and accessories to tech enthusiasts across the Philippines.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To make quality Apple products accessible, reliable, and easy to 
            purchase online.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Founder
          </h2>

          <div
            className="bg-white p-4 rounded-lg shadow-md max-w-md"
          >
            <p><strong>Name:</strong> Dann Mercado</p>
            <p><strong>Email:</strong> dann@gmail.com</p>
            <p><strong>Contact:</strong> 09123456789</p>
          </div>
        </div>

      </div>
    </div>
  );
}
