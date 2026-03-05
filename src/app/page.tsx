"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-600">

      {/* --- Navbar --- */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth="2.5"></rect>
                  <rect x="9" y="9" width="6" height="6" strokeWidth="2.5"></rect>
                  <line x1="9" y1="1" x2="9" y2="4" strokeWidth="2.5"></line>
                  <line x1="15" y1="1" x2="15" y2="4" strokeWidth="2.5"></line>
                  <line x1="9" y1="20" x2="9" y2="23" strokeWidth="2.5"></line>
                  <line x1="15" y1="20" x2="15" y2="23" strokeWidth="2.5"></line>
                  <line x1="20" y1="9" x2="23" y2="9" strokeWidth="2.5"></line>
                  <line x1="20" y1="15" x2="23" y2="15" strokeWidth="2.5"></line>
                  <line x1="1" y1="9" x2="4" y2="9" strokeWidth="2.5"></line>
                  <line x1="1" y1="15" x2="4" y2="15" strokeWidth="2.5"></line>
                </svg>
              </div>
            </div>
            <span className="text-2xl font-black text-[#1e293b] tracking-tighter">BVCOE<span className="text-indigo-600">Learn</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-semibold text-neutral-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#branches" className="text-sm font-semibold text-neutral-600 hover:text-indigo-600 transition-colors">Branches</a>
            <Link href="/login" className="flex items-center space-x-2 text-sm font-semibold text-neutral-600 hover:text-indigo-600 transition-colors group">
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              <span>Login</span>
            </Link>
            <Link href="/signup" className="bg-[#4f46e5] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#3730a3] transition-all shadow-lg shadow-indigo-200 flex items-center space-x-2 group">
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-40 pb-24 overflow-hidden">
        {/* Floating Icons Background */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-float border border-neutral-100/50 hover:scale-110 transition-transform cursor-pointer group">
          <svg className="w-10 h-10 text-indigo-600 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
        </div>
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-float-delayed border border-neutral-100/50 hover:scale-110 transition-transform cursor-pointer group">
          <svg className="w-10 h-10 text-indigo-600 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth="2"></rect>
            <rect x="9" y="9" width="6" height="6" strokeWidth="2"></rect>
            <line x1="9" y1="1" x2="9" y2="4" strokeWidth="2"></line>
            <line x1="15" y1="1" x2="15" y2="4" strokeWidth="2"></line>
            <line x1="9" y1="20" x2="9" y2="23" strokeWidth="2"></line>
            <line x1="15" y1="20" x2="15" y2="23" strokeWidth="2"></line>
            <line x1="20" y1="9" x2="23" y2="9" strokeWidth="2"></line>
            <line x1="20" y1="15" x2="23" y2="15" strokeWidth="2"></line>
            <line x1="1" y1="9" x2="4" y2="9" strokeWidth="2"></line>
            <line x1="1" y1="15" x2="4" y2="15" strokeWidth="2"></line>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-float-delayed border border-neutral-100/50 hover:scale-110 transition-transform cursor-pointer group">
          <svg className="w-10 h-10 text-emerald-500 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative pointer-events-none">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-bold mb-8 uppercase tracking-wider animate-bounce pointer-events-auto">
            <span>✨</span>
            <span>AI-Powered Learning for BVCOE Students</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-[#1e293b] leading-[1.1] mb-8 pointer-events-auto">
            Learn Engineering Skills <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Smarter, Not Harder</span>
          </h1>

          <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-12 pointer-events-auto">
            The ultimate learning platform designed specifically for Bharati Vidyapeeth students.
            Access branch-specific courses, AI-driven support, and a modern learning experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pointer-events-auto">
            <Link href="/signup" className="bg-[#4f46e5] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#3730a3] hover:scale-105 transition-all shadow-2xl shadow-indigo-200 flex items-center group">
              Get Started Free
              <div className="ml-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </Link>
            <button className="bg-white border-2 border-neutral-100 text-neutral-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-neutral-50 hover:border-indigo-100 transition-all flex items-center justify-center min-w-[200px] group">
              View Courses
              <svg className="ml-2 w-5 h-5 text-neutral-400 group-hover:text-indigo-500 group-hover:translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* --- WHY CHOOSE SECTION --- */}
      <section id="features" className="py-24 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-neutral-900 mb-4">Why Choose BVCOE Learn?</h2>
            <p className="text-neutral-500 font-medium text-lg">Everything you need to master your engineering curriculum in one place.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                ),
                title: 'Branch Wise Learning', desc: 'Access courses curated specifically for your engineering branch, from Computer to Civil.', color: 'indigo'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                ),
                title: 'AI Email Support', desc: 'Get personalized welcome emails and support powered by advanced AI models.', color: 'violet'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                ),
                title: 'Structured Courses', desc: 'Follow a clear learning path with modules, video lessons, and progress tracking.', color: 'amber'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                ),
                title: 'Easy Dashboard', desc: 'A clean, modern interface to manage your learning and track your achievements.', color: 'emerald'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                ),
                title: 'Modern UI', desc: 'Experience a professional EdTech platform inspired by Udemy and Coursera.', color: 'rose'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                ),
                title: 'Secure Platform', desc: 'Your data is protected with industry-standard authentication and security.', color: 'blue'
              }
            ].map((f, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 hover:border-indigo-200 hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.15)] hover:-translate-y-4 transition-all duration-500 group cursor-default">
                <div className={`w-16 h-16 bg-${f.color}-50 text-${f.color}-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm group-hover:shadow-indigo-100`}>
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">{f.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPLORE BRANCHES SECTION --- */}
      <section id="branches" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1e293b] mb-4 text-center">Explore Engineering Branches</h2>
            <p className="text-neutral-500 max-w-xl mx-auto font-medium">We cover all major departments at Bharati Vidyapeeth College of Engineering.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Computer Engineering', icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />, color: 'blue' },
              { name: 'Information Technology', icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />, color: 'indigo' },
              { name: 'CS & Engineering', icon: <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />, color: 'violet' },
              { name: 'CS & Business Systems', icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />, color: 'emerald' },
              { name: 'Robotics & Automation', icon: <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />, color: 'rose' },
              { name: 'Electronics & Telecom', icon: <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.05 9.05 0 0112.728 0M12 20h.01" />, color: 'blue' },
              { name: 'Mechanical Engineering', icon: <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />, color: 'orange' },
              { name: 'Civil Engineering', icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />, color: 'amber' }
            ].map((branch, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 hover:border-indigo-200 hover:shadow-[0_40px_80px_-15px_rgba(79,70,229,0.15)] hover:-translate-y-4 transition-all duration-500 group cursor-default relative overflow-hidden">
                <div className={`w-16 h-16 bg-${branch.color}-50 text-${branch.color}-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm group-hover:shadow-indigo-100`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {branch.icon}
                  </svg>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-neutral-900 group-hover:text-indigo-600 transition-colors duration-300 leading-tight mb-2 tracking-tight">{branch.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 opacity-20 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Master Curriculum</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-indigo-50/0 group-hover:bg-indigo-50/30 transition-colors duration-500 -z-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED COURSES SECTION --- */}
      <section className="py-24 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-neutral-900 mb-4">Featured Courses</h2>
              <p className="text-neutral-500 font-medium">Start your learning journey with our most popular engineering courses.</p>
            </div>
            <a href="#" className="hidden md:flex items-center font-bold text-indigo-600 hover:text-indigo-800 mt-4 md:mt-0">
              View All Courses <span className="ml-2">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Structures & Algorithms',
                level: 'Intermediate',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>,
                desc: 'Master the fundamentals of DSA with C++ and Java.'
              },
              {
                title: 'Robotics & AI Systems',
                level: 'Advanced',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>,
                desc: 'Explore the future of automation with robotics and computer vision.'
              },
              {
                title: 'Modern Web Development',
                level: 'Beginner',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>,
                desc: 'Build full-stack apps with React, Node, and MongoDB.'
              }
            ].map((course, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-neutral-100 hover:shadow-[0_40px_80px_-15px_rgba(79,70,229,0.15)] hover:-translate-y-4 transition-all duration-500 group">
                <div className="h-64 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                  <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {course.icon}
                    </svg>
                  </div>

                  <div className="absolute top-6 right-6 bg-indigo-500 px-4 py-1.5 rounded-full text-[10px] uppercase font-black tracking-widest text-white z-20 shadow-lg">
                    {course.level}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-neutral-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors duration-300">{course.title}</h3>
                  <p className="text-xs font-bold text-neutral-400 mb-5 uppercase tracking-tighter">By Expert Faculty • BVCOE Pune</p>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-8">{course.desc}</p>

                  <div className="flex items-center justify-between pt-8 border-t border-neutral-50">
                    <div className="flex items-center text-yellow-500 font-bold bg-yellow-50 px-3 py-1 rounded-full">
                      <span className="mr-1 text-sm">★</span>
                      <span className="text-sm">4.8</span>
                    </div>
                    <Link href="/signup" className="bg-[#4f46e5] text-white px-8 py-3 rounded-2xl font-extrabold text-sm hover:bg-[#3730a3] transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(79,70,229,0.3)] hover:shadow-indigo-200">
                      Start Learning
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- READY TO START SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-[#4f46e5] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 leading-tight">
            Ready to Start Your <br className="hidden md:block" /> Engineering Journey?
          </h2>
          <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
            Join thousands of Bharati Vidyapeeth students learning smarter with our AI-powered platform.
            Sign up today and get personalized recommendations for your branch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10 font-bold">
            <Link href="/signup" className="group bg-white text-indigo-600 px-10 py-5 rounded-3xl font-black text-lg hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center">
              <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
              Get Started Now
            </Link>
            <Link href="/login" className="group bg-indigo-400/30 backdrop-blur-md border border-indigo-300/50 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-indigo-400/50 hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center">
              <svg className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              Access Portal
            </Link>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0f172a] text-white pt-24 pb-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth="2"></rect>
                  <rect x="9" y="9" width="6" height="6" strokeWidth="2"></rect>
                  <line x1="9" y1="1" x2="9" y2="4" strokeWidth="2"></line>
                  <line x1="15" y1="1" x2="15" y2="4" strokeWidth="2"></line>
                  <line x1="9" y1="20" x2="9" y2="23" strokeWidth="2"></line>
                  <line x1="15" y1="20" x2="15" y2="23" strokeWidth="2"></line>
                  <line x1="20" y1="9" x2="23" y2="9" strokeWidth="2"></line>
                  <line x1="20" y1="15" x2="23" y2="15" strokeWidth="2"></line>
                  <line x1="1" y1="9" x2="4" y2="9" strokeWidth="2"></line>
                  <line x1="1" y1="15" x2="4" y2="15" strokeWidth="2"></line>
                </svg>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">BVCOE<span className="text-indigo-400">Learn</span></span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Empowering Bharati Vidyapeeth students with AI-driven learning tools and branch-specific engineering courses.
            </p>
            <div className="flex space-x-4">
              {['🐙', '🐦', '🔗'].map(icon => (
                <div key={icon} className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-neutral-500 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-neutral-400 font-medium">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#branches" className="hover:text-indigo-400 transition-colors">Branches</a></li>
              <li><Link href="/login" className="hover:text-indigo-400 transition-colors">Login</Link></li>
              <li><Link href="/signup" className="hover:text-indigo-400 transition-colors">Sign Up</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-neutral-500 text-sm">Contact Us</h4>
            <ul className="space-y-6 text-neutral-400 font-medium text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-indigo-500 mt-1 uppercase">✉️</span>
                <span>support@bvcoepune.edu.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-indigo-500 mt-1">📞</span>
                <span>+91 20 2437 1101</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-indigo-500 mt-1">📍</span>
                <span>Dhankawadi, Pune, Maharashtra 411043</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-neutral-500 text-sm">College Info</h4>
            <div className="bg-neutral-800/50 p-6 rounded-3xl border border-neutral-700">
              <p className="text-neutral-300 text-xs leading-relaxed font-medium mb-4">
                Bharati Vidyapeeth College of Engineering, Pune is a premier institute established in 1983.
              </p>
              <div className="text-[10px] font-black tracking-widest text-indigo-400 uppercase">Accreditation</div>
              <div className="text-white font-bold text-sm mt-1 uppercase tracking-tight">NAAC A+ Grade Institute</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-neutral-800 text-center text-neutral-500 text-xs font-bold uppercase tracking-[0.2em]">
          © 2024 BVCOE Learn. All Rights Reserved. Designed for Excellence.
        </div>
      </footer>
    </div>
  );
}
