import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-24 px-6 mt-auto">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-16 border-b border-gray-800">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300">
                                S
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white">
                                Skill<span className="text-indigo-600">Sphere</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
                            Empowering lifelong learners with world-class courses taught by industry experts. Join our global community today.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebook, FaTwitter, FaLinkedin, FaYoutube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-white transition-all transform hover:-translate-y-1">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            {[
                                { label: "Home", href: "/" },
                                { label: "All Courses", href: "/courses" },
                                { label: "My Profile", href: "/my-profile" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-indigo-400 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Account</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            {[
                                { label: "Login", href: "/login" },
                                { label: "Register", href: "/register" },
                                { label: "My Profile", href: "/my-profile" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-indigo-400 transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 group">
                                <a href="mailto:support@skillsphere.com" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-gray-800 group-hover:bg-indigo-600 flex items-center justify-center transition-colors shrink-0">
                                        <MdEmail size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-black">Email</p>
                                        <p className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">support@skillsphere.com</p>
                                    </div>
                                </a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <a href="tel:+18001234567" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-gray-800 group-hover:bg-indigo-600 flex items-center justify-center transition-colors shrink-0">
                                        <MdPhone size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-black">Phone</p>
                                        <p className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">+1 (800) 123-4567</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <p>© 2026 SkillSphere Platform. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
                        <Link href="/login" className="hover:text-white transition-colors">Login</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;