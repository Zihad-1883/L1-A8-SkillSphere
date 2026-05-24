"use client"
import React, { useState } from 'react';
import courses from '@/data/data.json';
import CourseCard from '@/components/CourseCard';
import { Button, Form, Input } from '@heroui/react';
import { Check } from '@gravity-ui/icons';

const CoursesPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearched, setIsSearched] = useState(false);

    const filteredCourses = courses.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchValue = formData.get("search") || "";
        setSearchQuery(searchValue);
        setIsSearched(searchValue.length > 0);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-white py-16 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">
                        Explore Our <span className="text-gradient">Premium Courses</span>
                    </h1>
                    <div className="max-w-xl mx-auto">
                        <Form onSubmit={onSubmit} className="relative group">
                            <div className="w-full relative">
                                <Input 
                                    name="search"
                                    placeholder="What do you want to learn today?" 
                                    className="w-full pl-12 pr-32 h-14 bg-gray-50 border-2 border-transparent focus:border-indigo-600 focus:bg-white rounded-2xl transition-all outline-none text-gray-700 font-medium"
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <Button type="submit" className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-6 transition-all active:scale-95 z-10">
                                    Search
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                {isSearched && (
                    <div className="flex items-center justify-between mb-10">
                        <p className="text-gray-500 font-medium italic">
                            Showing {filteredCourses.length} results for <span className="text-indigo-600 font-bold">"{searchQuery}"</span>
                        </p>
                        <button 
                            onClick={() => {setSearchQuery(""); setIsSearched(false);}}
                            className="text-xs font-bold text-gray-400 hover:text-red-500 uppercase tracking-widest transition-colors"
                        >
                            Clear Search
                        </button>
                    </div>
                )}

                {filteredCourses.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {filteredCourses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100 italic">
                        <div className="text-6xl mb-6">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-400">No courses match your search</h3>
                        <p className="text-gray-300 mt-2">Try different keywords or browse all categories</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoursesPage;