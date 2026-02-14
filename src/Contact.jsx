export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Contact Us
      </h2>

      <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
        <p className="text-3xl font-bold mb-6 text-gray-800">
            Send us a Message
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="youremail@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>

        <div className="flex justify-end">
          <button type="submit"className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition">
            Send Message
          </button>
        </div>    
        </form>

      </div>
    </div>
  );
}
