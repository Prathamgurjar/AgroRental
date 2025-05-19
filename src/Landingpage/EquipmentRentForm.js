// EquipmentRentForm.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";

const EquipmentRentForm = () => {
  const { equipmentId, vendorId } = useParams();
  const [userData, setUserData] = useState({ name: "", contact: "", email: "" });
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);

  const userId = auth.currentUser?.uid;

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;
      try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const { name, contact, email } = docSnap.data();
          setUserData({ name, contact, email });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!time || !date) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "requests"), {
        ...userData,
        userId,
        vendorId,
        equipmentId,
        time,
        date,
        status: "pending",
        createdAt: serverTimestamp()
      });
      alert("Rental request sent successfully!");
      setTime("");
      setDate("");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Error submitting request.");
    }
  };

  if (loading) return <p>Loading user info...</p>;
  if (!userId) return <p>Please log in to rent equipment.</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Rent Equipment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input disabled value={userData.name} className="w-full bg-gray-100 border px-3 py-2 rounded" />
        <input disabled value={userData.contact} className="w-full bg-gray-100 border px-3 py-2 rounded" />
        <input disabled value={userData.email} className="w-full bg-gray-100 border px-3 py-2 rounded" />
        <input type="number" min="1" placeholder="Time (in hrs)" value={time} onChange={(e) => setTime(e.target.value)} className="w-full border px-3 py-2 rounded" />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border px-3 py-2 rounded" />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Submit Request</button>
      </form>
    </div>
  );
};

export default EquipmentRentForm;
