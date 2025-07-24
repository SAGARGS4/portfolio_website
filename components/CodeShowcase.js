import Image from "next/image";

export default function CodeShowcase() {
	return (
		<section className="mb-4">
			<h2 className="text-4xl font-bold -mt-10 mb-2 ">
				Code Craftsmanship Showcase
			</h2>
			<p className="text-lg mb-4 ">
				Explore the digital experiences I've brought to life.
			</p>

			<div className="grid md:grid-cols-2 gap-6">
				<div className="border rounded-lg overflow-hidden shadow-sm">
					<img
						src="/WealthMind.png"
						alt="Vibe IN"
						className="w-full h-48 object-cover"
					/>
					<div className="p-4">
						<h3 className="text-xl font-medium mb-1">Wealth-Mind</h3>
						<p className="text-gray-600 mb-2"> 2025</p>
						<p className="mb-3">
							Comprehensive personal finance management app with AI-powered
							expense tracking and budget optimization. Features intelligent
							expense categorization using Gemini AI and real-time data
							visualization. Includes automated email notifications for budget
							alerts and interactive financial charts.
						</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{["React", "Redux", "Tailwind CSS", "Next.js"].map((tech) => (
								<span
									key={tech}
									className="bg-gray-100 px-3 py-1 rounded-full text-sm"
								>
									{tech}
								</span>
							))}
						</div>
						<a
							href="http://wealth-mind.vercel.app"
							className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm"
						>
							Website
						</a>
					</div>
				</div>

				<div className="border rounded-lg overflow-hidden shadow-sm">
					<Image
						src="/VibeIn.png"
						alt="VibeIN"
						width={400}
						height={192}
						className="w-full h-48 object-cover scale-75 transition-transform duration-300 hover:scale-100"
					/>
					<div className="p-4">
						<h3 className="text-xl font-medium mb-1">VibeIn</h3>
						<p className="text-gray-600 mb-2">2024 - 2025</p>
						<p className="mb-3">
							Developed a full-stack real-time messaging application with
							one-on-one and group chat, featuring instant text and image
							sharing.
						</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{[
								"Next.js",
								"MongoDB",
								"Cloudinary",
								"Socket.io",
								"Tailwind CSS",
							].map((tech) => (
								<span
									key={tech}
									className="bg-gray-100 px-3 py-1 rounded-full text-sm"
								>
									{tech}
								</span>
							))}
						</div>
						<a
							href="https://github.com/SAGARGS4/VibeIn"
							className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm"
						>
							Website
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
