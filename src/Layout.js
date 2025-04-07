import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main content area, pushed right by sidebar width */}
      <div className="flex flex-col flex-1 ml-64">
        <Navbar />
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}