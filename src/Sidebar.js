import React from "react";
import { Home, Package, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        E-Cart
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <SidebarItem to="/" icon={<Home size={20} />} label="Home" />
        <SidebarItem to="/products" icon={<Package size={20} />} label="Products" />
        <SidebarItem to="/wishlist" icon={<Heart size={20} />} label="Wishlist" />
        <SidebarItem to="/cart" icon={<ShoppingCart size={20} />} label="Cart" />
      </nav>
    </div>
  );
}

function SidebarItem({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-3 text-gray-300 hover:bg-gray-800 p-2 rounded"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}