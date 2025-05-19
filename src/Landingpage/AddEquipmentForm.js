import React, { useState } from "react";
import { db, auth } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AddEquipmentForm = ({ onClose }) => {
  const [equipment, setEquipment] = useState({
    model: "",
    ownerName: "",
    location: "",
    type: "",
    description: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEquipment((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "equipment"), {
        ...equipment,
        vendorId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });

      alert("Equipment added successfully!");
      onClose(); // Close modal or form
    } catch (error) {
      console.error("Error adding equipment:", error);
      alert("Failed to add equipment. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Equipment</h2>
        <form onSubmit={handleSubmit}>
          {["model", "ownerName", "location", "type", "description"].map((field) => (
            <div key={field} className="mb-3">
              <label className="block text-sm font-medium capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={equipment[field]}
                onChange={handleChange}
                required
                className="mt-1 w-full border px-3 py-2 rounded"
              />
            </div>
          ))}

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="available"
                checked={equipment.available}
                onChange={handleChange}
                className="mr-2"
              />
              Available for Rent
            </label>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipmentForm;
