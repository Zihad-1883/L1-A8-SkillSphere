import React from 'react';
import courses from '@/data/data.json';
import CourseCard from './CourseCard';
import Link from 'next/link';


const PopularCourses = async () => {
    const topCourses = [...courses]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <div className="py-24 px-6 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-indigo-600 font-bold bg-indigo-50 px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-6 inline-block">
                            Top Rated
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                            Most <span className="text-gradient">Popular</span> Courses
                        </h2>
                        <p className="text-lg text-gray-500 font-medium">
                            Start with our highest-rated courses, hand-picked by thousands of learners worldwide.
                        </p>
                    </div>
                    <Link
                        href="/courses"
                        className="px-6 py-3 border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 font-bold rounded-2xl transition-all whitespace-nowrap flex items-center gap-2 group"
                    >
                        All Courses
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
                    {topCourses.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;