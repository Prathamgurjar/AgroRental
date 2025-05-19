// import React from 'react';
// import mainViideo from "../mainVideo.mp4";

// const Home = () => {
//     return (
//         <div className="bg-green-50 min-h-screen">
//             {/* Navigation */}
//             <nav className="bg-green-700 text-white p-4">
//                 <div className="container mx-auto flex justify-between items-center">
//                     <h1 className="text-2xl font-bold">AgroRental</h1>
//                     <ul className="flex space-x-4">
//                         <li><a href="#home" className="hover:underline">Home</a></li>
//                         <li><a href="#about" className="hover:underline">About</a></li>
//                         <li><a href="#equipment" className="hover:underline">Equipment</a></li>
//                         <li><a href="#contact" className="hover:underline">Contact</a></li>
//                         <li><a href="login" className="hover:underline">Login</a></li>
//                     </ul>
                    
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             {/* <header className="text-center py-20 bg-cover bg-center">
//             <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="agrof/src/assets/180909-865216913.mp4" // Update to the correct relative or public path
//         autoPlay
//         loop
//         muted
//     ></video>
//                 <h1 className="text-4xl font-bold text-green-800">AgroRental</h1>
//                 <p className="text-lg text-green-800 mt-4">Your Equipment, Your Convenience</p>
//                 <button className="mt-6 bg-white text-green-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
//                     Explore Now
//                 </button>
//             </header> */}
//             <header className="relative h-screen text-center">
//     {/* Background Video */}
//     <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src={mainViideo} // Move the video to public/assets folder
//         autoPlay
//         loop
//         muted
//     ></video>

//     {/* Overlay Content */}
//     <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
//         <h1 className="text-4xl font-bold text-white">AgroRental</h1>
//         <p className="text-lg text-white mt-4">Your Equipment, Your Convenience</p>
//         <button className="mt-6 bg-white text-green-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
//             Explore Now
//         </button>
//     </div>
// </header>


//             {/* Equipment Categories */}
//             <section id="equipment" className="py-12 bg-white">
//                 <div className="container mx-auto">
//                     <h2 className="text-2xl font-bold text-center">Available Equipment</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//                         {["Tractors", "Plows", "Harvesters", "Seeders", "Sprayers"].map((item, index) => (
//                             <div key={index} className="p-4 bg-green-100 rounded-lg text-center">
//                                 <h3 className="text-lg font-semibold">{item}</h3>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* How It Works */}
//             <section id="how-it-works" className="py-12 bg-gray-50">
//                 <div className="container mx-auto">
//                     <h2 className="text-2xl font-bold text-center">How It Works</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 text-center">
//                         {["Browse our list", "Select equipment", "Choose rental period", "Confirm booking"].map((step, index) => (
//                             <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
//                                 <p className="text-lg font-semibold">{step}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-green-700 text-white py-6">
//                 <div className="container mx-auto text-center">
//                     <p>Contact us: info@agrof.com | +1 234 567 890</p>
//                     <p className="mt-2">Follow us on social media</p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Home;



import React from "react";
import mainVideo from "../assets/mainVideo.mp4";

const Home = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* <nav className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AgroRental</h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#equipment" className="hover:underline">Equipment</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="/login" className="hover:underline">Sign In / Register</a></li>
          </ul>
        </div>
      </nav> */}

      <header className="relative h-screen text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={mainVideo}
          autoPlay
          loop
          muted
        ></video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold text-white">AgroRental</h1>
          <p className="text-lg text-white mt-4">Your Equipment, Your Convenience</p>
          {/* <button className="mt-6 bg-white text-green-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
            Explore Now
          </button> */}
        </div>
      </header>

     <section id="equipment" className="py-12 bg-white">
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold text-center">Available Equipment</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {[
        { name: "Tractors", image: "/pik/tractor.avif" },
        { name: "Plows", image: "/pik/plow.jpg" },
        { name: "Harvesters", image: "/pik/Harvestor.jpg" },
        { name: "Seeders", image: "/pik/seeder.jpg" },
        { name: "Sprayers", image: "/pik/sprayer.jpg" }
      ].map((item, idx) => (
        <div key={idx} className="p-4 bg-green-100 rounded-lg text-center shadow hover:shadow-lg transition duration-300">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">{item.name}</h3>
        </div>
      ))}
    </div>
  </div>
</section>


      <section id="how-it-works" className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 text-center">
            {["Browse our list", "Select equipment", "Choose rental period", "Confirm booking"].map((step, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg shadow-lg">
                <p className="text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-green-700 text-white py-6">
        <div className="container mx-auto text-center">
          <p>Contact us: info@agrof.com | +1 234 567 890</p>
          <p className="mt-2">Follow us on social media</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
