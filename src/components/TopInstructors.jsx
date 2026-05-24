import { FaStar } from "react-icons/fa";

const instructors = [
    { id: 1, name: "John Smith", role: "Senior Web Developer", rating: 4.8 },
    { id: 2, name: "Sarah Chen", role: "Data Scientist", rating: 4.9 },
    { id: 3, name: "David Lee", role: "Lead UX Designer", rating: 4.7 },
    { id: 4, name: "Elena Rodriguez", role: "Marketing Director", rating: 4.8 },
];

const TopInstructors = () => {
    return (
        <div className="bg-gray-50/50 py-24 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Learn from the <span className="text-gradient">Best Experts</span>
                        </h2>
                        <p className="text-lg text-gray-500 font-medium">
                            Our instructors are industry veterans from world-leading companies. 
                            Gain practical knowledge that actually matters.
                        </p>
                    </div>
                    <button className="px-6 py-3 border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 font-bold rounded-2xl transition-all">
                        View All Mentors
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {instructors.map((instructor) => (
                        <div key={instructor.id} className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-50 hover:-translate-y-2 text-center">
                            <div className="relative inline-block mb-6">
                                <div className="absolute inset-0 bg-indigo-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                <div className="relative w-28 h-28 rounded-full border-4 border-indigo-50 p-1 group-hover:border-indigo-200 transition-colors">
                                    <div className="w-full h-full rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-3xl font-black">
                                        {instructor.name.charAt(0)}
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{instructor.name}</h3>
                            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">{instructor.role}</p>
                            
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
                                <FaStar className="text-amber-500" />
                                <span className="text-sm font-bold text-amber-700">{instructor.rating} Instructor Rating</span>
                            </div>

                            <div className="mt-8 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopInstructors;