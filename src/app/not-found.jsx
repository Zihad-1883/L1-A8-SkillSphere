import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
            
            <div className="relative">
                <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-pink-500 opacity-20">
                    404
                </h1>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
                        Lost in Space?
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
                        The page you are looking for doesn't exist or has been moved to a new galaxy.
                    </p>
                </div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-6">
                <Link 
                    href="/" 
                    className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Earth
                </Link>
                <Link 
                    href="/courses" 
                    className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-100 font-bold rounded-2xl shadow-sm transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
                >
                    Explore Courses
                </Link>
            </div>
            
            <div className="mt-16 text-gray-300 font-black tracking-widest text-xs uppercase animate-bounce">
                SkillSphere Platform
            </div>
        </div>
    );
};

export default NotFoundPage;