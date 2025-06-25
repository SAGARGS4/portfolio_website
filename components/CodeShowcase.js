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
						src="/your-discord-clone-image-path.png"
						alt="Vibe IN"
						className="w-full h-48 object-cover"
					/>
					<div className="p-4">
						<h3 className="text-xl font-medium mb-1">Discord Clone</h3>
						<p className="text-gray-600 mb-2"> 2025</p>
						<p className="mb-3">
							Developed a feature-rich web application replicating Discord's
							functionality, enabling user registration, friend connections, and
							seamless communication including video conferencing.
						</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{[
								"React",
								"Redux",
								"Node.js",
								"Express.js",
								"Socket.io",
								"MongoDB",
								"WebRTC (Simple-peer)",
								"Mongoose",
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
							href="#"
							className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm"
						>
							Website
						</a>
					</div>
				</div>

				<div className="border rounded-lg overflow-hidden shadow-sm">
					<img
						src="/your-visualize-image-path.png"
						alt="VisuAllize"
						className="w-full h-48 object-cover"
					/>
					<div className="p-4">
						<h3 className="text-xl font-medium mb-1">VisuAllize</h3>
						<p className="text-gray-600 mb-2">2023 - 2024</p>
						<p className="mb-3">
							AI-powered image manipulation app with expansion, removal,
							recoloring, and restoration features. Includes subscription-based
							access, secure payment integration, and image management.
						</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{[
								"Next.js",
								"TypeScript",
								"MongoDB",
								"Cloudinary",
								"Razorpay",
								"Clerk",
								"Tailwind CSS",
								"Prisma",
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
							href="#"
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
