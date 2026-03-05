"use client";

import { useState, useRef, useEffect } from "react";

export default function AIChatbot({ branch }: { branch: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([
        { role: "ai", content: `Hello! I'm your AI Academic Tutor for ${branch}. How can I help you with your studies today?` }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, loading]);

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMsg = { role: "user", content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/api/ai/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: input, branch })
            });
            const data = await res.json();
            setMessages(prev => [...prev, { role: "ai", content: data.answer || "I'm sorry, I couldn't process that. Please try again." }]);
        } catch (err) {
            setMessages(prev => [...prev, { role: "ai", content: "I'm having trouble connecting right now. Please check your network." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-[2rem] shadow-2xl transition-all active:scale-95 group z-[101] ${isOpen ? "bg-white text-slate-800" : "bg-[#4f46e5] text-white hover:bg-[#4338ca]"
                    }`}
            >
                <div className="relative">
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#4f46e5] group-hover:animate-ping"></span>
                        </>
                    )}
                </div>
                <span className="font-black text-sm uppercase tracking-widest">{isOpen ? "Close AI" : "Chat with AI"}</span>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-32 right-10 w-[400px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-500 z-[100]">
                    {/* Header */}
                    <div className="p-8 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] text-white shrink-0">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-black tracking-tight">AI Poly-Tutor</h3>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-100 mt-1 flex items-center">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                                    {branch} Active
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50 custom-scrollbar">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start animate-in fade-in slide-in-from-left-2 duration-300"}`}>
                                <div className={`max-w-[85%] px-5 py-4 rounded-[1.5rem] text-sm font-bold leading-relaxed shadow-sm ${m.role === "user"
                                        ? "bg-[#4f46e5] text-white rounded-br-none"
                                        : "bg-white text-slate-700 border border-slate-100 rounded-bl-none"
                                    }`}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start animate-pulse">
                                <div className="bg-white border border-slate-100 px-5 py-4 rounded-[1.5rem] rounded-bl-none flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-6 bg-white border-t border-slate-50">
                        <div className="relative flex items-center ring-2 ring-slate-50 focus-within:ring-[#4f46e5]/10 rounded-2xl transition-all">
                            <input
                                type="text"
                                className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none transition-all pr-14"
                                placeholder="Ask about Thermodynamics..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            />
                            <button
                                onClick={handleSend}
                                disabled={loading || !input.trim()}
                                className="absolute right-2 w-10 h-10 bg-[#4f46e5] text-white rounded-xl flex items-center justify-center hover:bg-[#4338ca] disabled:opacity-50 transition-all shadow-lg shadow-indigo-100 active:scale-90"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-[10px] text-center mt-4 text-slate-400 font-bold uppercase tracking-widest">
                            AI-Powered Academic Assistant
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
