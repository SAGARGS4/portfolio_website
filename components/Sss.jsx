function fjs() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<h1 className="text-4xl font-bold mb-4">Sss Component</h1>
			<p className="text-lg text-gray-700">This is a simple Sss component.</p>
		</div>
	);
}
const Skill = () => {
	return (
		<div className="text-2xl font-semibold mb-4">
			{Object.entries(skills).map(([section, items]) => (
				<section key={section} className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">{section}</h2>
					<div className="grid grid-cols-5 ">
						{items.map((skill, index) => (
							<div
								key={index}
								className="flex flex-col items-center text-center"
							>
								<div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
									<img src={skill.icon} alt={skill.name} className="w-8 h-8" />
								</div>
								<span className="mt-2 text-sm">{skill.name}</span>
							</div>
						))}
					</div>
				</section>
			))}
		</div>
	);
};
