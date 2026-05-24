"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";

const NavbarClient = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="navbar-end gap-4">
      {!user && (
        <div className="flex items-center gap-3">
          <Link href="/login" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors">
            Login
          </Link>
          <Link href="/register" className="px-5 py-2.5 text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95">
            Get Started
          </Link>
        </div>
      )}

      {user && (
        <div className="flex gap-4 items-center">
          <Avatar 
            isBordered 
            color="primary"
            src={user?.image} 
            name={user?.name}
            className="w-10 h-10 text-large cursor-pointer"
          />
          <button onClick={handleLogOut} className="px-4 py-2 text-sm font-bold border-2 border-red-100 text-red-600 hover:bg-red-50 rounded-xl transition-all">
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarClient;