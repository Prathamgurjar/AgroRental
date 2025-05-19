




// import React from "react";

// const Register = () => {
//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       // style={{ backgroundImage: `url(${bgRegister})` }} // optional background image
//     >
//       <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
//         <h2 className="text-2xl font-bold mb-8 text-center">Register</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
//                          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
//                          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
//               Contact No.
//             </label>
//             <input
//               type="text"
//               id="contact"
//               name="contact"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
//                          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
//                          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
//                          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;




// import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { app } from "../firebaseConfig"; // make sure you have initialized Firebase here
// ;




// const Register = () => {
//   const auth = getAuth(app);
//   const db = getFirestore(app);

//   const [formData, setFormData] = useState({
//     name: "",
//     lastName: "",
//     contact: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, lastName, contact, email, password } = formData;

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Store additional info in Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         name,
//         lastName,
//         contact,
//         email,
//         uid: user.uid
//       });

//       alert("Registration successful!");
//       // Optionally reset form
//       setFormData({
//         name: "",
//         lastName: "",
//         contact: "",
//         email: "",
//         password: ""
//       });
//     } catch (error) {
//       console.error("Error registering user:", error);
//       alert("Error: " + error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
//       <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
//         <h2 className="text-2xl font-bold mb-8 text-center">Register</h2>
//         <form onSubmit={handleSubmit}>
//           {["name", "lastName", "contact", "email", "password"].map((field) => (
//             <div className="mb-4" key={field}>
//               <label
//                 htmlFor={field}
//                 className="block text-sm font-medium text-gray-700 capitalize"
//               >
//                 {field === "lastName" ? "Last Name" : field === "contact" ? "Contact No." : field}
//               </label>
//               <input
//                 type={field === "email" ? "email" : field === "password" ? "password" : "text"}
//                 id={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
//                            focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//               />
//             </div>
//           ))}

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    contact: "",
    email: "",
    password: "",
    role: []
  });

  const handleChange = (e) => {
    const { name, value, options } = e.target;

    if (name === "role") {
      const selected = Array.from(options)
        .filter((o) => o.selected)
        .map((o) => o.value);
      setFormData({ ...formData, role: selected });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, lastName, contact, email, password, role } = formData;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        lastName,
        contact,
        email,
        uid: user.uid,
        role,
      });

      alert("Registration successful!");
      setFormData({
        name: "",
        lastName: "",
        contact: "",
        email: "",
        password: "",
        role: []
      });
    } catch (error) {
      console.error("Registration error:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
      <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          {["name", "lastName", "contact", "email", "password"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {field === "lastName" ? "Last Name" : field === "contact" ? "Contact No." : field}
              </label>
              <input
                type={field === "email" ? "email" : field === "password" ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}

          {/* Role Selector (Multi-Select) */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium">
              Select Role(s)
            </label>
            <select
              id="role"
              name="role"
              multiple
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded h-24"
            >
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Hold Ctrl (or Cmd on Mac) to select multiple roles.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
