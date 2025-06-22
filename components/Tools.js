export default function Tools() {
	const tools = ["Git", "GitHub", "Docker", "Postman", "AWS(EC2)"];

	return (
		<section className="mb-12">
			<h2 className="text-2xl font-semibold mb-4">Tools & Platforms</h2>
			<div className="grid grid-cols-3 gap-3">
				{tools.map((tool) => (
					<span key={tool} className="bg-gray-100 px-3 py-1 rounded text-sm">
						{tool}
					</span>
				))}
			</div>
		</section>
	);
}
