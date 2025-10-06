import React from "react"; import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; import { useState } from "react"; import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from "recharts";

function Home() { return ( <div className="p-8 text-center"> <h1 className="text-3xl font-bold mb-4">🌍 GLA360 - Global Leadership Assessment</h1> <p className="mb-6 text-gray-600"> Start your self-assessment and invite your team to provide 360° feedback. </p> <Link to="/selfcheck" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"> Start Self-Check </Link> </div> ); }

function SelfCheck({ setSelfScores }) { const competencies = [ "Global Mindset", "Interpersonal Relationships", "Resilience", "Leading Change", "Empowering Others", "Cultural Adaptability", "Strategic Thinking", ]; const [scores, setScores] = useState({});

const handleSubmit = (e) => { e.preventDefault(); setSelfScores(scores); };

return ( <div className="p-8"> <h2 className="text-2xl font-semibold mb-4">🧭 Self-Assessment</h2> <form onSubmit={handleSubmit} className="space-y-4"> {competencies.map((c) => ( <div key={c} className="flex items-center justify-between"> <label className="font-medium">{c}</label> <input type="number" min="1" max="5" onChange={(e) => setScores({ ...scores, [c]: Number(e.target.value) })} className="border p-1 w-16 text-center rounded" required /> </div> ))} <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg"> Save and View Results </button> </form> </div> ); }

function Dashboard({ selfScores }) { if (!selfScores) return <p className="p-8 text-center text-gray-500">No data yet. Please complete self-check first.</p>;

const data = Object.keys(selfScores).map((key) => ({ competency: key, score: selfScores[key] }));

return ( <div className="p-8"> <h2 className="text-2xl font-semibold mb-6">📊 Your Self-Assessment Results</h2> <div className="flex justify-center"> <RadarChart outerRadius={120} width={500} height={400} data={data}> <PolarGrid /> <PolarAngleAxis dataKey="competency" /> <PolarRadiusAxis angle={30} domain={[0, 5]} /> <Radar name="Self" dataKey="score" stroke="#2563eb" fill="#60a5fa" fillOpacity={0.6} /> <Tooltip /> </RadarChart> </div> <Link to="/invite" className="block mt-6 text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"> Invite Team for 360 Feedback </Link> </div> ); }

function InvitePage() { const [emails, setEmails] = useState(""); const handleInvite = () => { alert(Invites sent to: ${emails}); };

return ( <div className="p-8 text-center"> <h2 className="text-2xl font-semibold mb-4">📨 Invite Your Team</h2> <p className="text-gray-600 mb-4">Enter email addresses (comma separated)</p> <textarea rows="4" className="border p-2 w-2/3 rounded" placeholder="manager@company.com, teammate@company.com" value={emails} onChange={(e) => setEmails(e.target.value)} /> <div className="mt-4"> <button onClick={handleInvite} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"> Send Invites </button> </div> </div> ); }

export default function App() { const [selfScores, setSelfScores] = useState(null);

return ( <BrowserRouter> <Routes> <Route path="/" element={<Home />} /> <Route path="/selfcheck" element={<SelfCheck setSelfScores={setSelfScores} />} /> <Route path="/dashboard" element={<Dashboard selfScores={selfScores} />} /> <Route path="/invite" element={<InvitePage />} /> </Routes> </BrowserRouter> ); }

