// import React from "react";
// import { useNavigate } from "react-router-dom";

// const RoleSelection = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
//       <h1 className="text-3xl font-bold mb-6">Select Your Role</h1>
//       <div className="flex space-x-4">
//         <button
//           onClick={() => navigate("/user-dashboard")}
//           className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
//         >
//           User
//         </button>
//         <button
//           onClick={() => navigate("/vendor-dashboard")}
//           className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
//         >
//           Vendor
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoleSelection;



import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const selectRole = (role) => {
    if (role === "user") {
      navigate("/user-dashboard");
    } else if (role === "vendor") {
      navigate("/vendor-dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold mb-8">Select Your Role</h1>
      <div className="flex space-x-8">
        <button
          onClick={() => selectRole("user")}
          className="bg-green-700 text-white px-8 py-4 rounded hover:bg-green-800"
        >
          User
        </button>
        <button
          onClick={() => selectRole("vendor")}
          className="bg-green-700 text-white px-8 py-4 rounded hover:bg-green-800"
        >
          Vendor
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
