import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6">
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-bold text-gray-900 tracking-tight">Preparing your experience</span>
                <span className="text-sm font-medium text-gray-400 animate-pulse uppercase tracking-[0.2em]">SkillSphere</span>
            </div>
        </div>
    );
};

export default Loading;