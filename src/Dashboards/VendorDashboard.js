// import React, { useState } from "react";

// const VendorDashboard = () => {
//   const [equipment, setEquipment] = useState([
//     { id: 1, name: "Tractor" },
//     { id: 2, name: "Plow" },
//   ]);

//   const addEquipment = () => {
//     const newEquipment = { id: Date.now(), name: `New Equipment ${Date.now()}` };
//     setEquipment([...equipment, newEquipment]);
//   };

//   const removeEquipment = (id) => {
//     setEquipment(equipment.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-blue-50">
//       <header className="bg-blue-700 text-white p-4">
//         <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
//       </header>
//       <main className="p-4">
//         <h2 className="text-xl font-bold mb-4">Manage Equipment</h2>
//         <button
//           onClick={addEquipment}
//           className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-md"
//         >
//           Add Equipment
//         </button>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {equipment.map((item) => (
//             <div key={item.id} className="bg-white p-4 shadow rounded-lg">
//               <h3 className="text-lg font-bold">{item.name}</h3>
//               <button
//                 onClick={() => removeEquipment(item.id)}
//                 className="mt-2 bg-red-600 text-white px-4 py-2 rounded-md"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default VendorDashboard;


// import React, { useState, useEffect } from "react";
// import AddEquipmentForm from "../Landingpage/AddEquipmentForm"; // Import the form
// import { db, auth } from "../firebaseConfig";
// import { collection, query, where, getDocs } from "firebase/firestore"
// import { deleteDoc, doc } from "firebase/firestore";

// const VendorDashboard = () => {
//   const [equipmentList, setEquipmentList] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   // Fetch vendor's equipment
//   const fetchEquipment = async () => {
//     try {
//       const q = query(
//         collection(db, "equipment"),
//         where("vendorId", "==", auth.currentUser.uid)
//       );
//       const snapshot = await getDocs(q);
//       const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setEquipmentList(data);
//     } catch (error) {
//       console.error("Failed to fetch equipment:", error);
//     }
//   }

//   const deleteEquipment = async (id) => {
//   const confirm = window.confirm("Are you sure you want to delete this equipment?");
//   if (!confirm) return;

//   try {
//     await deleteDoc(doc(db, "equipment", id));
//     setEquipmentList(equipmentList.filter(item => item.id !== id));
//     alert("Equipment deleted successfully.");
//   } catch (error) {
//     console.error("Error deleting equipment:", error);
//     alert("Failed to delete equipment.");
//   }
// };


//   useEffect(() => {
//     fetchEquipment();
//   }, []);

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Vendor Dashboard</h1>

//       <button
//         onClick={() => setShowForm(true)}
//         className="mb-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//       >
//         Add Equipment
//       </button>

//       {showForm && (
//         <AddEquipmentForm
//           onClose={() => {
//             setShowForm(false);
//             fetchEquipment(); // Refresh list after adding
//           }}
//         />
//       )}

//       <h2 className="text-xl font-semibold mb-4">Your Equipment List:</h2>
//       {equipmentList.length === 0 ? (
//         <p>No equipment added yet.</p>
//       ) : (
//        <ul>
//   {equipmentList.map((item) => (
//     <li key={item.id} className="mb-2 p-3 border rounded shadow-sm flex justify-between items-center">
//       <div>
//         <strong>{item.model}</strong> – {item.type} @ {item.location}
//       </div>
//       <button
//         onClick={() => deleteEquipment(item.id)}
//         className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//       >
//         Delete
//       </button>
//     </li>
//   ))}
// </ul>

//       )}
//     </div>
//   );
// };

// export default VendorDashboard;


import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const VendorDashboard = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEquipment, setNewEquipment] = useState({ name: "", description: "", imageURL: "" });
  const vendorId = auth.currentUser?.uid;

  useEffect(() => {
    if (!vendorId) return;

    const fetchVendorEquipment = async () => {
      try {
        const q = query(collection(db, "equipment"), where("vendorId", "==", vendorId));
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
  }, [vendorId]);

  const handleAddEquipment = async (e) => {
    e.preventDefault();

    if (!newEquipment.name || !newEquipment.description) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await addDoc(collection(db, "equipment"), {
        ...newEquipment,
        vendorId,
      });

      alert("Equipment added successfully!");
      setNewEquipment({ name: "", description: "", imageURL: "" });
      setShowAddForm(false);
      // Refresh list
      setLoading(true);
      const q = query(collection(db, "equipment"), where("vendorId", "==", vendorId));
      const querySnapshot = await getDocs(q);
      const equipment = [];
      querySnapshot.forEach((doc) => equipment.push({ id: doc.id, ...doc.data() }));
      setEquipmentList(equipment);
      setLoading(false);
    } catch (error) {
      console.error("Error adding equipment:", error);
      alert("Failed to add equipment.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this equipment?")) return;
    try {
      await deleteDoc(doc(db, "equipment", id));
      setEquipmentList((prev) => prev.filter((eq) => eq.id !== id));
      alert("Deleted successfully.");
    } catch (error) {
      console.error("Error deleting equipment:", error);
      alert("Failed to delete equipment.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-700 text-lg">Loading your equipment...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 md:px-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">Your Equipment</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          + Add Equipment
        </button>
      </div>

      {equipmentList.length === 0 && (
        <p className="text-center text-gray-700">You have not added any equipment yet.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {equipmentList.map(({ id, name, description, imageURL }) => (
          <div key={id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
            <img
              src={imageURL || "/pik/default-equipment.jpg"}
              alt={name}
              className="h-48 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-700 mb-4 flex-grow">{description}</p>
            <button
              onClick={() => handleDelete(id)}
              className="mt-auto bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Add Equipment Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Equipment</h2>
            <form onSubmit={handleAddEquipment} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={newEquipment.name}
                onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <textarea
                placeholder="Description"
                value={newEquipment.description}
                onChange={(e) => setNewEquipment({ ...newEquipment, description: e.target.value })}
                className="w-full border px-3 py-2 rounded"
                rows="3"
                required
              />
              <input
                type="text"
                placeholder="Image URL (optional)"
                value={newEquipment.imageURL}
                onChange={(e) => setNewEquipment({ ...newEquipment, imageURL: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorDashboard;
