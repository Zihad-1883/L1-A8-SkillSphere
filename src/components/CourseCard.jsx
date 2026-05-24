import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseCard = ({course}) => {
    return (
        <div className="group bg-white rounded-3xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2">
            <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6">
                <Image 
                    src={course.image} 
                    alt={course.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-indigo-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                        {course.category || 'Course'}
                    </span>
                </div>
            </div>
            
            <div className="px-2 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-amber-500">
                        <span className="text-sm font-bold">{course.rating}</span>
                        <div className="flex text-[10px]">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < Math.floor(course.rating) ? 'text-amber-500' : 'text-gray-200'}>★</span>
                            ))}
                        </div>
                    </div>
                    <span className="text-gray-400 text-xs font-medium">1.2k students</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-indigo-600 transition-colors">
                    {course.title}
                </h3>
                
                <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs uppercase">
                        {course.instructor.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-gray-600">
                        {course.instructor}
                    </span>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-gray-50 mt-4">
                    <span className="text-2xl font-black text-gray-900">Free</span>
                    <Link 
                        href={`/courses/${course.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-indigo-600 transition-all active:scale-95"
                    >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;