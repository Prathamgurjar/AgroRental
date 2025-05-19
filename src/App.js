// // import React from 'react';
// // import './index.css';
// // import './App.css';
// // import Home from './Landingpage/home';
// // import Login from "./Landingpage/Login";
// // function App() {
// //   return (
// //     <div>
// //       <Home/>
// //       <Login/>
// //     </div>
// //   );
// // }

// // export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Landingpage/layout";

import Home from "./Landingpage/home";
import Login from "./Landingpage/Login";
import Register from "./Landingpage/register";
import EquipmentRentForm from "./Landingpage/EquipmentRentForm";
import Contact from "./Landingpage/contect";
import About from "./Landingpage/about";

import UserDashboard from "./Dashboards/UserDashboard";
import VendorDashboard from "./Dashboards/VendorDashboard";



// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/role-selection" element={<RoleSelection />} />
//         <Route path="/user-dashboard" element={<UserDashboard />} />
//         <Route path="/vendor-dashboard" element={<VendorDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Landingpage/Home";
// import Login from "./Landingpage/Login";
// import Register from "./Landingpage/Register";
// import RoleSelection from "./RoleSelection";
// import UserDashboard from "./Dashboards/UserDashboard";
// import VendorDashboard from "./Dashboards/VendorDashboard";

function App() {
  return (
    <Router>
      <Layout >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about"element={<About/>}></Route>
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        {/* <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} /> */}
        <Route path="/rent/:equipmentId/:vendorId" element={<EquipmentRentForm />} />

      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
