"use client";

import { useState } from "react";

export default function QuizGenerator() {
    const [topic, setTopic] = useState("");
    const [questions, setQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState("input"); // input, quiz, result
    const [answers, setAnswers] = useState<number[]>([]);

    const generateQuiz = async () => {
        if (!topic.trim()) return;
        setLoading(true);
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
            const res = await fetch(`${apiUrl}/api/quiz/generate-quiz`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ topic })
            });
            const data = await res.json();
            if (Array.isArray(data)) {
                setQuestions(data);
                setAnswers(new Array(data.length).fill(-1));
                setCurrentStep("quiz");
            } else {
                throw new Error(data.error || "Invalid response format from AI");
            }
        } catch (err: any) {
            console.error(err);
            alert(err.message || "Failed to generate quiz. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const submitQuiz = () => {
        setCurrentStep("result");
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach((q, i) => {
            if (answers[i] === q.correctAnswer) score++;
        });
        return score;
    };

    return (
        <div className="w-full h-full min-h-[400px] flex flex-col">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#4f46e5]/10 rounded-xl flex items-center justify-center text-[#4f46e5]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                </div>
                <h3 className="text-xl font-black text-slate-800">Mastery Quiz</h3>
            </div>

            {currentStep === "input" && (
                <div className="flex-1 flex flex-col justify-center space-y-6">
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        Enter any topic from your curriculum, and our AI will generate a personalized challenge for you.
                    </p>
                    <div className="space-y-3">
                        <input
                            type="text"
                            className="w-full bg-slate-50 border-2 border-transparent focus:border-[#4f46e5]/20 focus:bg-white rounded-2xl px-5 py-4 outline-none transition-all font-bold text-slate-800 placeholder-slate-400"
                            placeholder="e.g. Thermodynamics, DSA..."
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />
                        <button
                            onClick={generateQuiz}
                            disabled={loading || !topic}
                            className="w-full bg-[#4f46e5] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#4338ca] shadow-lg shadow-indigo-100 disabled:opacity-50 transition-all active:scale-95"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    AI is Thinking...
                                </span>
                            ) : "Generate Challenge"}
                        </button>
                    </div>
                </div>
            )}

            {currentStep === "quiz" && (
                <div className="flex-1 flex flex-col space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {questions.map((q, qIdx) => (
                        <div key={qIdx} className="space-y-4 p-6 bg-slate-50 rounded-[2rem] border border-transparent hover:border-indigo-100 transition-all">
                            <h4 className="font-black text-slate-800 leading-tight">
                                <span className="text-[#4f46e5] mr-2">Q{qIdx + 1}.</span> {q.question}
                            </h4>
                            <div className="grid grid-cols-1 gap-2">
                                {q.options.map((opt: string, oIdx: number) => (
                                    <button
                                        key={oIdx}
                                        onClick={() => {
                                            const newAnswers = [...answers];
                                            newAnswers[qIdx] = oIdx;
                                            setAnswers(newAnswers);
                                        }}
                                        className={`text-left px-5 py-3.5 rounded-xl font-bold text-sm transition-all border-2 ${answers[qIdx] === oIdx
                                            ? "bg-white border-[#4f46e5] text-[#4f46e5] shadow-sm shadow-indigo-50"
                                            : "bg-white border-white text-slate-500 hover:border-slate-200"
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] ${answers[qIdx] === oIdx ? "bg-[#4f46e5] text-white" : "bg-slate-100 text-slate-400"
                                                }`}>
                                                {String.fromCharCode(65 + oIdx)}
                                            </span>
                                            <span>{opt}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={submitQuiz}
                        disabled={answers.includes(-1)}
                        className="w-full bg-[#4f46e5] text-white py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-[#4338ca] shadow-lg shadow-indigo-100 transition-all active:scale-95 sticky bottom-0 border-t-4 border-white disabled:opacity-50"
                    >
                        Analyze Results
                    </button>
                </div>
            )}

            {currentStep === "result" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                    <div className="relative">
                        <div className="w-24 h-24 bg-indigo-50 rounded-[2rem] flex items-center justify-center text-5xl animate-bounce">
                            🏆
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4f46e5] rounded-full text-white text-[10px] font-black flex items-center justify-center">
                            {calculateScore()}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-slate-800">Knowledge Unlocked!</h3>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-2">
                            Success rate: {Math.round((calculateScore() / questions.length) * 100)}%
                        </p>
                    </div>
                    <div className="w-full max-w-xs h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] rounded-full transition-all duration-1000"
                            style={{ width: `${(calculateScore() / questions.length) * 100}%` }}
                        ></div>
                    </div>
                    <button
                        onClick={() => { setCurrentStep("input"); setTopic(""); setQuestions([]); setAnswers([]); }}
                        className="px-10 py-4 bg-slate-100 rounded-2xl font-black text-xs text-[#4f46e5] uppercase tracking-widest hover:bg-[#4f46e5] hover:text-white transition-all shadow-sm active:scale-95"
                    >
                        Try New Topic
                    </button>
                </div>
            )}
        </div>
    );
}
