export default function CodeShowcase() {
	return (
		<section className="mb-4 ">
			<h2 className="text-2xl font-semibold mb-4">
				Code Craftsmanship Showcase
			</h2>
			<p className="mb-6">
				Explore the digital experiences I've brought to life.
			</p>

			<div className="space-y-8">
				<div className="border-b pb-6">
					<h3 className="text-xl font-medium mb-1">Discord Clone</h3>
					<p className="text-gray-600 mb-2">2023 - 2024</p>
					<p className="mb-2">
						Developed a feature-rich web application replicating Discord's
						functionality, enabling user registration, friend connections, and
						seamless communication including video conferencing.
					</p>
					<div className="flex flex-wrap gap-2 mt-2">
						{["React", "Reflex", "Hook.js", "Express.js", "Sector.io"].map(
							(tech) => (
								<span
									key={tech}
									className="bg-gray-100 px-3 py-1 rounded-full text-sm"
								>
									{tech}
								</span>
							)
						)}
					</div>
				</div>

				<div className="border-b pb-6">
					<h3 className="text-xl font-medium mb-1">Visualize</h3>
					<p className="text-gray-600 mb-2">2023 - 2024</p>
					<p className="mb-2">
						AI-powered image manipulation app with expansion, removal,
						recoloring, and restoration features. Includes subscription-based
						access, secure payment integration, and image management.
					</p>
					<div className="mt-2 space-y-1">
						{[
							"Visualize",
							"VistaAllize",
							"Riccon Edits",
							"Visualization",
							"Visualization Appetites",
						].map((item) => (
							<div key={item} className="flex items-center">
								<span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
								<span>{item}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
