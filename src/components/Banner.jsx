import Image from 'next/image';
import React from 'react';
import BannerImage from '../assets/banner.png'

const Banner = () => {
    return (
        <div className="relative w-full overflow-hidden bg-white/50 py-16 md:py-24">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-pink-100 rounded-full blur-3xl opacity-50 -z-10"></div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full animate__animated animate__fadeInDown">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                        </span>
                        New Courses Available
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight animate__animated animate__fadeInLeft">
                        Master Your Future <br />
                        <span className="text-gradient">With Expertise</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl animate__animated animate__fadeInLeft animate__delay-1s">
                        Join 50k+ students learning world-class skills from industry experts. 
                        Your journey to professional excellence starts here.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 animate__animated animate__fadeInUp animate__delay-1s">
                        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 transition-all hover:-translate-y-1 active:scale-95">
                            Start Learning Now
                        </button>
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm hover:scale-110 transition-transform cursor-pointer">
                                    <div className={`w-full h-full flex items-center justify-center font-bold text-gray-400 bg-indigo-${i}00`}>U{i}</div>
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-50 flex items-center justify-center text-xs font-bold text-gray-400 shadow-sm">
                                +50k
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100 animate__animated animate__fadeIn animate__delay-2s">
                        <div>
                            <div className="text-3xl font-black text-gray-900">200+</div>
                            <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Courses</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-gray-900">4.9★</div>
                            <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Rating</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-gray-900">12k+</div>
                            <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Graduates</div>
                        </div>
                    </div>
                </div>

                <div className="relative w-full md:w-1/2 lg:w-5/12 animate__animated animate__fadeInRight">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-[2.5rem] blur-2xl opacity-20 -rotate-6 animate-pulse"></div>
                    <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden transform hover:-rotate-2 transition-transform duration-500">
                        <Image src={BannerImage} alt='BannerImage' className="rounded-[1.5rem] w-full h-auto object-cover shadow-inner" priority />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;