// export default function Skills() {
// 	const languages = ["TypeScript", "Java", "JavaScript", "SQL"];

// 	const frameworks = [
// 		"NextJS",
// 		"ReactJS",
// 		"NodeJS",
// 		"ExpressJS",
// 		"Redux",
// 		"Zustand",
// 		"TanStack Query (React Query)",
// 		"React Router",
// 		"Socket.io",
// 		"Tailwind CSS",
// 		"LangChain",
// 	];

// 	const databases = [
// 		"PostgreSQL",
// 		"MySQL",
// 		"Supabase",
// 		"MongoDB",
// 		"Redis",
// 		"Vectordb",
// 	];

// 	return (
// 		<section className="mb-12">
// 			<h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>

// 			<div className="mb-8">
// 				<h3 className="text-xl font-medium mb-3">Programming Languages</h3>
// 				<ul className="grid grid-cols-2 gap-2">
// 					{languages.map((lang) => (
// 						<li key={lang} className="flex items-center">
// 							<span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
// 							{lang}
// 						</li>
// 					))}
// 				</ul>
// 			</div>

// 			<div className="mb-8">
// 				<h3 className="text-xl font-medium mb-3">Frameworks & Libraries</h3>
// 				<div className="grid grid-cols-3 gap-3">
// 					{frameworks.map((framework) => (
// 						<span
// 							key={framework}
// 							className="bg-gray-100 px-3 py-1 rounded text-sm"
// 						>
// 							{framework}
// 						</span>
// 					))}
// 				</div>
// 			</div>

// 			<div className="mb-8">
// 				<h3 className="text-xl font-medium mb-3">Databases</h3>
// 				<div className="grid grid-cols-3 gap-3">
// 					{databases.map((db) => (
// 						<span key={db} className="bg-gray-100 px-3 py-1 rounded text-sm">
// 							{db}
// 						</span>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
// index.js

// import React from "react";

// const skills = {
// 	"Programming Languages": [
// 		{
// 			name: "Java",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
// 		},
// 		{
// 			name: "JavaScript",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
// 		},
// 		{
// 			name: "Python",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
// 		},
// 		{
// 			name: "C++",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
// 		},
// 	],
// 	"Front End": [
// 		{
// 			name: "React.js",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
// 		},
// 		{
// 			name: "Next.js",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
// 		},
// 		{
// 			name: "HTML",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
// 		},
// 		{
// 			name: "CSS",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
// 		},
// 		{
// 			name: "Bootstrap",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
// 		},

// 		{
// 			name: "Tailwind CSS",
// 			icon: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/tailwindcss-icon.svg",
// 		},
// 	],
// 	Databases: [
// 		{
// 			name: "MongoDB",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
// 		},
// 		{
// 			name: "MySQL",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
// 		},
// 	],
// 	"Tools & Platforms": [
// 		{
// 			name: "Git",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
// 		},
// 		{
// 			name: "GitHub",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
// 		},
// 		{
// 			name: "VS Code",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
// 		},
// 		{
// 			name: "Figma",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
// 		},
// 		{
// 			name: "Vercel",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
// 		},
// 		{
// 			name: "Ubuntu",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg",
// 		},
// 		{
// 			name: "Postman",
// 			icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
// 		},
// 	],
// };

// const Skill = () => {
// 	return (
// 		<div className="text-2xl font-semibold mb-4">
// 			{Object.entries(skills).map(([section, items]) => (
// 				<section key={section} className="mb-10">
// 					<h2 className="text-2xl font-semibold mb-4">{section}</h2>
// 					<div className="grid grid-cols-5 ">
// 						{items.map((skill, index) => (
// 							<div
// 								key={index}
// 								className="flex flex-col items-center text-center"
// 							>
// 								<div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
// 									<img src={skill.icon} alt={skill.name} className="w-8 h-8" />
// 								</div>
// 								<span className="mt-2 text-sm">{skill.name}</span>
// 							</div>
// 						))}
// 					</div>
// 				</section>
// 			))}
// 		</div>
// 	);
// };

// export default Skill;

// import React from "react";

// const skills = {
// 	"Programming Languages": [
// 		{
// 			name: "Java",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
// 		},
// 		{
// 			name: "JavaScript",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
// 		},
// 		{
// 			name: "Python",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
// 		},
// 		{
// 			name: "C++",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
// 		},
// 	],
// 	"Front End": [
// 		{
// 			name: "React.js",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
// 		},
// 		{
// 			name: "Next.js",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
// 		},
// 		{
// 			name: "HTML",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
// 		},
// 		{
// 			name: "CSS",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
// 		},
// 		{
// 			name: "Bootstrap",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
// 		},

// 		{
// 			name: "Tailwind CSS",
// 			icon: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/tailwindcss-icon.svg",
// 		},
// 	],
// 	Databases: [
// 		{
// 			name: "MongoDB",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
// 		},
// 		{
// 			name: "MySQL",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
// 		},
// 	],
// 	"Tools & Platforms": [
// 		{
// 			name: "Git",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
// 		},
// 		{
// 			name: "GitHub",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
// 		},
// 		{
// 			name: "VS Code",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
// 		},
// 		{
// 			name: "Figma",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
// 		},
// 		{
// 			name: "Vercel",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
// 		},
// 		{
// 			name: "Ubuntu",
// 			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg",
// 		},
// 		{
// 			name: "Postman",
// 			icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
// 		},
// 	],
// };

// const Skill = () => {
// 	return (
// 		<div className="text-2xl font-semibold mb-4">
// 			{Object.entries(skills).map(([section, items]) => (
// 				<section key={section} className="mb-10">
// 					<h2 className="text-2xl font-semibold mb-4">{section}</h2>
// 					<div className="grid grid-cols-5 ">
// 						{items.map((skill, index) => (
// 							<div
// 								key={index}
// 								className="flex flex-col items-center text-center"
// 							>
// 								<div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
// 									<img src={skill.icon} alt={skill.name} className="w-8 h-8" />
// 								</div>
// 								<span className="mt-2 text-sm">{skill.name}</span>
// 							</div>
// 						))}
// 					</div>
// 				</section>
// 			))}
// 		</div>
// 	);
// };
