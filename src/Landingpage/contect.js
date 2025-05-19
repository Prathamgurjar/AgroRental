import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add form validation and submission logic (e.g., send to Firebase, email API)
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <header className="bg-green-700 text-white py-8">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-8 text-center">
            We would love to hear from you! Whether you have questions, feedback, or want to partner with us, please fill out the form below.
          </p>

          {submitted && (
            <div className="mb-6 text-green-600 font-semibold text-center">
              Thank you for contacting us! We will get back to you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 text-center text-gray-700">
            <p><strong>Address:</strong> 123 Farm Lane, Ruralville, Country</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Email:</strong> support@agrorental.com</p>
          </div>
        </section>
      </main>

      <footer className="bg-green-700 text-white py-6 text-center">
        &copy; {new Date().getFullYear()} AgroRental. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
