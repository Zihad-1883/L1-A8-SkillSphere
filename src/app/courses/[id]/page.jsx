import React from 'react';
import courses from '@/data/data.json';
import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaStar, FaClock, FaUsers, FaChartBar, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    const course = courses.find(c => c.id == id);

    const learningOutcomes = [
        "Build real-world projects from scratch",
        "Understand core concepts deeply",
        "Write clean, professional code",
        "Deploy applications to production",
        "Work with modern tools & libraries",
        "Follow industry best practices",
        "Debug and solve problems efficiently",
        "Build a strong developer portfolio",
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Banner */}
            <div className="bg-gray-900 text-white py-12 px-6">
                <div className="container mx-auto">
                    <Link href="/courses" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold mb-8 transition-colors group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        Back to All Courses
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                        {/* Left: Course Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-indigo-500/30">
                                    {course.category}
                                </span>
                                <span className="bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-amber-500/30">
                                    {course.level}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                                {course.title}
                            </h1>

                            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                                {course.description}
                            </p>

                            {/* Stats Row */}
                            <div className="flex flex-wrap items-center gap-6 pt-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={i < Math.floor(course.rating) ? 'text-amber-400' : 'text-gray-600'} size={14} />
                                        ))}
                                    </div>
                                    <span className="font-bold text-amber-400">{course.rating}</span>
                                    <span className="text-gray-400 text-sm">(2,400+ reviews)</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <FaUsers size={14} />
                                    <span className="text-sm font-medium">12,000+ students</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <FaClock size={14} />
                                    <span className="text-sm font-medium">{course.duration}</span>
                                </div>
                            </div>

                            {/* Instructor */}
                            <div className="flex items-center gap-4 pt-2 border-t border-gray-700">
                                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-black shrink-0">
                                    {course.instructor.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Created by</p>
                                    <p className="font-bold text-white">{course.instructor}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Empty on mobile (card is below) */}
                        <div className="hidden lg:block" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                    {/* Left: Course Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Course Image */}
                        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 66vw"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        {/* What You'll Learn */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-black text-gray-900 mb-6">What you&apos;ll learn</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {learningOutcomes.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Course Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { icon: FaClock, label: "Duration", value: course.duration },
                                { icon: FaChartBar, label: "Level", value: course.level },
                                { icon: FaGraduationCap, label: "Category", value: course.category },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                        <Icon className="text-indigo-600" size={20} />
                                    </div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                                    <p className="font-bold text-gray-900 text-sm">{value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Instructor Section */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-black text-gray-900 mb-6">Your Instructor</h2>
                            <div className="flex items-center gap-5 mb-5">
                                <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-black shrink-0">
                                    {course.instructor.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-black text-gray-900 text-xl">{course.instructor}</h3>
                                    <p className="text-sm text-gray-500 font-medium">{course.category} Expert & Educator</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                                        <span className="flex items-center gap-1"><FaStar className="text-amber-400" size={12} /> {course.rating} Rating</span>
                                        <span>·</span>
                                        <span className="flex items-center gap-1"><FaUsers size={12} /> 12k Students</span>
                                        <span>·</span>
                                        <span className="flex items-center gap-1"><FaGraduationCap size={12} /> 8 Courses</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                A passionate educator with years of industry experience, dedicated to helping students master real-world skills through practical, project-based learning. Known for breaking down complex concepts into simple, actionable steps.
                            </p>
                        </div>
                    </div>

                    {/* Right: Sticky Enrollment Card */}
                    <div className="w-full lg:sticky lg:top-24">
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="relative w-full h-48">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    sizes="400px"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            <div className="p-7 space-y-5">
                                <div>
                                    <div className="text-4xl font-black text-gray-900">Free</div>
                                    <p className="text-sm text-gray-400 mt-1">Full lifetime access · Certificate included</p>
                                </div>

                                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-100 active:scale-95">
                                    Enroll Now — It&apos;s Free
                                </button>
                                <button className="w-full border-2 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 text-gray-700 font-bold py-4 rounded-2xl transition-all active:scale-95">
                                    ♡ Add to Wishlist
                                </button>

                                <div className="pt-5 border-t border-gray-50 space-y-3">
                                    {[
                                        { label: "Level", value: course.level },
                                        { label: "Duration", value: course.duration },
                                        { label: "Category", value: course.category },
                                        { label: "Rating", value: `${course.rating} ★` },
                                    ].map(({ label, value }) => (
                                        <div key={label} className="flex justify-between items-center">
                                            <span className="text-sm text-gray-400 font-medium">{label}</span>
                                            <span className="text-sm font-bold text-gray-900">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-gray-50 text-center">
                                    <p className="text-xs text-gray-400 font-medium">30-day money-back guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;