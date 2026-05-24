import Link from "next/link";
import NavbarClient from "./NavbarClient";
import { Suspense } from "react";
import NavLink from "./NavLink";


const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full glass shadow-sm">
      <div className="container mx-auto navbar px-4 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content glass rounded-2xl z-50 mt-4 w-52 p-4 shadow-xl">
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/courses">Courses</NavLink></li>
              <li><NavLink href="/my-profile">My Profile</NavLink></li>
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300">
              S
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">
              Skill<span className="text-indigo-600">Sphere</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/courses">Courses</NavLink></li>
            <li><NavLink href="/my-profile">My Profile</NavLink></li>
          </ul>
        </div>

        <Suspense fallback={<div className="navbar-end"></div>}>
          <NavbarClient />
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;