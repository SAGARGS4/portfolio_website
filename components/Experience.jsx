export default function Experience() {
	const experiences = [
		{
			company: "Small Fare Services Pvt. Ltd.",
			role: "Frontend Developer Intern",
			duration: "February 2026 - May 2026",
			location: "Remote",
			bullets: [
				"Engineered responsive, production-grade web pages using React.js and JavaScript (ES6+), building reusable UI components that measurably improved team development velocity.",
				"Converted Figma designs into fully functional, responsive web pages, working closely with designers to match layouts, colours, and components accurately.",
				"Collaborated with a cross-functional team to ship new website features, ensuring full cross-browser compatibility and a polished user experience leveraging HTML5 and CSS3.",
			],
		},

		{
			company: "Bock",
			role: "Software Development Intern",
			duration: "February 2026 - May 2026",
			location: "Bangalore, India",
			bullets: [
				"Architected and delivered the MVP of BOCK Nexus and BOCK Photos from the ground up using vanilla JavaScript, directly accelerating the product's market launch within a fast-paced startup environment.",
				"Designed modular, reusable JavaScript modules for core backend functionality, operational workflow automation, and scalable codebase architecture across both products.",
				"Collaborated with product and design stakeholders to translate feature requirements into functional implementations, reducing feedback loops and iterating rapidly on user feedback.",
			],
		},
	];

	return (
		<section className="mb-12">
			<h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

			{experiences.map((exp, index) => (
				<div key={index} className="mb-8">
					<div className="flex justify-between items-start mb-1">
						<h3 className="text-xl font-medium">{exp.company}</h3>
						<p className="text-gray-600 text-sm">{exp.duration}</p>
					</div>
					<p className="text-lg mb-2">{exp.role}</p>
					{exp.location && (
						<p className="text-gray-500 text-sm mb-2">{exp.location}</p>
					)}
					<ul className="list-disc list-inside space-y-1">
						{exp.bullets.map((bullet, i) => (
							<li key={i} className="text-gray-600">
								{bullet}
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
}
