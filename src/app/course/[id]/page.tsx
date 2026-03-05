"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import AIChatbot from "@/components/AIChatbot";

export default function CoursePage() {
    const { id } = useParams();
    const [course, setCourse] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const [activeVideo, setActiveVideo] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/login");
        } else {
            setUser(JSON.parse(storedUser));
            // In a real app, we'd fetch course details by ID
            // For demo, we'll suggest mock data
        }
    }, [id, router]);

    if (!user) return null;

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            {/* Video Section */}
            <div className="flex-1 bg-black flex flex-col">
                <div className="aspect-video w-full bg-neutral-900 flex items-center justify-center text-white text-2xl font-bold">
                    Video Player Mockup: {course?.title || "Engineering Lesson"}
                </div>
                <div className="p-8 space-y-4">
                    <h1 className="text-3xl font-extrabold text-neutral-900">Module {activeVideo + 1}: Introduction to Concepts</h1>
                    <p className="text-neutral-600 leading-relaxed max-w-3xl">
                        This lesson covers the fundamental principles of engineering design and problem-solving techniques.
                        We'll explore real-world applications and theoretical frameworks.
                    </p>
                </div>
            </div>

            {/* Playlist Sidebar */}
            <div className="w-full md:w-96 border-l border-neutral-200 h-screen overflow-y-auto bg-neutral-50 p-6">
                <h2 className="text-xl font-bold text-neutral-900 mb-6 underline decoration-blue-500 decoration-4">Course Content</h2>
                <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map(i => (
                        <button
                            key={i}
                            onClick={() => setActiveVideo(i - 1)}
                            className={`w-full text-left p-4 rounded-xl border transition-all flex items-center space-x-4 ${activeVideo === i - 1 ? "bg-white border-blue-600 shadow-sm" : "bg-transparent border-transparent hover:bg-neutral-100"
                                }`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${activeVideo === i - 1 ? "bg-blue-600 text-white" : "bg-neutral-200 text-neutral-500"
                                }`}>
                                {i}
                            </div>
                            <div>
                                <div className="font-bold text-neutral-900 text-sm">Lesson Title {i}</div>
                                <div className="text-xs text-neutral-400">12:45 mins</div>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-blue-600 rounded-2xl text-white">
                    <h3 className="font-bold mb-2">Need Help?</h3>
                    <p className="text-xs text-blue-100 mb-4">Use our AI Tutor to clear your doubts instantly.</p>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-xs font-bold">Open Chatbot</button>
                </div>
            </div>

            <AIChatbot branch={user.branch} />
        </div>
    );
}
