const LearningTips = () => {
    const tips = [
        {
            icon: "⏱️",
            title: "Pomodoro Technique",
            desc: "Work in focused 25-minute intervals followed by 5-minute breaks to maintain peak productivity.",
            bg: "bg-indigo-50",
            border: "border-indigo-100",
            text: "text-indigo-600"
        },
        {
            icon: "📘",
            title: "Active Recall",
            desc: "Challenge yourself to remember concepts from memory instead of passive reading for better retention.",
            bg: "bg-pink-50",
            border: "border-pink-100",
            text: "text-pink-600"
        },
        {
            icon: "📈",
            title: "Spaced Repetition",
            desc: "Review material at increasing intervals to move information into long-term memory permanently.",
            bg: "bg-violet-50",
            border: "border-violet-100",
            text: "text-violet-600"
        },
        {
            icon: "📅",
            title: "Focused Habits",
            desc: "Dedicate consistent time slots each day for learning to build an unshakeable study routine.",
            bg: "bg-amber-50",
            border: "border-amber-100",
            text: "text-amber-600"
        }
    ];

    return (
        <div className="py-24 px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-indigo-600 font-bold bg-indigo-50 px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-6 inline-block">
                        Pro Learning Secrets
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Boost Your <span className="text-gradient">Learning Speed</span>
                    </h2>
                    <p className="text-lg text-gray-500">
                        Scientific techniques designed to help you master complex skills faster and retain them longer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tips.map((tip, i) => (
                        <div key={i} className={`p-8 rounded-[2.5rem] border ${tip.border} ${tip.bg} transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default group`}>
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl mb-8 group-hover:rotate-12 transition-transform">
                                {tip.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {tip.desc}
                            </p>
                            <div className={`text-sm font-bold ${tip.text} flex items-center gap-2 cursor-pointer hover:underline`}>
                                Explore method
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearningTips;