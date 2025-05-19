import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <header className="bg-green-700 text-white py-8">
        <h1 className="text-4xl font-bold text-center">About AgroRental</h1>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-green-800">Our Mission</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At AgroRental, our mission is to empower farmers by providing easy access to high-quality agricultural equipment on rent. 
            We believe in helping small and medium-scale farmers boost their productivity without the heavy upfront cost of buying machinery.
          </p>

          <h2 className="text-3xl font-semibold mb-4 text-green-800">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>A wide range of equipment including tractors, plows, harvesters, seeders, and sprayers.</li>
            <li>Flexible rental periods tailored to your farming needs.</li>
            <li>Trusted vendors with verified equipment to ensure quality and reliability.</li>
            <li>User-friendly platform for browsing, booking, and managing rentals.</li>
          </ul>

          <h2 className="text-3xl font-semibold mb-4 text-green-800">Why Choose Us?</h2>
          <p className="text-gray-700 leading-relaxed">
            We combine technology and local expertise to make renting agricultural equipment simple, affordable, and accessible. 
            Our platform connects farmers directly to vendors, cutting unnecessary middlemen and reducing costs.
          </p>
        </section>
      </main>

      <footer className="bg-green-700 text-white py-6 text-center">
        &copy; {new Date().getFullYear()} AgroRental. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
