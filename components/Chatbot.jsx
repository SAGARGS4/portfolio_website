import { useState, useRef, useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;

const SYSTEM_PROMPT = `
You are a friendly portfolio assistant for Sagar G S.
Only answer questions about Sagar using this information below.
Keep replies short (2–4 sentences). Be friendly and professional.
If asked anything unrelated to Sagar, politely redirect.

=== PERSONAL INFO ===
Name: Sagar G S
Role: Software Engineer
Location: Bangalore, India
Email: sagugs492003@gmail.com
GitHub: https://github.com/SAGARGS4
LinkedIn: https://www.linkedin.com/in/sagargs04

=== SUMMARY ===
Aspiring Software Engineer with hands-on internship experience building
and shipping production-grade web applications. Built AI-integrated
products, filed an IoT patent, and placed Top 10 in a national hackathon.
Seeking a full-time role that inspires creativity, collaboration, and growth.

=== EXPERIENCE ===

1. Bock — Software Development Intern (Feb 2026 – May 2026, Bangalore)
   - Architected and delivered the MVP of BOCK Nexus and BOCK Photos
     from the ground up using vanilla JavaScript, directly accelerating
     the product's market launch in a fast-paced startup environment.
   - Designed modular, reusable JavaScript modules for core backend
     functionality, workflow automation, and scalable codebase architecture
     across both products.
   - Collaborated with product and design stakeholders to translate feature
     requirements into functional implementations, reducing feedback loops
     and iterating rapidly on user feedback.

2. Small Fare Services Pvt. Ltd. — Frontend Developer Intern
   (Feb 2026 – May 2026, Remote)
   - Built and maintained responsive web pages using React.js and
     JavaScript (ES6+), converted Figma designs into working web pages.
   - Created reusable UI components that helped the team build faster.
   - Tested and debugged UI across multiple browsers and devices.

=== SKILLS ===
Languages: Java, JavaScript (ES6+)
Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS
Backend: Node.js, Express.js
Databases: MySQL, MongoDB, Supabase
Dev Tools: Git, GitHub, VS Code, Eclipse IDE, Postman
Real-time: Socket.IO
Auth: JWT Authentication

=== PROJECTS ===

1. WealthMind — AI Personal Finance Platform
   Stack: Next.js, React.js, Supabase, Google Gemini AI,
          Tailwind CSS, Prisma ORM, JavaScript (ES6+)
   - Integrated Google Gemini AI API for automated transaction
     categorisation with 90%+ accuracy across diverse expense types.
   - Designed a fully responsive analytics dashboard with real-time
     data visualisation via interactive charts.
   - Built secure user authentication and automated email notifications
     for budget alerts and financial milestone tracking.

2. VibeIn — Real-Time Chat Application
   Stack: MongoDB, Express.js, React.js, Node.js,
          Socket.IO, HTML5, CSS3, JavaScript (ES6+)
   - Developed a full-stack real-time messaging app with one-on-one
     and group chat, featuring instant text and image sharing.
   - Implemented secure JWT authentication, message history, and
     online status indicators.
   - Built using Socket.IO for real-time communication with a fully
     responsive web interface.

=== EDUCATION ===
- B.E. Information Science & Engineering
  CMR Institute of Technology, Bangalore (Nov 2022 – Jul 2026)

- 12th Grade — Science
  SIR MV PU College, Davanagere

- 10th Grade
  SRS Heritage School, Chitradurga

=== ACHIEVEMENTS ===
- IoT Patent Applicant — real-time tamper detection & secure
  package delivery monitoring system.
- Top 10 out of 100+ teams — IMPULSE 2024 national hackathon.
- Frontend Battle 2.0 — IIT Bhubaneswar.
- MSME IDEA Hackathon 4.0 & 5.0 participant.
- Microsoft & LinkedIn: Generative AI Productivity Skills certified.

=== HOW TO RESPOND TO COMMON QUESTIONS ===
- "Tell me about yourself" → Give a 3-sentence summary of Sagar
- "What are your skills?" → List his tech stack clearly
- "What projects have you built?" → Describe WealthMind and VibeIn
- "Where has he worked?" → Mention Bock and Small Fare Services
- "How can I contact Sagar?" → Give email and LinkedIn/GitHub links
- "Where did he study?" → CMR Institute + SIR MV PU + SRS Heritage
- "What has he achieved?" → List his patent, hackathon, certifications
- Salary, personal life questions → politely decline to answer

Keep replies short (2–4 sentences). Be friendly and professional.
If asked anything unrelated to Sagar, politely redirect.
`;

export default function Chatbot() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			sender: "bot",
			text: "Hi there! 👋 I'm an AI assistant for Sagar. Ask me anything about his experience, skills, or projects!",
		},
	]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages, isLoading]);

	const handleSend = async () => {
		if (!input.trim()) return;

		if (!API_KEY) {
			alert(
				"Missing Google Gemini API Key. Please add NEXT_PUBLIC_GEMINI_API_KEY to your .env.local file or Vercel environment variables.",
			);
			return;
		}

		const userMessage = input.trim();
		setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
		setInput("");
		setIsLoading(true);

		try {
			const response = await fetch(URL, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					contents: [
						{
							parts: [{ text: SYSTEM_PROMPT + "\n\nUser: " + userMessage }],
						},
					],
				}),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			const reply = data.candidates[0].content.parts[0].text;

			setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
		} catch (error) {
			console.error("Error communicating with Gemini:", error);
			setMessages((prev) => [
				...prev,
				{
					sender: "bot",
					text: "Oops, I'm having trouble connecting right now. Please try again later.",
				},
			]);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="fixed bottom-6 right-6 z-50 font-sans">
			{/* Chat Panel */}
			<div
				className={`absolute bottom-20 right-0 w-80 sm:w-96 bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
					isOpen
						? "scale-100 opacity-100"
						: "scale-90 opacity-0 pointer-events-none"
				}`}
				style={{ height: "500px" }}
			>
				{/* Header */}
				<div className="bg-gray-900 text-white p-4 flex justify-between items-center">
					<div className="flex items-center space-x-3">
						<div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-bold">
							S
						</div>
						<div>
							<h4 className="font-semibold text-sm m-0 leading-tight">
								Sagar's Assistant
							</h4>
							<span className="text-xs text-green-400">Online</span>
						</div>
					</div>
					<button
						onClick={() => setIsOpen(false)}
						className="text-gray-400 hover:text-white transition-colors"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				{/* Chat Body */}
				<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 flex flex-col">
					{messages.map((msg, idx) => (
						<div
							key={idx}
							className={`max-w-[80%] p-3 rounded-xl text-sm whitespace-pre-wrap ${
								msg.sender === "bot"
									? "bg-gray-200 text-gray-800 self-start rounded-bl-sm"
									: "bg-purple-600 text-white self-end rounded-br-sm"
							}`}
						>
							{msg.text}
						</div>
					))}
					{isLoading && (
						<div className="bg-gray-200 text-gray-800 self-start rounded-xl rounded-bl-sm p-3 flex space-x-1 items-center">
							<div
								className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
								style={{ animationDelay: "-0.3s" }}
							></div>
							<div
								className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
								style={{ animationDelay: "-0.15s" }}
							></div>
							<div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
						</div>
					)}
					<div ref={messagesEndRef} />
				</div>

				{/* Footer */}
				<div className="p-3 bg-white border-t border-gray-200 flex space-x-2">
					<input
						type="text"
						className="flex-1 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-gray-800"
						placeholder="Type a message..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && handleSend()}
						disabled={isLoading}
					/>
					<button
						onClick={handleSend}
						disabled={isLoading || !input.trim()}
						className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					>
						<svg
							className="w-4 h-4 ml-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Floating Toggle Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`w-14 h-14 bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-700 hover:scale-105 transition-all duration-300 ${
					isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
				}`}
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					viewBox="0 0 24 24"
				>
					<rect x="3" y="11" width="18" height="10" rx="2" />
					<circle cx="12" cy="5" r="2" />
					<path d="M12 7v4" />
					<line x1="8" y1="16" x2="8.01" y2="16" />
					<line x1="16" y1="16" x2="16.01" y2="16" />
				</svg>
			</button>
		</div>
	);
}
