// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig";







// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//  const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password.");
//       return;
//     }

//     try {
//       await signInWithEmailAndPassword(auth, email, password); // ✅ Firebase login
//       setError("");
//       navigate("/role-selection"); // ✅ Navigate on success
//     } catch (error) {
//       setError(error.message); // ✅ Show login error
//     }
//   };


//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-96 p-6  bg-white shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
//         {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-1 p-2 border rounded"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-1 p-2 border rounded"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//       <div> New User <span Lin>Register</span></div>
//     </div>

//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError("Please enter both email and password.");
//       return;
//     }
   
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
//         {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-1 p-2 border rounded"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-1 p-2 border rounded"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <Link to="/register" className="text-green-600 hover:underline">New user? Register here</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// 




// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "../firebaseConfig"; // ensure you export both from firebaseConfig.js

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [selectedRole, setSelectedRole] = useState(""); // NEW
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password || !selectedRole) {
//       setError("Please enter all fields and select a role.");
//       return;
//     }

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Get role from Firestore
//       const docRef = doc(db, "users", user.uid);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const userData = docSnap.data();
//         const roles = userData.role || [];

//         if (roles.includes(selectedRole)) {
//           alert("Login successful!");

//           // Redirect
//           if (selectedRole === "user") {
//             navigate("/user-dashboard");
//           } else if (selectedRole === "vendor") {
//             navigate("/vendor-dashboard");
//           }
//         } else {
//           setError("Selected role not assigned to this account.");
//         }
//       } else {
//         setError("No user data found in Firestore.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
//         {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-1 p-2 border rounded"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-1 p-2 border rounded"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* 🔽 Role Selector */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Login as</label>
//             <select
//               value={selectedRole}
//               onChange={(e) => setSelectedRole(e.target.value)}
//               className="w-full mt-1 p-2 border rounded"
//             >
//               <option value="">Select role</option>
//               <option value="user">User</option>
//               <option value="vendor">Vendor</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//           >
//             Login
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <Link to="/register" className="text-green-600 hover:underline">
//             New user? Register here
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "../firebaseConfig";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user");  // default selected role
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password.");
//       return;
//     }

//     try {
//       // Sign in user
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Fetch user document to get role(s)
//       const docRef = doc(db, "users", user.uid);
//       const docSnap = await getDoc(docRef);

//       if (!docSnap.exists()) {
//         alert("User data not found!");

//         return;
//       }

//       const userData = docSnap.data();

//       // Check user role(s)
//       if (userData.role.includes(role)) {
//         alert("Login successful as " + role);

//         // Redirect based on role selected by user
//         if (role === "user") {
//           navigate("/user-dashboard");
//         } else if (role === "vendor") {
//           navigate("/vendor-dashboard");
//         }
//       } else {
//         alert(`You do not have the role: ${role}. Please check your selection.`);
//         setError("Role mismatch.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Login failed: " + err.message);
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
//         {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full mt-1 p-2 border rounded"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-1 p-2 border rounded"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="role" className="block text-sm font-medium">Select Role</label>
//             <select
//               id="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full mt-1 p-2 border rounded"
//             >
//               <option value="user">User</option>
//               <option value="vendor">Vendor</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//           >
//             Login
//           </button>
//         </form>
//          <div className="mt-4 text-center">
//            <Link to="/register" className="text-green-600 hover:underline">
//              New user? Register here
//            </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        alert("User data not found!");
        return;
      }

      const userData = docSnap.data();

      if (userData.role.includes(role)) {
        alert("Login successful as " + role);

        if (role === "user") {
          navigate("/user-dashboard");
        } else if (role === "vendor") {
          navigate("/vendor-dashboard");
        }
      } else {
        alert(`You do not have the role: ${role}. Please check your selection.`);
        setError("Role mismatch.");
      }
    } catch (err) {
      console.error(err);
      setError("Login failed: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-green-700">AgroRental Login</h2>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          New user?{" "}
          <Link to="/register" className="text-green-600 font-medium hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
