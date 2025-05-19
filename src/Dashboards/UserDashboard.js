// // UserDashboard.js
// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebaseConfig";
// import { useNavigate } from "react-router-dom";

// const UserDashboard = () => {
//   const [equipmentList, setEquipmentList] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEquipment = async () => {
//       const querySnapshot = await getDocs(collection(db, "equipment"));
//       const data = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setEquipmentList(data);
//     };
//     fetchEquipment();
//   }, []);

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Available Equipment</h1>
//       <ul className="space-y-4">
//         {equipmentList.map((item) => (
//           <li
//             key={item.id}
//             className="border p-4 rounded shadow flex justify-between items-center"
//           >
//             <div>
//               <p><strong>Model:</strong> {item.model}</p>
//               <p><strong>Type:</strong> {item.type}</p>
//               <p><strong>Location:</strong> {item.location}</p>
//             </div>
//             <button
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//               onClick={() => navigate(`/rent/${item.id}/${item.vendorId}`)}
//             >
//               Rent
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserDashboard;




// import React, { useEffect, useState } from "react";
// import { auth } from "../firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const dummyEquipment = [
//   { name: "Tractor", image: "/pik/tractor.jpg" },
//   { name: "Plow", image: "/pik/plow.jpg" },
//   { name: "Harvester", image: "/pik/harvester.jpg" },
//   { name: "Seeder", image: "/pik/seeder.jpg" },
//   { name: "Sprayer", image: "/pik/sprayer.jpg" },
// ];

// const UserDashboard = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
//       if (loggedInUser) {
//         setUser(loggedInUser);
//       } else {
//         navigate("/login");
//       }
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   const handleRent = (equipmentName) => {
//     navigate(`/rent/${equipmentName}`);
//   };

//   return (
//     <div className="min-h-screen bg-green-50 px-4 py-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//           <h1 className="text-3xl font-bold text-green-700 mb-2">Welcome to AgroRental</h1>
//           <p className="text-gray-600">
//             Hello <span className="font-semibold">{user?.email}</span>, browse available equipment and submit rental requests below.
//           </p>
//         </div>

//         <h2 className="text-2xl font-semibold text-green-800 mb-4">Available Equipment</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {dummyEquipment.map((item, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
//               <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold text-green-700">{item.name}</h3>
//                 <button
//                   onClick={() => handleRent(item.name)}
//                   className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//                 >
//                   Rent Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;




import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVendorEquipment = async () => {
      try {
        // Assuming equipment are stored in "equipment" collection
        // and each document has a "vendorId" field (non-empty)
        const q = query(collection(db, "equipment"), where("vendorId", "!=", ""));
        const querySnapshot = await getDocs(q);

        const equipment = [];
        querySnapshot.forEach((doc) => {
          equipment.push({ id: doc.id, ...doc.data() });
        });

        setEquipmentList(equipment);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching equipment:", error);
        setLoading(false);
      }
    };

    fetchVendorEquipment();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-700 text-lg">Loading equipment...</p>
      </div>
    );
  }

  if (equipmentList.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-700 text-lg">No equipment available for rent currently.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Available Equipment for Rent</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {equipmentList.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
            <img
              src={item.imageURL || "/pik/default-equipment.jpg"} // fallback image path in public/pik
              alt={item.name || "Equipment"}
              className="h-48 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name || "Unnamed Equipment"}</h3>
            <p className="text-gray-700 mb-4">{item.description || "No description provided."}</p>
            <button
              onClick={() => navigate(`/rent/${item.id}/${item.vendorId}`)}
              className="mt-auto bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Rent
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
