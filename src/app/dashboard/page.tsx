"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AIChatbot from "@/components/AIChatbot";
import QuizGenerator from "@/components/QuizGenerator";

export default function Dashboard() {
    const [user, setUser] = useState<any>(null);
    const [courses, setCourses] = useState<any[]>([]);
    const [activeSection, setActiveSection] = useState("Dashboard");
    const [courseFilter, setCourseFilter] = useState("All");
    const [patternIdx, setPatternIdx] = useState(0);
    const router = useRouter();

    const patterns = [
        { backgroundImage: 'radial-gradient(#4f46e5 2px, transparent 2px)', backgroundSize: '30px 30px', opacity: 0.05 },
        { backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.03 },
        { backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #4f46e5 10px, #4f46e5 11px)', backgroundSize: '100% 100%', opacity: 0.03 },
        { backgroundImage: 'radial-gradient(circle at center, #4f46e5 1px, transparent 2px)', backgroundSize: '20px 20px', opacity: 0.06 }
    ];

    useEffect(() => {
        setPatternIdx(Math.floor(Math.random() * patterns.length));
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/login");
        } else {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            fetchRecommendations(parsedUser.branch, parsedUser.token); // Pass token to fetchRecommendations
        }
    }, [router]);

    const fetchRecommendations = async (branch: string, token: string) => { // Accept token as argument
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
            const res = await fetch(`${apiUrl}/api/courses`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            const branchDummy = getBranchDummyCourses(branch);
            const combined = [...data, ...branchDummy.slice(0, 5 - data.length)].slice(0, 5);
            setCourses(combined);
        } catch (err) {
            console.error(err);
            setCourses(getBranchDummyCourses(branch).slice(0, 5));
        }
    };

    const getBranchDummyCourses = (branch: string) => {
        const branchLower = branch.toLowerCase();
        if (branchLower.includes("computer") || branchLower.includes("it")) {
            return [
                { title: "Advanced Data Structures", instructor: "Dr. A. Mehra", level: "Advanced", code: "CS401" },
                { title: "Cloud Computing Architectures", instructor: "Prof. S. Verma", level: "Intermediate", code: "CS302" },
                { title: "Machine Learning with Python", instructor: "Dr. K. Singh", level: "Beginner", code: "AI101" },
                { title: "Cyber Security Fundamentals", instructor: "Prof. R. Sharma", level: "Beginner", code: "SE201" },
                { title: "Distributed Systems", instructor: "Dr. P. Gupta", level: "Advanced", code: "CS405" }
            ];
        } else if (branchLower.includes("mechanical")) {
            return [
                { title: "Thermodynamics II", instructor: "Dr. R. Kapoor", level: "Intermediate", code: "ME301" },
                { title: "Advanced Fluid Mechanics", instructor: "Prof. M. Dass", level: "Advanced", code: "ME402" },
                { title: "Mechanics of Solids", instructor: "Dr. S. Patil", level: "Beginner", code: "ME201" },
                { title: "IC Engines & Systems", instructor: "Prof. J. Khan", level: "Intermediate", code: "ME305" },
                { title: "CAD/CAM Design", instructor: "Dr. V. Joshi", level: "Advanced", code: "ME410" }
            ];
        }
        return [
            { title: "Professional Ethics", instructor: "Dr. S. Roy", level: "General", code: "HS101" },
            { title: "Applied Mathematics", instructor: "Prof. N. Jain", level: "Advanced", code: "MA201" },
            { title: "Industrial Management", instructor: "Dr. B. Das", level: "Intermediate", code: "IM302" }
        ];
    };

    const dummyMyCourses = [
        { id: 1, title: "Database Systems", progress: 78, instructor: "Dr. A. Mehra", status: "In Progress", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800" },
        { id: 2, title: "Operating Systems", progress: 45, instructor: "Prof. S. Verma", status: "In Progress", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800" },
        { id: 3, title: "Web Technologies", progress: 100, instructor: "Dr. K. Singh", status: "Completed", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800" },
        { id: 4, title: "Discrete Structures", progress: 95, instructor: "Prof. R. Sharma", status: "In Progress", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800" }
    ];

    const filteredMyCourses = dummyMyCourses.filter(c =>
        courseFilter === "All" || c.status === courseFilter
    );

    if (!user) return null;

    const navItems = [
        { name: "Dashboard", id: "Dashboard", icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
        { name: "My Courses", id: "Courses", icon: <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
        { name: "AI Smart Assistant", id: "AI", icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" /> },
        { name: "Profile", id: "Profile", icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
    ];

    return (
        <div className="h-screen bg-white flex font-sans overflow-hidden">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-slate-100 hidden md:flex flex-col shrink-0 h-full">
                <div className="p-8 pb-10 flex items-center space-x-3">
                    <img src="/bvcoe_logo.png" alt="BVCOE Logo" className="w-10 h-10 object-contain drop-shadow-sm" />
                    <span className="text-xl font-black text-slate-800 tracking-tighter">BVCOE Learn</span>
                </div>

                <nav className="flex-1 px-4 space-y-1.5">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 group ${activeSection === item.id ? 'bg-[#4f46e5]/5 text-[#4f46e5] shadow-sm' : 'text-slate-400 hover:bg-slate-50 hover:text-[#4f46e5]'}`}
                        >
                            <svg className={`w-5 h-5 transition-transform duration-300 ${activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {item.icon}
                            </svg>
                            <span>{item.name}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-6">
                    <button
                        onClick={() => { localStorage.clear(); router.push("/login"); }}
                        className="w-full flex items-center space-x-3 px-4 py-4 rounded-2xl font-bold text-sm text-red-500 hover:bg-red-50 transition-all group"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                        </svg>
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#fbfcfd]">
                <header className="h-20 bg-white border-b border-slate-100 flex items-center px-10 shrink-0">
                    <div className="flex-1 relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for courses, topics, or AI help..."
                            className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 shadow-sm rounded-2xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#4f46e5]/20 focus:bg-white transition-all text-sm font-bold"
                        />
                    </div>

                    <div className="flex items-center space-x-6 ml-6">
                        <button className="relative p-2 text-slate-400 hover:text-[#4f46e5] transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <button onClick={() => setActiveSection("Profile")} className="flex items-center space-x-3 pl-6 border-l border-slate-100 focus:outline-none group">
                            <div className="w-10 h-10 bg-[#4f46e5]/10 rounded-full flex items-center justify-center text-[#4f46e5] font-black border-2 border-slate-50 shadow-sm group-hover:scale-105 transition-transform">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-10">
                    {activeSection === "Dashboard" && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto">

                            {/* Welcome Hero - Compact */}
                            <div className="relative bg-[#4f46e5] rounded-[2.5rem] p-10 text-white overflow-hidden shadow-2xl shadow-indigo-200/50">
                                <div className="absolute top-0 right-0 p-10 opacity-10">
                                    <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                </div>
                                <div className="relative z-10">
                                    <h1 className="text-4xl font-black mb-3 tracking-tight">Welcome back, {user.name.split(' ')[0]}! 👋</h1>
                                    <p className="text-indigo-100 text-base font-medium max-w-xl">
                                        As a <span className="text-white font-black border-b-2 border-white/30">{user.branch}</span> student, we&apos;ve curated the best tools to help you succeed.
                                    </p>
                                </div>
                            </div>

                            {/* Dashboard Static Elements - Random Things */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                {/* Community Highlights */}
                                <div className="lg:col-span-8 space-y-8">
                                    <section>
                                        <div className="flex items-center justify-between mb-8">
                                            <h2 className="text-2xl font-black text-slate-800 flex items-center">
                                                <span className="w-1.5 h-8 bg-[#4f46e5] rounded-full mr-4 inline-block"></span>
                                                Recommended Courses
                                            </h2>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            {courses.slice(0, 4).map((course, i) => (
                                                <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
                                                    <div className="aspect-video relative overflow-hidden">
                                                        <div className="absolute top-4 left-4 z-10">
                                                            <span className="px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border border-white/20 backdrop-blur-md bg-[#4f46e5]/90 text-white shadow-sm">
                                                                {course.level}
                                                            </span>
                                                        </div>
                                                        <div className="absolute top-4 right-4 z-10">
                                                            <span className="px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border border-white/20 backdrop-blur-md bg-white/90 text-[#4f46e5] shadow-sm">
                                                                {course.code || "CORE"}
                                                            </span>
                                                        </div>
                                                        <img
                                                            src={["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800", "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800", "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800"][i % 4]}
                                                            alt={course.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex items-end p-6">
                                                            <div className="w-full">
                                                                <h3 className="font-bold text-white text-lg leading-tight mb-2 group-hover:text-indigo-200 transition-colors line-clamp-2">{course.title}</h3>
                                                                <p className="text-slate-300 text-xs font-medium">{course.instructor}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="p-6">
                                                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-6">
                                                            <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 8 Weeks</span>
                                                            <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Certificate</span>
                                                        </div>
                                                        <button className="w-full py-3.5 bg-slate-50 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-[#4f46e5] hover:text-white transition-all group-hover:shadow-lg group-hover:shadow-indigo-100">
                                                            Enroll Now
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
                                        <h3 className="text-lg font-black text-slate-800 mb-6 tracking-tight">Campus Announcements</h3>
                                        <div className="space-y-4">
                                            {[
                                                { title: "Smart India Hackathon 2026", date: "Due March 15", color: "bg-orange-50 text-orange-600" },
                                                { title: "Internal Lab Exams - Semester 6", date: "Starting March 20", color: "bg-indigo-50 text-indigo-600" },
                                                { title: "Placement Drive: Google Cloud", date: "April 02", color: "bg-blue-50 text-blue-600" }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-2 h-2 rounded-full ${item.color.split(' ')[1]}`}></div>
                                                        <p className="font-bold text-slate-700 text-sm">{item.title}</p>
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${item.color}`}>{item.date}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                {/* Sidebar Widgets */}
                                <div className="lg:col-span-4 space-y-8">
                                    <section className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm group hover:shadow-xl hover:shadow-indigo-100/50 transition-all">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-base font-black text-slate-800 tracking-tight">Next Lecture</h3>
                                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                        </div>
                                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                            <p className="text-[10px] font-black text-[#4f46e5] uppercase tracking-widest mb-1">In 15 Minutes</p>
                                            <h4 className="font-bold text-slate-800 text-sm">Advanced Algorithms</h4>
                                            <p className="text-xs text-slate-400 font-medium mt-1">Room 402 • Prof. S. Kapoor</p>
                                        </div>
                                        <button className="w-full mt-6 py-3 bg-white border border-slate-200 text-slate-500 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">View Full Schedule</button>
                                    </section>

                                    <section className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all">
                                        <h3 className="text-base font-black text-slate-800 mb-6">Learning Pulse</h3>
                                        <div className="flex items-end gap-2 h-24 mb-6">
                                            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                                <div key={i} className="flex-1 bg-indigo-50 rounded-t-lg relative group transition-all hover:bg-indigo-100">
                                                    <div className="absolute bottom-0 w-full bg-[#4f46e5] rounded-t-lg transition-all duration-1000" style={{ height: `${h}%` }}></div>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase text-center tracking-widest">Weekly Study Hours</p>
                                    </section>

                                    <section className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-slate-300/50 transition-all">
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-xl font-black">Study Buddy</h3>
                                                <div className="flex -space-x-2">
                                                    {[1, 2, 3].map(i => (
                                                        <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[8px] font-bold">U{i}</div>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-slate-400 text-xs font-medium mb-6 leading-relaxed">
                                                Find active study groups in Bharati Vidyapeeth campus.
                                            </p>
                                            <div className="space-y-3">
                                                {["Mern Stack Lab", "Operating Syst. Grp"].map((grp, i) => (
                                                    <div key={i} className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                                        <span className="text-xs font-bold">{grp}</span>
                                                        <span className="text-[10px] font-black uppercase text-emerald-400">Live</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === "Courses" && (
                        <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-4xl font-black text-slate-800">My Learning</h1>
                                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-2">Manage your current and completed certifications</p>
                                </div>
                                <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                                    {["All", "In Progress", "Completed"].map((filter) => (
                                        <button
                                            key={filter}
                                            onClick={() => setCourseFilter(filter)}
                                            className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${courseFilter === filter
                                                ? "bg-white text-[#4f46e5] shadow-sm"
                                                : "text-slate-400 hover:text-slate-600"
                                                }`}
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredMyCourses.length > 0 ? filteredMyCourses.map((course) => (
                                    <div key={course.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
                                        <div className="aspect-video relative overflow-hidden">
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border border-white/20 backdrop-blur-md ${course.status === "Completed" ? "bg-emerald-500/90 text-white" : "bg-indigo-600/90 text-white"
                                                    }`}>
                                                    {course.status}
                                                </span>
                                            </div>
                                            <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-6">
                                                <div className="w-full">
                                                    <h3 className="font-bold text-white text-lg leading-tight mb-2 group-hover:text-indigo-200 transition-colors">{course.title}</h3>
                                                    <p className="text-slate-300 text-xs font-medium">{course.instructor}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                    <span>Progression</span>
                                                    <span className="text-[#4f46e5] font-black">{course.progress}%</span>
                                                </div>
                                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-1000 ${course.status === "Completed" ? "bg-emerald-500" : "bg-[#4f46e5]"
                                                            }`}
                                                        style={{ width: `${course.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                            <button className="w-full mt-6 py-3.5 bg-slate-50 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-[#4f46e5] hover:text-white transition-all group-hover:shadow-lg group-hover:shadow-indigo-100">
                                                {course.status === "Completed" ? "View Certificate" : "Continue Module"}
                                            </button>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="col-span-full py-20 text-center">
                                        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto text-slate-300 mb-4">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-black text-slate-800 italic">No modules found.</h3>
                                        <p className="text-slate-400 text-xs font-medium mt-2">Try changing your filters or explore new courses.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeSection === "AI" && (
                        <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-2xl shadow-indigo-100/30">
                                <div className="flex items-center space-x-6 mb-12">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] rounded-3xl flex items-center justify-center text-white shadow-xl shadow-indigo-100">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-black text-slate-800 tracking-tight">AI Smart Assistant</h1>
                                        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#4f46e5] mt-1">Advanced Mastery Lab</p>
                                    </div>
                                </div>
                                <QuizGenerator />
                            </div>
                        </div>
                    )}

                    {activeSection === "Profile" && (
                        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Professional Profile Container */}
                            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-sm relative">
                                {/* Minimalist Header Bar */}
                                <div className="h-48 bg-slate-50 relative border-b border-slate-100 overflow-hidden">
                                    <div className="absolute inset-0" style={{ backgroundImage: patterns[patternIdx].backgroundImage, backgroundSize: patterns[patternIdx].backgroundSize, opacity: patterns[patternIdx].opacity }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/80 to-transparent"></div>
                                </div>

                                <div className="px-12 pb-12 relative -mt-20">
                                    <div className="flex flex-col md:flex-row items-end gap-10 pb-8 border-b border-slate-100/60">
                                        <div className="relative group">
                                            <div className="w-40 h-40 bg-white rounded-3xl p-1.5 shadow-xl relative z-10">
                                                <div className="w-full h-full bg-slate-50 rounded-[1.25rem] flex items-center justify-center text-6xl font-black text-slate-800 border border-slate-100">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </div>
                                            </div>
                                            <button className="absolute -bottom-2 -right-2 z-20 w-10 h-10 bg-white text-slate-600 rounded-xl flex items-center justify-center shadow-lg border border-slate-100 hover:text-[#4f46e5] transition-all focus:scale-95">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="flex-1 pb-2">
                                            <div className="flex items-center gap-4">
                                                <h1 className="text-4xl font-black text-slate-900 tracking-tight">{user.name}</h1>
                                                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-lg uppercase tracking-wider border border-indigo-100/50">Student Ambassador</span>
                                            </div>
                                            <p className="text-slate-500 font-bold text-sm mt-2 flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                Bharati Vidyapeeth College of Engineering, Pune
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4 pb-2">
                                            <button className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold text-xs hover:bg-slate-50 transition-all active:scale-95">Download CV</button>
                                            <button className="px-6 py-3 bg-[#4f46e5] text-white rounded-xl font-bold text-xs hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95">Update Profile</button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
                                        <div className="lg:col-span-1 space-y-8">
                                            <section>
                                                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Contact Information</h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-center space-x-4 p-4 rounded-xl border border-slate-50 hover:bg-slate-50/50 transition-colors">
                                                        <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">✉️</div>
                                                        <div>
                                                            <p className="text-[10px] font-black text-slate-300 uppercase">Email Address</p>
                                                            <p className="text-sm font-bold text-slate-700">{user.email}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-4 p-4 rounded-xl border border-slate-50 hover:bg-slate-50/50 transition-colors">
                                                        <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">🏛️</div>
                                                        <div>
                                                            <p className="text-[10px] font-black text-slate-300 uppercase">Department</p>
                                                            <p className="text-sm font-bold text-slate-700">{user.branch}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <section>
                                                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Technical Proficiencies</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {["Critical Thinking", "Problem Solving", "Collaboration", "Academic Research"].map((skill, i) => (
                                                        <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-lg border border-slate-100">{skill}</span>
                                                    ))}
                                                </div>
                                            </section>
                                        </div>

                                        <div className="lg:col-span-2 space-y-10">
                                            <section>
                                                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Professional Objective</h3>
                                                <p className="text-slate-600 text-sm leading-relaxed font-medium bg-slate-50/50 p-6 rounded-2xl border border-slate-50 italic">
                                                    &quot;Dedicated student at BVCOE focusing on {user.branch}. Committed to achieving academic excellence and leveraging AI tools to enhance learning outcomes and technical mastery.&quot;
                                                </p>
                                            </section>

                                            <section>
                                                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Academic Metrics</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                    {[
                                                        { label: "Course Streak", val: "12 Days", status: "Active" },
                                                        { label: "Completed", val: "8 Modules", status: "Verified" },
                                                        { label: "Rank", val: "Top 5%", status: "Global" }
                                                    ].map((stat, i) => (
                                                        <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-indigo-100 transition-all group">
                                                            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{stat.label}</p>
                                                            <p className="text-2xl font-black text-slate-800 mt-1">{stat.val}</p>
                                                            <span className="inline-block mt-3 px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-black rounded uppercase">{stat.status}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>

                                            <div className="bg-[#4f46e5]/5 rounded-3xl p-8 border border-[#4f46e5]/10 flex items-center justify-between">
                                                <div>
                                                    <h4 className="text-base font-black text-indigo-900 tracking-tight">Academic Certification Path</h4>
                                                    <p className="text-indigo-600/60 text-xs font-medium mt-1">Unlock expert-led paths for your branch.</p>
                                                </div>
                                                <button className="px-6 py-3 bg-white border border-indigo-100 text-[#4f46e5] rounded-xl font-bold text-xs hover:bg-indigo-50 transition-all shadow-sm">View Path</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>

            {/* AI Floating Chatbot */}
            <div className="fixed bottom-10 right-10 z-[100]">
                <AIChatbot branch={user.branch} />
            </div>

            {/* Mobile Tab Bar */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center z-40 pb-safe shadow-2xl shadow-indigo-100">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`flex flex-col items-center space-y-1 ${activeSection === item.id ? 'text-[#4f46e5]' : 'text-slate-400'}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {item.icon}
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-tight">{item.name}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}
