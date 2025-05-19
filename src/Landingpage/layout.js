// src/components/Layout.js
import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-20 px-4">{children}</main> {/* pt-20 for spacing under fixed header */}
    </>
  );
};

export default Layout;
